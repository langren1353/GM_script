// ==UserScript==
// @name        挊
// @namespace   撸
// @description 自动获取磁链接并自动离线下载

// @include     http*://avio.pw/*
// @include     http*://avso.pw/*
// @include     http*://avxo.pw/*
// @include     http*://www.av28.com/*/movie/*

// @include     http*://*javlibrary.com/*
// @include     http*://*javlib.com/*
// @include     http*://*javl10.com/*
// @include     http*://*jav11b.com/*
// @include     http*://*ja14b.com/*

// @include     http*://www.libredmm.com/products/*

// @include     http*://www.javbus.com/*
// @include     http*://www.javbus.me/*
// @include     http*://www.javbus2.com/*
// @include     http*://www.javbus3.com/*
// @include     http*://www.javbus5.com/*

// @include     http*://www.icpmp.com/fanhao/*.html
// @include     http*://blog.jav4you.com/*
// @include     http*://*1pondo.tv/*/index.htm
// @include     http*://www.dmm.co.jp/digital/videoa/*
// @include     http*://www.jade-net-home.com/products/*

// @include     http*://pan.baidu.com/disk/home*
// @include     http*://115.com/?tab=offline&mode=wangpan
// @include     http*://www.furk.net/users/files/add

// @include     /^https?://javbooks.com/content_(un)?censored/.*/
// @include     /^https?://jmvbt.com/content_(un)?censored/.*/


// @note        edit form https://sleazyfork.org/zh-CN/scripts/8392-%E6%8C%8A V1.50

// @version     1.52
// @run-at      document-end
// @grant       GM_xmlhttpRequest
// @grant       GM_setClipboard
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_addStyle
// @grant       GM_registerMenuCommand
// ==/UserScript==

var main = {
    //av信息查询 类
    jav: {
        type: 0,
        re: /(avio|avso|avxo|av28).*movie.*/,
        insert_where: "#movie-share",
        vid: function () {
            return document.querySelector(".header").nextElementSibling.innerHTML;
        }
    },
    javlibrary: {
        type: 0,
        re: /(javlibrary|javlib|javl10|jav11b|ja14b).*\?v=.*/,
        insert_where: "#video_favorite_edit",
        vid: function () {
            return document.querySelector("#video_id").getElementsByClassName("text")[0].innerHTML;
        }
    },
    javbus: {
        type: 0,
        re: /javbus/,
        insert_where: "#star-div",
        vid: function () {
            document.querySelector(".header").nextElementSibling.textContent;
        }
    },
    javbtbook:{
        type: 0,
        re: /(jmvbt|javbooks).com/,
        insert_where: ".Preview_cg_area,.dht_dl_area",
        vid: function () {
            GM_addStyle("body>center{display:none;}");
            return document.querySelector("#info .infobox a").textContent
        }
    },
    fanhaoku: {
        type: 0,
        re: /icpmp/,
        insert_where: ".mod_film",
        vid: function () {
            return document.querySelector(".title_inner").title;
        }
    },
    libredmm: {
        type: 0,
        re: /libredmm/,
        insert_where: ".container",
        vid: function () {
            return location.href.match(/products\/(.*)/)[1];
        }
    },
    blogjav4you: {
        type: 0,
        re: /blog\.jav4you\.com/,
        insert_where: ".posttext",
        vid: function () {
            return document.querySelector(".posttitle a").textContent.match(/\[(.*)\]/)[1];
        },
    },
    pondo1: {
        type: 0,
        re: /1pondo\.tv.*\/index.htm/,
        insert_where: ".hdg3",
        vid: function () {
            return location.pathname.split("/")[3];
        },
    },
    jadenethome:{
        type:0,
        re:/jade-net-home/,
        insert_where:".detailStory",
        vid:function(){
            return document.querySelector("#detailRight dl dd").textContent;
        }
    },
    dmm: {
        type: 0,
        re: /dmm\.co\.jp/,
        insert_where: ".lh4",
        vid: function () {
            var result = location.href.replace(/.*cid=/, "").replace(/\/\??.*/, "").match(/[^h_0-9].*/);
            return result[0] ? result[0].replace("00", "") : "";
        }
    },

    //网盘下载 类
    //这些 $ 是真正的 jquery
    baidu: {
        type: 1,
        re: /pan\.baidu\.com/,
        fill_form: function (magnet) {
            document.querySelector(".g-button[data-button-id=b13]").click();
            setTimeout(function () {
                document.querySelector("#_disk_id_2").click();
                setTimeout(function () {
                    document.querySelector("#share-offline-link").value = magnet;
                    document.querySelector(".g-button[data-button-id=b65]").click();
                }, 500);
            }, 1500);
        }
    },
    115: {
        type: 1,
        re: /115\.com/,
        fill_form: function (link) {
            var rsc = setInterval(function () {
                if (document.readyState == "complete") {
                    clearInterval(rsc);
                    setTimeout(function () {
                        Core["OFFL5Plug"].OpenLink();
                        setTimeout(function () {
                            $("#js_offline_new_add").val(link);
                        }, 300);
                    }, 1000);
                }
            }, 400);
        }
    },
    letv: {
        type: 1,
        re: /cloud\.letv\.com/,
        fill_form: function (link) {
            setTimeout(function () {
                $("#offline-btn").click();
                setTimeout(function () {
                    $("#offline_clear_complete").prev().click();
                    setTimeout(function () {
                        $("#offline-add-link").val(link);
                    }, 500);
                }, 1000);
            }, 2000);
        }
    },
    furk: {
        type: 1,
        re: /www\.furk\.net/,
        fill_form: function (link) {
            setTimeout(function () {
                $("#url").val(link.replace("magnet:?xt=urn:btih:", ""));
            }, 1500);
        }
    },
    360: {
        type: 1,
        re: /yunpan\.360\.cn\/my/,
        fill_form: function (link) {
            yunpan.cmdCenter.showOfflineDia();
            setTimeout(function () {
                $(".offdl-btn-create").click();
                setTimeout(function () {
                    $("#offdlUrl").val(link);
                }, 500);
            }, 1000);
        }
    },
    uc: {
        type: 1,
        re: /disk\.yun\.uc\.cn\//,
        fill_form: function (link) {
            setTimeout(function () {
                $("#newuclxbtn_index").click();
                setTimeout(function () {
                    $("#uclxurl").val(link);
                }, 1000);
            }, 1200);
        }
    },

};

var offline_sites = {
    baidu: {
        url: "http://pan.baidu.com/disk/home",
        name: "百度云",
        enable: true
    },
    115: {
        name: "115离线",
        url: "http://115.com/?tab=offline&mode=wangpan",
        enable: true,
    },
    varv: {
        name: "乐视云",
        url: "http://cloud.letv.com/webdisk/home/index",
        enable: false
    },
    360: {
        name: "360云",
        url: "http://yunpan.360.cn/my/",
        enable: false
    },
    uc: {
        name: "UC离线",
        url: "http://disk.yun.uc.cn/",
        enable: false
    },
    furk: {
        name: "Furk",
        url: "https://www.furk.net/users/files/add",
        enable: true
    },
};
var common = {
    add_style: function () {
        GM_addStyle([
            "#nong-table{border-collapse: initial !important;background-color: white !important;text-align: center !important;margin:10px auto;color:#666 !important;font-size:13px;text-align:center !important;border: 1px solid #cfcfcf !important;border-radius: 10px !important;}",
            "#nong-table a {margin-right: 5px !important;color:blue}",
            "#nong-table a:hover {color:#d20f00 !important;}",
            "#nong-table th,#nong-table td{text-align: inherit !important;height:30px;padding:0 1em 0 !important;}",
            ".nong-row{text-align: inherit !important;height:30px;padding:0 1em 0 !important;border: 1px solid #EFEFEF !important;}",
            ".nong-row:hover{background-color: #dae8ff !important;}",
            ".nong-offline-download{color: rgb(0, 180, 30) !important;}",
            ".nong-offline-download:hover{color:red !important;}",
        ].join(""));
    },
    handle_copy_event: function (event) {
        event.target.innerHTML = "成功";
        GM_setClipboard(event.target.href);
        setTimeout(function () {
            event.target.innerHTML = "复制";
        }, 1000);
        event.preventDefault(); //阻止跳转
    },
    handle_dl_event: function (event) {
        var mag = event.target.parentElement.parentElement.parentElement.getAttribute("mag");
        console.info("磁链接", mag);
        //console.log(0);
        GM_setValue("magnet", mag);
    },

    reg_event: function () {
        var selector_event_map = [{
            selector: ".nong-copy",
            type: "click",
            fn: this.handle_copy_event
        }, {
            selector: ".nong-offline-download",
            type: "click",
            fn: this.handle_dl_event
        }];
        selector_event_map.forEach(function (obj) {
            Array.from(document.querySelectorAll(obj.selector)).forEach(function (elem) {
                elem.addEventListener(obj.type, obj.fn);
            })
        });
        /*
        for (var obj of selector_event_map) {
          for (var elem of document.querySelectorAll(obj.selector)) {
            //console.log(elem, obj.type, obj.fn);
            elem.addEventListener(obj.type, obj.fn);
          }
        }*/
    },
    parsetext: function (text) {
        var doc = null;
        try {
            doc = document.implementation.createHTMLDocument("");
            doc.documentElement.innerHTML = text;
            return doc;
        }
        catch (e) {
            alert("parse error");
        }
    },
};
var magnet_table = {
    template: {
        create_head: function (src) {
            var a = document.createElement("tr");
            a.className = "nong-row";
            a.id = "nong-head";
            var head_str = [
                "大小",
                "操作",
                "离线下载"
            ];
            var th_list = [document.createElement("th"), document.createElement("th"), document.createElement("th"), document.createElement("th")];

            var select_box = document.createElement("select");
            var option_str = my_search.search_name_string;
            //console.log("get", GM_getValue("search_index"));
            var index = GM_getValue("search_index", 0);
            var op_value = 0;
            option_str.forEach(function (str) {
                var op = document.createElement("option");
                op.value = op_value;
                op.textContent = str;
                if (index == op_value) {
                    op.setAttribute("selected", "selected");
                }
                op_value++;
                select_box.appendChild(op);
            });
            /*
            for (var str of option_str) {
              var op = document.createElement("option");
              op.value = op_value;
              op.textContent = str;
              if (index == op_value) {
                op.setAttribute("selected", "selected");
              }
              op_value++;
              select_box.appendChild(op);
            }*/
            select_box.addEventListener("change", function (e) {
                GM_setValue("search_index", this.value);
                run();
            });
            th_list[0].appendChild(select_box);

            th_list[1].appendChild(document.createElement("a"));
            th_list[1].lastChild.setAttribute("href", src);
            th_list[1].lastChild.setAttribute("target", "_blank");
            th_list[1].lastChild.textContent = head_str[0];

            th_list[2].appendChild(document.createElement("a"));
            th_list[2].lastChild.textContent = head_str[1];

            th_list[3].appendChild(document.createElement("a"));
            th_list[3].lastChild.textContent = head_str[2];

            th_list.forEach(function (th) {
                a.appendChild(th);
            });
            /*
            for (var th of th_list) {
              a.appendChild(th);
            }
            */
            return a;
        },
        create_row: function (data) {
            var tr = document.createElement("tr");
            tr.className = "nong-row";
            tr.setAttribute("mag", data.mag);
            var td = document.createElement("td");
            var list = [this.create_info(data.title, data.mag), this.create_size(data.size, data.src), this.create_operation(data.mag), this.create_offline()];
            list.forEach(function (elem) {
                var c = td.cloneNode(true);
                c.appendChild(elem);
                tr.appendChild(c);
            });
            /*
            for (var elem of [this.create_info(data.title, data.mag), this.create_size(data.size, data.src), this.create_operation(data.mag), this.create_offline()]) {
              var c = td.cloneNode(true);
              c.appendChild(elem);
              tr.appendChild(c);
            }
            */
            return tr;
        },
        create_row_for_sukebei: function (data) {
            var tr = document.createElement("tr");
            tr.className = "nong-row";
            tr.setAttribute("mag", data.mag);
            var td = document.createElement("td");
            var append_elems = [

                (function (title, src, self) {
                    return self.create_info(title, src);
                })(data.title, data.src, this),

                (function (size, src, self) {
                    return self.create_size(size, src);
                })(data.size, data.src, this),

                (function (torrent_url, self) {
                    var operate = self.create_operation(torrent_url);
                    operate.firstChild.textContent = "种子";
                    operate.firstChild.setAttribute("class", "nong-copy-sukebei");
                    operate.firstChild.setAttribute("target", "_blank");
                    return operate;
                })(data.torrent_url, this),

                (function (self) {
                    var div = document.createElement("div");
                    div.textContent = "暂不支持离线下载";
                    return div;
                })(this)];
            append_elems.forEach(function (elem) {
                var c = td.cloneNode(true);
                c.appendChild(elem);
                tr.appendChild(c);
            });
            /*
            for (var elem of append_elems) {
              var c = td.cloneNode(true);
              c.appendChild(elem);
              tr.appendChild(c);
            }
            */
            return tr;
        },
        create_info: function (title, mag) {
            var a = this.info.cloneNode(true);
            a.firstChild.textContent = title.length < max_title_length ? title : title.substr(0, max_title_length) + "...";
            a.firstChild.href = mag;
            a.title = title;
            return a;
        },
        create_size: function (size, src) {
            var a = this.size.cloneNode(true);
            a.textContent = size;
            a.href = src;
            return a;
        },
        create_operation: function (mag) {
            var a = this.operation.cloneNode(true);
            a.firstChild.href = mag;
            return a;
        },
        create_offline: function () {
            var a = this.offline.cloneNode(true);
            a.className = "nong-offline";
            return a;
        },

        info: (function () {
            var a = document.createElement("div");
            var b = document.createElement("a");
            b.textContent = "name";
            b.href = "src";
            b.target = "_blank";
            a.appendChild(b);
            return a;
        })(),
        size: function () {
            var a = document.createElement("a");
            a.textContent = "size";
            a.target = "_blank";
            return a;
        }(),
        operation: (function () {
            var a = document.createElement("div");
            var copy = document.createElement("a");
            copy.className = "nong-copy";
            copy.textContent = "复制";
            a.appendChild(copy);
            return a;
        })(),
        offline: (function () {
            var a = document.createElement("div");
            var b = document.createElement("a");
            b.className = "nong-offline-download";
            b.target = "_blank";
            for (var k in offline_sites) {
                if (offline_sites[k].enable) {
                    var c = b.cloneNode(true);
                    c.href = offline_sites[k].url;
                    c.textContent = offline_sites[k].name;
                    a.appendChild(c);
                }
            }
            return a;
        })(),
    },
    generate_head: function () {
        var tab = document.createElement("table");
        tab.id = "nong-table";
        tab.appendChild(this.template.create_head("https://greasyfork.org/zh-CN/scripts/8392-%E6%8C%8A"));
        return tab;
    },
    generate: function (src, data) {
        //console.log(src);
        //console.log(data);
        var tab = document.querySelector("#nong-table");
        tab.querySelector("#nong-head th a").href = src;
        if (src.match("nyaa.si")) {
            data.forEach((d) => {
                tab.appendChild(this.template.create_row_for_sukebei(d));
        });
            /*
            for (var d of data) {
              tab.appendChild(this.template.create_row_for_sukebei(d));
            }
            */
        }
        else {
            data.forEach((d) => {
                tab.appendChild(this.template.create_row(d));
        });
            /*
            for (var d of data) {
              tab.appendChild(this.template.create_row(d));
            }
            */
        }
        return tab;
    },

};
var my_search = {
    current: function (kw, cb) {
        var search = my_search[GM_getValue("search_index", 0)];
        try {
            return search(kw, cb);
        }
        catch (e) {
            this.search_error();
        }
    },
    search_error: function (r) {
        alert("搜索出现错误，请检查网络");
    },
    search_name_string: ["btso", "btdb", "nyaa.si", "btkitty","torrentkitty","btlibrary"],
    0: function (kw, cb) {
        GM_xmlhttpRequest({
            method: "GET",
            url: "https://btso.pw/search/" + kw,
            onload: function (result) {
                let doc = common.parsetext(result.responseText);
                let data = [];
                let t = doc.getElementsByClassName("data-list")[0];
                if (t) {
                    for (let elem of t.getElementsByTagName("a")) {
                        if (!elem.className.match("btn")) {
                            data.push({
                                "title": elem.title,
                                "mag": "magnet:?xt=urn:btih:" + elem.outerHTML.replace(/.*hash\//, "").replace(/" .*\n.*\n.*\n.*/, ""),
                                "size": elem.nextElementSibling.textContent,
                                "src": elem.href,
                            });
                        }
                    }
                }
                else {
                    data.push({
                        "title": "没有找到磁链接",
                        "mag": "",
                        "size": "0",
                        "src": result.finalUrl,
                    });
                }
                cb(result.finalUrl, data);
            },
            onerror: function (e) {
                console.error(e);
                throw "search error";
            }
        });
    },
    1: function (kw, cb) {
        GM_xmlhttpRequest({
            method: "GET",
            url: "http://btdb.to/q/" + kw + "/",
            onload: function (result) {
                let doc = common.parsetext(result.responseText);
                let data = [];
                let t = doc.getElementsByClassName("item-title");
                if (t) {
                    for (let elem of t) {
                        data.push({
                            "title": elem.firstChild.title,
                            "mag": elem.nextElementSibling.firstElementChild.href,
                            "size": elem.nextElementSibling.children[1].textContent,
                            "src": "https://btdb.in" + elem.firstChild.getAttribute("href"),
                        });
                    }
                }
                else {
                    data.push({
                        "title": "没有找到磁链接",
                        "mag": "",
                        "size": "0",
                        "src": result.finalUrl,
                    });
                }

                cb(result.finalUrl, data);
            },
            onerror: function (e) {
                console.error(e);
                throw "search error";
            }
        });
    },
    2: function (kw, cb) {
        GM_xmlhttpRequest({
            method: "GET",
            url: "https://sukebei.nyaa.si/?f=0&c=0_0&q=" + kw,
            onload: function (result) {
                let doc = common.parsetext(result.responseText);
                let data = [];
                let t = doc.querySelectorAll("tr.default");
                if (t.length!==0) {
                    for (let elem of t) {
                        data.push({
                            "title": elem.querySelector("td:nth-child(2)>a:nth-child(1)").title,
                            "mag": "",
                            "torrent_url": "https://nyaa.si" + elem.querySelector("td:nth-child(3)>a:nth-child(1)").href,
                            "size": elem.querySelector("td:nth-child(4)").textContent,
                            "src": "https://nyaa.si" + elem.querySelector("td:nth-child(2)>a:nth-child(1)").href,
                        });
                    }
                }
                else {
                    data.push({
                        "title": "没有找到磁链接",
                        "mag": "",
                        "torrent_url": "",
                        "size": "0",
                        "src": result.finalUrl,
                    });
                }

                cb(result.finalUrl, data);
            },
            onerror: function (e) {
                console.error(e);
                throw "search error";
            }
        });
    },
    3: function (kw, cb) {
        GM_xmlhttpRequest({
            method: "POST",
            url: "http://btkitty.pet/",
            data: "keyword=" + kw+"&hidden=true",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            onload: function (result) {
                let doc = common.parsetext(result.responseText);
                let data = [];
                let t = doc.getElementsByClassName("list-con");
                if (t) {
                    for (let elem of t) {
                        data.push({
                            "title": elem.querySelector("dt a").textContent,
                            "mag": elem.querySelector("dd a").href,
                            "size": elem.querySelector(".option span:nth-child(3) b").textContent,
                            "src": elem.querySelector("dt a").href,
                        });
                    }
                }
                else {
                    data.push({
                        "title": "没有找到磁链接",
                        "mag": "",
                        "size": "0",
                        "src": result.finalUrl,
                    });
                }
                cb(result.finalUrl, data);
            },
            onerror: function (e) {
                console.error(e);
                throw "search error";
            }
        });
    },
    4: function (kw, cb) {
        GM_xmlhttpRequest({
            method: "GET",
            url: "https://www.torrentkitty.tv/search/"+kw,
            onload: function (result) {
                let doc = common.parsetext(result.responseText);
                let data = [];
                let t = doc.querySelectorAll("#archiveResult tr");
                if (t) {
                    t = Array.slice(t,1,t.length);
                    for (let elem of t) {
                        data.push({
                            "title": elem.querySelector(".name").textContent,
                            "mag": elem.querySelector(".action>a:nth-child(2)").href,
                            "size": elem.querySelector(".size").textContent,
                            "src": elem.querySelector(".action>a:nth-child(1)").href,
                        });
                    }
                }
                else {
                    data.push({
                        "title": "没有找到磁链接",
                        "mag": "",
                        "size": "0",
                        "src": result.finalUrl,
                    });
                }
                cb(result.finalUrl, data);
            },
            onerror: function (e) {
                console.error(e);
                throw "search error";
            }
        });
    },
    5: function (kw, cb) {
        GM_xmlhttpRequest({
            method: "POST",
            url: "http://btlibrary.pw",
            data: "keyword=" + kw,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            onload: function (result) {
                let doc = common.parsetext(result.responseText);
                let data = [];
                let t = doc.querySelectorAll(".item");
                if (t) {
                    for (let elem of t) {
                        data.push({
                            "title": elem.querySelector(".item-title>a").textContent,
                            "mag": elem.querySelector(".item-detail>span:nth-child(1)>a").href,
                            "size": elem.querySelector(".item-detail>span:nth-child(3)>b").textContent,
                            "src": elem.querySelector(".item-title>a").href,
                        });
                    }
                }
                else {
                    data.push({
                        "title": "没有找到磁链接",
                        "mag": "",
                        "size": "0",
                        "src": result.finalUrl,
                    });
                }
                cb(result.finalUrl, data);
            },
            onerror: function (e) {
                console.error(e);
                throw "search error";
            }
        });
    },
};

var display_table = function (vid, insert_where) {
    common.add_style();
    if (!document.querySelector("#nong-head")) {
        var tab_with_head = magnet_table.generate_head();
        if (typeof insert_where === "string") {
            var elem = document.querySelector(insert_where);
            //console.log("display_table", tab, elem);
            if (elem) {
                elem.parentElement.insertBefore(tab_with_head, elem);
            }
        }
        else if (typeof insert_where === "function") {
            insert_where(tab_with_head);
        }
        else {
            console.error("插入表格错误");
            return;
        }
    }
    else {
        var head = document.querySelector("#nong-head");
        Array.from(document.querySelectorAll(".nong-row")).forEach(function (row) {
            if (row !== head) {
                row.parentElement.removeChild(row);
            }
        });
    }
    my_search.current(vid, function (data, src) {
        var tab = magnet_table.generate(data, src);
        common.reg_event();
    });
};

var vid_mode = function (v) {
    var vid = "";
    try {
        vid = v.vid();
    }
    catch (error) {
        vid = "";
        console.error("没有找到番号", v.vid.toString());
    }
    if (vid) {
        console.info("番号：", vid);
        display_table(vid, v.insert_where);
    }
};

var dl_mode = function (v) {

    var mag = GM_getValue("magnet", "");
    //console.info(1, "开始离线下载", mag);
    if (mag) {
        var script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.innerHTML = "(" + v.fill_form.toString() + ")(\"" + mag + "\")";
        document.body.appendChild(script);
        //console.info(info);
    }
    GM_setValue("magnet", "");
};

var run = function () {
    max_title_length = GM_getValue("max_title_length", 40);
    var main_keys = Object.keys(main);
    for (var i = 0; i < main_keys.length; i++) {
        var v = main[main_keys[i]];

        if (v.re && v.re.test(location.href)) {
            if (v.type === 0) {

                //----

                //for javlibrary
                if (main_keys[i] === "javlibrary") {
                    if (document.querySelector("#adultwarningprompt")) {
                        document.querySelectorAll("#adultwarningprompt input")[0].click();
                    }
                }
                //----

                vid_mode(v);
            }
            else if (v.type == 1) {
                dl_mode(v);
            }
            break;
        }
    }
};
var max_title_length = GM_getValue("max_title_length", 40);
var set_max_title_length = function () {
    var len = prompt("请输入你想要的标题长度", GM_getValue("max_title_length", 40));
    if (len !== null && len !== "") {
        GM_setValue("max_title_length", len);
        run();
    }
};

GM_registerMenuCommand("挊-标题长度", set_max_title_length);
run();