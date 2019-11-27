// ==UserScript==
// @name        AC-CSDN自动展开-CSDN自动评论-去广告
// @author      AC 原作:King.Sollyu
// @namespace   Sollyu
// @description 自动展开CSDN博客的内容，无需点击展开  &&  自动评论,返还下载积分
// @version     3.8
// @require     https://code.jquery.com/jquery-1.9.0.min.js
// @include     https://download.csdn.net/*
// @include     /https?://blog.csdn.net/[^/]+/article/details/.*/
// @include     /https?://lib.csdn.net/article/.*/
// @note        2018-08-28 V3.8    新增部分广告的拦截
// @note        2018-05-17 V3.7    再次修复csdn更新导致的问题
// @note        2018-04-30 V3.6    修复csdn网页更新导致的兼容失败问题
// @note        2018-04-06 V3.5    新增支持lib.csdn.net
// @note        2018-03-29 V3.4    深夜修复无法评论的bug，http-->https的问题
// @note        2018-03-25 V3.3    修改名字
// @note        2018-03-24 V3.2    同步-修复https下的链接问题
// @note        2017-12-06 V3.1    与CSDN自动展开一起合并
// @note        2017-09-14 V3.0    修复模式，适配新版的CSDN
// @note        2015-05-20 V2.1    修改弹出位置，修改脚本生效位置，提供简易跳转
// @note        2015-05-20 V2.1    在Chrome中可用
// @note        2013-01-25 V1.0    CSDN自动评论
// @icon        https://coding.net/u/zb227/p/zbImg/git/raw/master/img0/icon.jpg
// @run-at      document-body
// ==/UserScript==
/*
需要先跳转到http://download.csdn.net/my/downloads
*/
function addStyle(css) { //添加CSS的代码--copy的
    var pi = document.createProcessingInstruction(
        'xml-stylesheet',
        'type="text/css" href="data:text/css;utf-8,' + encodeURIComponent(css) + '"'
    );
    return document.insertBefore(pi, document.documentElement);
}
if(location.host == "download.csdn.net"){
    setTimeout(function(){
        //多少时间评论一次，单位：秒
        var tTime=65;
        // 预定义的评论内容,可按照格式自行添加,注意最后一行后面没有逗号
        var contentPL=new Array(
            "很全面,很好用,谢谢分享.",
            "挺不错的资料，谢谢分享.",
            "很全,什么都有了,感谢.",
            "比相关书籍介绍的详细,顶一个.",
            "还行,适合于初级入门的学习.",
            "很好的资料,很齐全,谢谢.",
            "还可以,就是感觉有点乱.",
            "感謝LZ收集,用起來挺方便.",
            "感觉还行,只是感觉用着不是特别顺手.",
            "很有学习价值的文档,感谢.",
            "内容很丰富,最可贵的是资源不需要很多积分.",
            "这个真的非常好,借鉴意义蛮大.",
            "有不少例子可以参考,目前正需要.",
            "下载后不能正常使用.",
            "例子简单实用,很有参考价值."
        );

        var queueList = {};

        // css
        var  csdnHelperCss=document.createElement('style');
        csdnHelperCss.type='text/css';
        $(csdnHelperCss).html('.popWindow{position:fixed;z-index:10000;top:100px;right:650px;}.popWindow>span{display:block;text-align:left;color:cyan;text-shadow:0 0 2px white;background-color:#555;box-shadow:-1px -1px 4px gray;margin:5px 0 0 0;padding:00 6px 0 6px;cursor:pointer;font-size: 13px;}');

        $('body').prepend(csdnHelperCss);
        $('body').prepend('<div class="popWindow"></div>');

        //将本页待评论资源自动加入评论队列
        $("li .flag a:not([href^='javascript'])").each(function(){
            if(this.tagName!="A")
                return;
            var reg=/\/([_a-zA-Z0-9]+)\/([0-9]+)#/;
            var src=$(this).attr('href').match(reg);
            addQueue(src[1],src[2],(new Date()).getTime());
            $(this).parent().html("已加入评论队列");
        });
        // 若待评论数大于0则提示用户滞留在本窗口
        console.debug("本次任务总数--->"+getJsonLength(queueList));
        if(getJsonLength(queueList) > 0){
            popWindow("待评论任务数："+getJsonLength(queueList),0);
            popWindow("请保持在本界面，以便进行评价",6000);
            setInterval(searchToPost, tTime*1000);
            searchToPost();
        }else{
            if(location.href=='https://download.csdn.net/my/downloads'){
                popWindow("恭喜你,暂时没有需要评论的下载项",0);
            }else{
                popWindow("自动回复请点击跳转到<BR><center><a href=https://download.csdn.net/my/downloads><b><font color=Green>我的下载</font></b></a>查看</center>",0);
            }
        }

        function getJsonLength(jsonData){
            var jsonLength = 0;
            for(var item in jsonData){
                jsonLength++;
            }
            return jsonLength;
        }

        // 添加评论队列
        function addQueue(owner,sourceID,stamp){
            queueList[stamp] = {owner, sourceID};
            console.log(stamp, queueList[stamp]);
            popWindow('已添加到任务队列,['+owner+','+sourceID+']',2000);
        }
        // 显示消息
        function popWindow(str,delayTime){
            var obj = $('.popWindow').append('<span>'+str+'</span>').children().last();
            if(delayTime>0)
                obj.delay(delayTime).hide(1500,function(){$(this).remove();});
        }

        function searchToPost(){
            // 查询有没有可以评论的资源
            for (var stamp in queueList){
                var res = queueList[stamp];
                post(res['owner'], res['sourceID'], stamp);
                break;
            }
        }
        // 发送评论
        function post(owner, sourceID, stamp){
            $.ajax({
                type:"get",
                url:"https://download.csdn.net/index.php/comment/post_comment",
                headers:{
                    "Referer":"https://download.csdn.net/download/"+owner+"/"+sourceID,
                    "Content-type":"application/x-www-form-urlencoded; charset=UTF-8",
                    "X-Requested-With":"XMLHttpRequest"
                },
                data:{
                    "content":contentPL[Math.round(Math.random()*(contentPL.length-1))],
                    "jsonpcallback":"jQuery1111028717768093608154_"+(new Date()).getTime(),
                    "rating":"5",
                    "sourceid":sourceID,
                    "t":(new Date()).getTime()
                },
                success:function(res){
                    var index = res.indexOf("({");
                    var data = eval(res.substr(index));
                    var resMsg="----";
                    console.log(data.succ);
                    if(data.succ>0){
                        delete queueList[stamp];
                        resMsg = '任务成功! 已评论['+owner+','+sourceID+']<br/>-----剩余任务数:' + getJsonLength(queueList);
                        console.debug(resMsg);
                        popWindow(resMsg,(tTime+20)*1000);
                        $('.popWindow').children().each(
                            function(){
                                if(this.innerHTML.indexOf("待评论任务数")>=0)
                                    this.innerHTML=("待评论任务数："+getJsonLength(queueList));
                            });
                    }
                    else{
                        resMsg = '任务评论失败['+owner+','+sourceID+']'+"<br/>----原因:"+data.msg;
                        console.debug(resMsg.replace(/<br\/>/,""));
                        popWindow(resMsg,60000);
                        if(data.msg.indexOf("您已经发表过评论")>=0){
                            delete queueList[stamp];
                        }
                    }
                }
            });
        }
    }, 1000);
}else if(location.host == "blog.csdn.net" || location.host == "lib.csdn.net"){
    // 1. 自动展开搜索的内容主体
    var acCSDNT = setInterval(function(){
        if(document.querySelector("div") != null){
            clearInterval(acCSDNT);
            // 处理lib.csdn.net
            addStyle(".divtexts{height:auto !important;max-height:unset !important;}");
            addStyle(".divcodes,.divmark{display:none !important;}");
            // 处理blog.csdn.net
            addStyle(".article_content{height:auto !important;max-height:unset !important;}");
            addStyle(".hide-article-box{display:none !important;}");
        }
    }, 100);
    // 2. 移除多余的广告内容
    addStyle(".recommend-ad-box{display:none;}body>div[id*='kp_box_']{display:none;}");
}
