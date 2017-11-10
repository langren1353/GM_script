// ==UserScript==
// @name  AC-有道取词+翻译
// @version 0.8
// @namespace youdao
// @author  AC -modified from ：Liu Yuyang(sa@linuxer.me)
// @description 一个可以在浏览器中自由使用的屏幕取词脚本-alt+鼠标翻译，或者选中按Q翻译
// @include *
// @note 2017-11-15 修复了一大堆，优化了下界面的展示问题
// @note 2017-2-21 修正了由于z-index过低导致的淘宝页面翻译过于底层而看不见
// @note 2016-9-29 修正了部分格式错误，换行的时候稍微好了点
// @note 2016-1-12 终于修正了，之前只改了句子翻译中的文字颜色，才发现单词翻译后的颜色简直看不清。。。
// @note 2016-1-9 修改默认背景色
// @note 2016-1-8 修正chrome的支持
// @note 2016-1-8 修改窗体默认大小，尽可能的显示回车功能，避免了以前的全部显示在同一行--依旧有bug
// @note 2015-11-26 修改部分地方适合自己使用，选中文字，按下Q翻译，或者alt+鼠标选中，自动翻译
// @icon    https://coding.net/u/zb227/p/zbImg/git/raw/master/img0/icon.jpg
// @run-at  document-end
// @grant GM_xmlhttpRequest
// ==/UserScript==

var curX;
var curY;
var timeout;
var transResult;

document.body.addEventListener("mousemove", function(e){curX = e.clientX; curY = e.clientY;}, false);
document.body.addEventListener("keypress", callbackWrapper, false);
document.body.addEventListener("mouseup", callbackWrapper, false);
document.body.addEventListener("dblclick", callbackWrapper, false);

function callbackWrapper(e) {
    if(e.type === 'dblclick' && isInACTransPop()){
        console.log("双击操作：复制目标文本");
        console.log(transResult);
        return;
    }
    if(e.charCode == 113  || e.type == "mouseup"){ //Q
        // remove previous .ACyoudaoPopup if exists
        var previous = document.querySelector(".ACyoudaoPopup");
        if(previous && isInACTransPop()){
            document.body.removeChild(previous);
            transResult = "";
        }
        // quick fix. with ctrl key held
        if (e.type == "mouseup" && !e.altKey) {
            return;
        }
        clearTimeout(timeout);
        timeout = setTimeout(function(){
            translate();
        }, 120);
    }
}
function isInACTransPop(){
    var checkNode = document.getSelection().baseNode.parentNode;
    return checkNode && (""+checkNode.className).indexOf("ACyoudao") < 0;
}
function translate() {
    var selectObj = document.getSelection();
    if (selectObj.anchorNode.nodeType == 3) {
        var word = selectObj.toString();
        if (word == "") {
            return;
        }
        word = word.replace(new RegExp('(\r\n)+', 'g'), 'QWER');// 特殊标记便于替换
        var ts = new Date().getTime();
        var mx = curX;
        var my = curY;
        translate(word, ts);
    }

    function popup(mx, my, result) {

        var youdaoWindow = document.createElement('div');
        youdaoWindow.classList.toggle("ACyoudaoPopup");
        // parse
        var dictJSON = JSON.parse(result);
        console.log(dictJSON);
        var query = dictJSON['query'];
        var errorCode = dictJSON['errorCode'];
        if (dictJSON['basic']) {
            word();
        } else {
            sentence();
        }
        // main window
        // first insert into dom then there is offsetHeight！IMPORTANT！

        document.body.appendChild(youdaoWindow);
        youdaoWindow.style.color = "#000000";
        youdaoWindow.style.textAlign = "left";
        youdaoWindow.style.display = "block";
        youdaoWindow.style.position = "fixed";
        youdaoWindow.style.background = "#EDF6FF";
        youdaoWindow.style.borderRadius = "3px";
        youdaoWindow.style.boxShadow = "0 0 5px 0";
        youdaoWindow.style.opacity = "1";
        youdaoWindow.style.minWidth = "300px";
        youdaoWindow.style.maxWidth = "550px";
        youdaoWindow.style.wordWrap = "break-word";
        youdaoWindow.style.fontSize = "15px";
        youdaoWindow.style.left = mx + 10 + "px";
        if (mx + 200 + 30 >= window.innerWidth) {
            youdaoWindow.style.left = parseInt(youdaoWindow.style.left) - 200 + "px";
        }
        //alert(window.innerHeight);
        if (my + youdaoWindow.offsetHeight + 30 >= window.innerHeight) {
            youdaoWindow.style.bottom = "20px";
        } else {
            youdaoWindow.style.top = my + "px";
        }
        youdaoWindow.style.padding = "3px";
        youdaoWindow.style.zIndex = '9999999999';

        function word() {

            function play(word) {
                //console.log("[DEBUG] PLAYOUND")

                function playSound(buffer) {
                    var source = context.createBufferSource();
                    source.buffer = buffer;
                    source.connect(context.destination);
                    source.start(0);
                }

                var context = new AudioContext();
                var soundUrl = 'https://dict.youdao.com/dictvoice?type=2&audio='+encodeURIComponent(word);
                var p = new Promise(function(resolve, reject) {
                    var ret = GM_xmlhttpRequest({
                        method: "GET",
                        url: soundUrl,
                        responseType: 'arraybuffer',
                        onload: function(res) {
                            try {
                                context.decodeAudioData(res.response, function(buffer) {
                                    resolve(buffer);
                                });
                            } catch(e) {
                                reject(e);
                            }
                        }
                    });
                });
                p.then(playSound, function(e) {
                    console.log(e);
                });
            }

            var basic = dictJSON['basic'];
            var header = document.createElement('div');
            header.className = "ACyoudaoPopupDIV";
            // header
            var span = document.createElement('span');
            span.className = "ACyoudaoPopupSpan";
            span.innerHTML = query;
            header.appendChild(span);
            // phonetic if there is
            var phonetic = basic['phonetic'];
            if (phonetic) {
                var phoneticNode = document.createElement('span');
                phoneticNode.innerHTML = '[' + phonetic + ']';
                phoneticNode.style.cursor = "pointer";
                header.appendChild(phoneticNode);
                var playLogo = document.createElement('span');
                header.appendChild(phoneticNode);
                phoneticNode.addEventListener('mouseup', function(e){
                    if (e.target === phoneticNode) {
                    }
                    e.stopPropagation();
                    play(query);
                }, false);
            };
            header.style.color = "black";
            header.style.margin = "0";
            header.style.padding = "0";
            span.style.fontSize = "15px";
            span.style.color = "black";

            youdaoWindow.appendChild(header);
            var hr = document.createElement('hr');
            hr.className = "ACyoudaoPopupHR";
            hr.style.margin = "0";
            hr.style.padding = "0";
            hr.style.height = "1px";
            hr.style.borderTop = "dashed 1px black";
            youdaoWindow.appendChild(hr);
            var ul = document.createElement('ul');
            ul.className = "ACyoudaoPopupUL";
            // ul style
            ul.style.margin = "0";
            ul.style.padding = "0";
            basic['explains'].map(function(trans) {
                var li = document.createElement('li');
                li.className = "ACyoudaoPopupLi";
                li.style.listStyle = "none";
                li.style.margin = "0";
                li.style.padding = "0";
                li.style.background = "none";
                li.style.color = "#008CD8";
                li.appendChild(document.createTextNode(trans));
                ul.appendChild(li);
            });
            youdaoWindow.appendChild(ul);

        }

        function sentence() {
            var ul = document.createElement('ul');
            ul.className = "ACyoudaoPopupUL";
            // ul style
            ul.style.margin = "0";
            ul.style.padding = "0";
            dictJSON['translation'].map(function(trans) {
                var li = document.createElement('li');
                li.style.listStyle = "none";
                li.style.margin = "0";
                li.style.padding = "0";
                li.style.background = "none";
                li.style.color = "#008CD8";
                li.className = "ACyoudaoPopupLi";
                trans = trans.replaceAll('QWER', '\n').replaceAll(",", ", ");
                console.log(trans);
                transResult += trans;
                var reg = new RegExp("\n","gm");
                while(reg.exec(trans) != null){// 如果找不到回车了，那么最后重复一次新建<p>
                    //找到一个回车，那么添加一个新的<p>，内容为：trans.sub(0, ?); trans = trans.sub(?);
                    var newNode = document.createElement("li");
                    newNode.className = "ACyoudaoPopupLi";
                    newNode.style.listStyle = "none";
                    newNode.style.margin = "0";
                    newNode.style.padding = "0";
                    newNode.style.background = "none";
                    newNode.style.color = "#008CD8";
                    newNode.style.fontSize = "15px";
                    newNode.innerHTML = trans.substring(0, reg.lastIndex-2);
                    li.appendChild(newNode);
                    trans = trans.substring(reg.lastIndex);
                }
                var newNode = document.createElement("div");
                newNode.className = "ACyoudaoPopupDiv";
                newNode.innerHTML = trans;
                newNode.style = "color:#008CD8 !important;font-size:15px !important;margin-left:10px;margin-right:10px;";
                li.appendChild(newNode);
                ul.appendChild(li);
            });
            youdaoWindow.appendChild(ul);
        }
    }


    function translate(word, ts) {
        word = encodeURIComponent(word);
        var reqUrl = 'https://fanyi.youdao.com/openapi.do?type=data&doctype=json&version=1.1&relatedUrl=http%3A%2F%2Ffanyi.youdao.com%2F%23&keyfrom=fanyiweb&key=null&translate=on&q='+word+'&ts='+ts;
        console.log("request url: ", reqUrl);
        var ret = GM_xmlhttpRequest({
            method: "GET",
            url: reqUrl,
            headers: {"Accept": "application/json"},  // can be omitted...
            onreadystatechange: function(res) {
            },
            onload: function(res) {
                var retContent = res.response;
                //console.log(retContent)
                popup(mx, my, retContent);
            },
            onerror: function(res) {
                console.log("error");
            }
        });
    }
    String.prototype.replaceAll = function(s1,s2){
        return this.replace(new RegExp(s1,"gm"),s2);
    };
}
