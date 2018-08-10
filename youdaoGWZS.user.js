// ==UserScript==
// @name 有道-惠惠购物助手(新)-购物比价-优惠券查找-一键领取购物立省80%-【2018.08.11加强稳定版】
// @description 有道购物助手，购物比价，自动对比电商同款商品价格，轻松网购不吃亏，更有各种优惠信息对比
// @update 2018-08.11
// @version 3.3
// @note   2018.08.11 修复链接搜索的文字异常
// @note   2018.08.08 修复优惠券面值链接异常-添加天猫搜索页面优惠券面值显示
// @note   2018.08.06 更新-搜索结果页面显示搜索结果-添加搜索页面的优惠券面值显示
// @note   2018.08.02 更新小问题
// @note   2018.07.25 更新一下
// @note   2018.07.01 修复偶尔的关键词找不到的问题，导致的无法获取搜索内容的标题
// @note   2018.07.01 更新-修复顶部的遮挡问题，避免顶部遮挡住了jd这类的网页效果
// @note   2018.06.25 更新-修复推广链接的移除问题;同时移除部分广告
// @note   2018.06.13 修复有时候需要弹出链接的问题,以及有时候没有触发的问题
// @note   2018.05.12 修复在部分天猫页面没反应的问题
// @note   2018.04.30 修复样式效果缩回后的问题；新增优惠价格展示
// @note   2018.04.04 修复京东的历史价格情况展示问题
// @note   2018.03.23 剔除掉无用的广告信息，滚动一段距离后移除顶部标签，保留比价功能
// @note   2018.03.22 基于大神 Harv 的惠惠购物助手修改而来，把底部标签放到了顶部更好看，其余之后再改
// @author AC Edit form: Harv
// @grant  GM_xmlhttpRequest
// @namespace ACComparePrize
// @icon    https://favicon.yandex.net/favicon/huihui.cn
// @connect open.lesiclub.cn
// @include http://*.001town.com/*
// @include http://*.01goo.com/*
// @include http://*.03l.cn/*
// @include http://*.133china.com/*
// @include http://*.139shop.com/*
// @include http://yxp.163.com/*
// @include http://*.168dg.com/*
// @include http://*.186mall.com/*
// @include http://*.18to82.com/*
// @include http://*.1j.cn/*
// @include http://*.22shop.com/*
// @include http://*.24dq.com/*
// @include http://*.24quan.com/*
// @include http://*.258sd.com/*
// @include http://*.2688.com/*
// @include http://*.360buy.com/*
// @include http://*.360hqb.com/*
// @include http://*.360kxr.com/*
// @include http://*.360mart.com/*
// @include http://*.365goba.com/*
// @include http://*.38hzt.com/*
// @include http://*.39ty.com/*
// @include http://*.4inlook.com/*
// @include http://*.5188bag.com/*
// @include http://*.51buy.com/*
// @include http://*.51dg.com/*
// @include http://*.51eng.com/*
// @include http://*.51sheyuan.com/*
// @include http://*.51youpin.com/*
// @include http://*.520eye.com/*
// @include http://*.52shehua.com/*
// @include http://*.5366.com/*
// @include http://t.58.com/*
// @include http://*.58hua.com/*
// @include http://*.5lux.com/*
// @include http://*.5yth.com/*
// @include http://*.6919.com/*
// @include http://*.6sbuy.com/*
// @include http://*.77toy.com/*
// @include http://*.7caihua.com/*
// @include http://*.7cv.com/*
// @include http://*.7sev.com/*
// @include http://*.80ebus.com/*
// @include http://*.8801.net/*
// @include http://*.919it.com/*
// @include http://*.929.cn/*
// @include http://*.942radio.com/*
// @include http://b2c.958shop.com/*
// @include http://*.96128.com/*
// @include http://*.99pto.com/*
// @include http://*.99read.com/*
// @include http://*.9dadao.com/*
// @include http://*.afffff.com/*
// @include http://*.ai356.com/*
// @include http://*.aidai.com/*
// @include http://*.aiju.com/*
// @include http://*.aim36.com/*
// @include http://*.aimer.com.cn/*
// @include http://*.aiyingshi.com/*
// @include http://*.aizhigu.com.cn/*
// @include http://*.amazon.cn/*
// @include http://*.anni.com/*
// @include http://*.apabi.com/*
// @include http://*.augshow.com/*
// @include http://*.autosup.com/*
// @include http://*.baiyjk.com/*
// @include http://*.bbesports.com/*
// @include http://*.bearbuy.com.cn/*
// @include http://*.beautyplus.cn/*
// @include http://*.beifabook.com/*
// @include http://*.benq.com.cn/*
// @include http://*.best1.com/*
// @include http://*.biaoshang.hk/*
// @include http://*.binggo.com/*
// @include http://*.bloves.com/*
// @include http://*.bobomobi.com/*
// @include http://*.bookschina.com/*
// @include http://*.boqii.com/*
// @include http://*.buding.com/*
// @include http://*.buy007.com/*
// @include http://*.buy361.cn/*
// @include http://*.buyfine.net/*
// @include http://*.buynow.com.cn/*
// @include http://*.caistv.com/*
// @include http://*.caomeipai.com/*
// @include http://*.car339.com.cn/*
// @include http://*.car6688.com/*
// @include http://*.carrefour.com.cn/*
// @include http://*.cdream.com/*
// @include http://*.ceetop.com/*
// @include http://*.chashu.cn/*
// @include http://*.chedangjia.com/*
// @include http://*.chengdecs.com/*
// @include http://*.china-gift.com/*
// @include http://*.china-pub.com/*
// @include http://emall.chinapay.com/*
// @include http://*.chinayrs.com/*
// @include http://*.chris-tina.com/*
// @include http://*.clady.com/*
// @include http://*.clinique.com.cn/*
// @include http://*.cncard.com/*
// @include http://*.cnfse.com/*
// @include http://*.colebuy.com/*
// @include http://*.conslive.com/*
// @include http://*.coo8.com/*
// @include http://*.cosize.com/*
// @include http://*.cosme-de.com/*
// @include http://dangdang.com/
// @include http://*.cw100.com/*
// @include http://*.d1.com.cn/*
// @include http://*.daisonghua.com/*
// @include http://*.dangdang.com/*
// @include http://*.daoyao.com/*
// @include http://*.dazhe.cn/*
// @include http://*.dazhongdianqi.com.cn/*
// @include http://*.dianpu.com/*
// @include http://*.didatuan.com/*
// @include http://*.disiqu.cn/*
// @include http://*.dixintong.com/*
// @include http://*.doulaimai.com/*
// @include http://*.dsgoo.com/*
// @include http://*.dtoto.com/*
// @include http://*.duhub.com/*
// @include http://*.duoding.com/*
// @include http://*.e-giordano.com/*
// @include http://*.e-lining.com/*
// @include http://*.e-my.com.cn/*
// @include http://*.easy361.com/*
// @include http://*.ebaimi.com/*
// @include http://*.eboxbuy.com/*
// @include http://*.ebtea.com/*
// @include http://*.ecosme.cn/*
// @include http://*.efeihu.com/*
// @include http://*.ehaier.com/*
// @include http://*.ejia.com/*
// @include http://*.enjoyeye.com/*
// @include http://*.epetbar.com/*
// @include http://*.et5155.com/*
// @include http://*.f508.com/*
// @include http://*.fclub.cn/*
// @include http://*.flowerby.com/*
// @include http://*.flowercn.com/*
// @include http://*.gap.cn/*
// @include http://*.godida.com/*
// @include http://*.gome.com.cn/*
// @include http://*.goocctv.cn/*
// @include http://*.goodjd.com/*
// @include http://*.goodnourish.cn/*
// @include http://*.gou3618.com/*
// @include http://*.gouduo.com/*
// @include http://*.gouwulian.com/*
// @include http://*.gouxie.com/*
// @include http://*.goyahome.com/*
// @include http://*.guobuy.com/*
// @include http://*.guopi.com/*
// @include http://*.guuoo.com/*
// @include http://*.hany.cn/*
// @include http://*.happigo.com/*
// @include http://*.hit168.com.cn/*
// @include http://*.hitao.com/*
// @include http://*.homeold.cn/*
// @include http://*.homevv.com/*
// @include http://*.hongkouzi.com/*
// @include http://*.hopebook.net/*
// @include http://*.huachu.com.cn/*
// @include http://*.huimeifang.cn/*
// @include http://*.hw2008.cn/*
// @include http://*.icaifeng.com/*
// @include http://www.sfbest.com/*
// @include http://*.ideemall.com/*
// @include http://*.ihush.com/*
// @include http://*.iloveyou.com.cn/*
// @include http://*.ilovezuan.com/*
// @include http://*.imeelee.com/*
// @include http://*.inoble.com.cn/*
// @include http://*.inshion.com/*
// @include http://*.ishop.cn/*
// @include http://*.it88.com.cn/*
// @include http://*.itzm.com/*
// @include http://*.iyuyou.com/*
// @include http://*.jiajiajk.com/*
// @include http://*.jiaju.com/*
// @include http://*.jiatx.com/*
// @include http://*.jiayougo.com/*
// @include http://*.jinbaidu.com/*
// @include http://*.jmeishop.com/*
// @include http://*.joyran.com/*
// @include http://*.jsbcmall.com/*
// @include http://*.jtlhome.com/*
// @include http://*.jumei.com/*
// @include http://*.junph.com/*
// @include http://*.justonline.cn/*
// @include http://*.jxdyf.com/*
// @include http://*.k121.com/*
// @include http://*.kadang.com/*
// @include http://*.keede.com.cn/*
// @include http://*.kela.cn/*
// @include http://*.kuaishubao.com/*
// @include http://*.kxtkx.com/*
// @include http://*.ladypk.com/*
// @include http://*.laeibelle.com/*
// @include http://*.lafaso.com/*
// @include http://*.lamiu.com/*
// @include http://*.lancome.com.cn/*
// @include http://*.lashou.com/*
// @include http://*.ledaojia.com/*
// @include http://*.leftlady.com/*
// @include http://*.lens2005.com/*
// @include http://*.letao.com/*
// @include http://*.leyou.com/*
// @include http://*.leyou.com.cn/*
// @include http://*.lijiababy.com.cn/*
// @include http://*.lijigou.com/*
// @include http://*.likebuy.com/*
// @include http://*.likeface.com/*
// @include http://*.lingshi.com/*
// @include http://*.liqunshop.com/*
// @include http://*.liyi99.com/*
// @include http://*.locknlock.com.cn/*
// @include http://*.lovo.cn/*
// @include http://*.luckigo.com/*
// @include http://*.lusen.com/*
// @include http://*.lyceem.com/*
// @include http://*.m18.com/*
// @include http://*.maichawang.com/*
// @include http://*.maimaike.cn/*
// @include http://*.mamabb.com/*
// @include http://*.mamahao.cn/*
// @include http://*.mangocity.com/*
// @include http://*.manzuo.com/*
// @include http://*.masamaso.com/*
// @include http://*.maxfunbuy.com/*
// @include http://*.maywon.com/*
// @include http://*.mbaobao.com/*
// @include http://*.meici.com/*
// @include http://*.meilele.com/*
// @include http://*.meilieasy.com/*
// @include http://*.meituan.com/*
// @include http://*.menglu.com/*
// @include http://*.mengmai.com/*
// @include http://*.minibuy.com/*
// @include http://*.mmgw.cn/*
// @include http://*.mmuses.com/*
// @include http://*.mobi001.com/*
// @include http://*.mokamall.com/*
// @include http://*.momoyoyo.com/*
// @include http://*.montrosechina.com/*
// @include http://*.mooiee.com/*
// @include http://*.moonbasa.com/*
// @include http://*.motostore.com.cn/*
// @include http://*.mpshow.com.cn/*
// @include http://*.naccoo.com/*
// @include http://*.naguu.com/*
// @include http://*.nayao.com/*
// @include http://*.newegg.com.cn/*
// @include http://*.newgo5.com/*
// @include http://*.nmlch.com/*
// @include http://*.no5.com.cn/*
// @include http://*.nonmin88.com/*
// @include http://*.obuy.cn/*
// @include http://*.ofcard.com/*
// @include http://*.ogage.cn/*
// @include http://*.okbig.com/*
// @include http://*.okbuy.com/*
// @include http://*.okddy.com/*
// @include http://*.okgolf.cn/*
// @include http://*.olomo.com/*
// @include http://*.olympus.com.cn/*
// @include http://*.olymsports.com/*
// @include http://*.ono.com.cn/*
// @include http://*.orange3c.com/*
// @include http://(*.)?ouku.com/*
// @include http://*.ourtasty.com/*
// @include http://*.outice.com/*
// @include http://*.oyego.com/*
// @include http://*.paixie.net/*
// @include http://*.palcent.com/*
// @include http://*.pb89.com/*
// @include http://*.pcarm.com/*
// @include http://*.petyoo.com/*
// @include http://*.pgbao.com/*
// @include http://*.piaoliang100.com/*
// @include http://*.pirateship.com.cn/*
// @include http://*.popyj.com/*
// @include http://*.pupai.cn/*
// @include http://*.purcotton.com/*
// @include http://*.qianxun.com/*
// @include http://*.qingci.com/*
// @include http://*.qinqinbaby.com/*
// @include http://*.qmango.com/*
// @include http://*.qumei.com/*
// @include http://*.quwan.com/*
// @include http://*.qxian.com/*
// @include http://*.rayi.cn/*
// @include http://*.redbaby.com.cn/*
// @include http://*.robam.com/*
// @include http://*.salala.com.cn/*
// @include http://*.samsclub.cn/*
// @include http://*.sanfo.com/*
// @include http://*.sapo.com.hk/*
// @include http://*.sasa.com/*
// @include http://*.sasacity.com/*
// @include http://*.sawbuy.com/*
// @include http://*.shanghai-sports.com/*
// @include http://*.shentop.com/*
// @include http://*.shishangqiyi.com/*
// @include http://*.shjdq.com/*
// @include http://*.shnn.com/*
// @include http://*.shopin.net/*
// @include http://*.shoubiao.com.cn/*
// @include http://*.sigo.cn/*
// @include http://*.sinobuy.cn/*
// @include http://*.skcoo.com/*
// @include http://*.skomart.com/*
// @include http://*.snyun.com/*
// @include http://*.sonmai.cn/*
// @include http://*.sport2008.com.cn/*
// @include http://*.strawberrynet.com/*
// @include http://*.suning.com/*
// @include http://*.sz-esun.com/*
// @include http://*.tao3c.com/*
// @include http://item.taobao.com/*
// @include https://item.taobao.com/*
// @include *://uland.taobao.com/coupon/*
// @include http://*.taoxie.cn/*
// @include http://*.the365.com/*
// @include http://*.thinkshop.cn/*
// @include http://*.tian10.com/*
// @include http://*.tiantian.com/*
// @include http://detail.tmall.com/*
// @include https://detail.tmall.com/*
// @include http://*.togj.com/*
// @include http://*.tooogooo.com/*
// @include http://*.toy90.com/*
// @include http://*.toys365.com/*
// @include http://*.tpy100.com/*
// @include http://*.tuniu.com/*
// @include http://*.tztart.com/*
// @include http://*.ugou.cn/*
// @include http://*.uipmall.com/*
// @include http://*.uiyi.cn/*
// @include http://*.ushan.cn/*
// @include http://*.uushouji.com/*
// @include http://*.uya100.com/*
// @include http://*.vaakav.com/*
// @include http://*.vafox.com/*
// @include http://*.vancl.com/*
// @include http://*.vcotton.com/*
// @include http://*.veedl.com/*
// @include http://*.vegoos.com/*
// @include http://*.venusveil.com/*
// @include http://*.veryok.cn/*
// @include http://*.viccol.com/*
// @include http://*.vipshop.com/*
// @include http://*.vipstore.com/*
// @include http://*.vivian.cn/*
// @include http://*.vjia.com/*
// @include http://*.vnasi.com/*
// @include http://*.voipyeah.com/*
// @include http://*.w1.cn/*
// @include http://*.waipowang.com/*
// @include http://*.wangshanghai.com/*
// @include http://*.wg365.com/*
// @include http://*.winenice.com/*
// @include http://*.wl.cn/*
// @include http://womai.com/*
// @include http://*.woye.com/*
// @include http://*.wtaotao.com/*
// @include http://*.wumeiwang.com/*
// @include http://*.x-playboy.com/*
// @include http://*.xiaokang.com/*
// @include http://*.xiaozhuren.com/*
// @include http://*.xinbaigo.com/*
// @include http://*.xindou.com/*
// @include http://*.xing800.com/*
// @include http://*.xinhuabookstore.com/*
// @include http://*.xiu.com/*
// @include http://*.xtpo.cn/*
// @include http://*.xzuan.com/*
// @include http://*.yaja.com.cn/*
// @include http://*.yaofang.cn/*
// @include http://*.yasai.cn/*
// @include http://*.yeecare.com/*
// @include http://*.yesmytea.com/*
// @include http://*.yesmywine.com/*
// @include http://*.yide.com/*
// @include http://*.yifu.com/*
// @include http://*.yihaodian.com/*
// @include http://*.yintai.com/*
// @include http://*.yinyuehe.net/*
// @include http://*.yjcs.cn/*
// @include http://*.yobrand.com/*
// @include http://*.yoger.com.cn/*
// @include http://*.yoho.cn/*
// @include http://*.yongle.com.cn/*
// @include http://*.yougou.com/*
// @include http://*.youjk.com/*
// @include http://*.yoyo18.com/*
// @include http://*.yumaoclub.com/*
// @include http://*.yyosso.com/*
// @include http://*.zbird.com/*
// @include http://*.zgcbb.com/*
// @include http://*.zm7.cn/*
// @include http://*.zopo.com/*
// @include http://*.ocj.com.cn/*
// @include http://*.bookuu.com/*
// @include http://*.woyo.com/*
// @include http://*.ibuying.com/*
// @include http://*.33go.com.cn/*
// @include http://*.xijie.com/*
// @include http://*.nop.cn/*
// @include http://*.asyp.com/*
// @include http://*.sparty.cn/*
// @include http://*.yizhedian.com/*
// @include http://*.lvhezi.com/*
// @include http://*.aishangbaobao.com/*
// @include http://*.sportica.cn/*
// @include http://*.jstsilk.cn/*
// @include http://*.camel.com.cn/*
// @include http://*.cottonpop.net/*
// @include http://*.hyj.com/*
// @include http://*.myxiequ.com/*
// @include http://*.mfplaza.com/*
// @include http://*.do93.com/*
// @include http://*.3guo.cn/*
// @include http://*.yaqifushi.com/*
// @include http://*.trura.com/*
// @include http://*.lbaobao.cn/*
// @include http://*.xiutuan.com/*
// @include http://*.usashopcn.com/*
// @include http://*.ihaveu.com/*
// @include http://*.vipku.com/*
// @include http://*.vipchina.com/*
// @include http://*.fanrry.cn/*
// @include http://*.lesunvip.com/*
// @include http://*.nala.com.cn/*
// @include http://*.miqi.cn/*
// @include http://*.meiribuy.com/*
// @include http://*.pufung.com/*
// @include http://*.xiaoye.com/*
// @include http://*.hmeili.com/*
// @include http://*.oulybuy.com/*
// @include http://*.meifenzi.com/*
// @include http://*.caomeishop.com/*
// @include http://*.meifu360.com/*
// @include http://*.bapashop.com/*
// @include http://*.bulangxiongdi.com/*
// @include http://*.gusubuy.com/*
// @include http://*.opearl.net/*
// @include http://*.ruci.cn/*
// @include http://*.rax.cn/*
// @include http://*.jiuxian.com/*
// @include http://*.maimaicha.com/*
// @include http://*.pinwine.cn/*
// @include http://*.meiweidao.com/*
// @include http://*.okliang.com/*
// @include http://*.365wine.com/*
// @include http://*.jjlg.com.cn/*
// @include http://*.bianlishe.com/*
// @include http://*.epkmall.com/*
// @include http://*.gdcct.com/*
// @include http://*.500ccc.com/*
// @include http://*.me361.com/*
// @include http://*.malatamobile.com/*
// @include http://*.trioo.com/*
// @include http://*.oohdear.com/*
// @include http://*.yaahe.cn/*
// @include http://*.easeeyes.com/*
// @include http://*.dbox.cn/*
// @include http://*.haotehui.com/*
// @include http://*.m6go.com/*
// @include http://*.bianyigo.com/*
// @include http://*.okjee.com/*
// @include http://*.mygeek.cn/*
// @include http://*.tbb.cn/*
// @include http://*.ushare360.com/*
// @include http://*.gqt168.com/*
// @include http://*.konjoy.com/*
// @include http://*.aoliz.com/*
// @include http://*.jianianle.com/*
// @include http://*.akajia.com/*
// @include http://*.miqi.com.cn/*
// @include http://*.lehuimai.com/*
// @include http://*.lifevc.com/*
// @include http://buy.yesky.com/*
// @include http://*.55tuan.com/*
// @include http://t.dianping.com/*
// @include http://*.nuomi.com/*
// @include http://carrefour.com.cn/
// @include http://51buy.com/
// @include http://*.womai.com/*
// @include http://*.lefeng.com/*
// @include http://www.1mall.com/*
// @include http://s.taobao.com/search\?*
// @include https://s.taobao.com/search\?*
// @include http://www.vegaga.com/*
// @include http://*.buy.qq.com/*
// @include http://list.tmall.com/search_product.htm*
// @include https://list.tmall.com/search_product.htm*
// @include https://item.taobao.com/item.htm*
// @include https://detail.tmall.com/item.htm*
// @include https://s.taobao.com/search*
// @include https://cart.taobao.com/*
// @include https://*.jd.com/*
// @run-at  document-start
// @grant   GM_info
// ==/UserScript==
var goodTitle = "";
function addStyle(css) {
    var pi = document.createProcessingInstruction(
        'xml-stylesheet',
        'type="text/css" href="data:text/css;utf-8,' + encodeURIComponent(css) + '"'
    );
    return document.insertBefore(pi, document.documentElement);
}
function timerDoOnce(node, functionName, checkTime){
    var tt = setInterval(function(){
        if(document.querySelector(node) != null) {
            clearInterval(tt);
            functionName();
        }
    }, checkTime);
}
function resetGD(){
    var gd = setInterval(function () {
        var nodes = document.querySelectorAll(".items .J_MouserOnverReq .search_coupon_tip");
        if(nodes != null && nodes.length > 0){
            clearInterval(gd);
            nodes = document.querySelectorAll(".items .J_MouserOnverReq");
            for(var i = 0; i<nodes.length; i++){
                try{
                    var name = node.querySelector(".J_IconMoreNew .J_ClickStat").innerText.trim();
                    nodes[i].querySelector(".search_coupon_tip").href = 'https://cent.ntaow.com/coupon.html?mQuery='+encodeURI(name);
                }catch (e) {
                }
            }
        }
        gwcounter++;
        if(gwcounter >= gwmax){
            clearInterval(gd);
        }
    }, 100);
}
function loadGD(){
    addStyle(".copon-search-list{background:url(https://cdn.gwdang.com/images/extensions/newbar/coupon_02.png) no-repeat;display:inline-block;position:absolute;top:0;right:0;font-size:14px;color:#FF173F!important;height:23px;width:92px;text-align:center;text-decoration:none!important;z-index:1;}");
    var allNodes = document.querySelectorAll(".items .J_MouserOnverReq, #content .product");
    for(var i = 0; i < allNodes.length; i++){
        (function (node) {
            var gid;
            try{gid = node.querySelector(".pic>a").getAttribute("data-nid");} catch (e) { }
            try{gid = gid || node.getAttribute("data-id");} catch (e) { }
            GM_xmlhttpRequest({
                method: "GET", url: "https://open.lesiclub.cn/coupon/get/10005/10001/" + gid,
                onload: function (res) {
                    res = JSON.parse(res.responseText);
                    if(res.code == 200 && res.data != null && res.data.coupon.is_valid == true){
                        var insNode = document.createElement("a");
                        var name;
                        try{name = node.querySelector(".J_IconMoreNew .J_ClickStat").innerText.trim();} catch (e) { }
                        try{name = name || node.querySelector(".productTitle a").getAttribute("title");} catch (e) { }
                        var price = res.data.coupon.coupon_money;
                        insNode.setAttribute("title", "当前商品领券减"+price+"元");
                        insNode.href = "https://cent.ntaow.com/coupon.html?mQuery=" + encodeURI(name);
                        insNode.target = "_blank";
                        insNode.className = "copon-search-list";
                        insNode.innerHTML = "￥"+price+"元优惠券";
                        try{node.querySelector(".pic-box").appendChild(insNode);}catch (e) {}
                        try{node.querySelector(".productImg-wrap").appendChild(insNode);}catch (e) {}
                    }
                }
            });
        })(allNodes[i]);
    }
}
if(location.href.indexOf("s.taobao.com/search") > 0 || location.href.indexOf("list.tmall.com/search_product") > 0){
    var ttcounter = 0, ttmax = 10;
    var gwcounter = 0, gwmax = 100;
    var tt = setInterval(function () {
        var nodes = document.querySelectorAll(".items .item-ad");
        var allNodes = document.querySelectorAll(".items .J_MouserOnverReq, #content .product");
        if(allNodes != null && (nodes.length > 0 || allNodes.length > 0)){
            clearInterval(tt);
            if(document.querySelector("script[src*='gwd']") != null){
                resetGD();
            }else{
                loadGD();
            }
            for(var i = 0; i<nodes.length; i++){
                nodes[i].className = "item J_MouserOnverReq  ";
            }
        }
        ttcounter++;
        if(ttcounter >= ttmax){
            clearInterval(tt);
        }
    }, 100);
} else if(location.href.indexOf("cart.taobao.com") >= 0){
    setInterval(function(){
        if(document.querySelector("#J_OrderList .item-basic-info") != null){
            var htmlCart = "<a href='https://cent.ntaow.com/coupon.html?mQuery=AAAAAAAAAA' style='height:22px !important;color:red;font-size:16px;border-radius:1px;padding:2px;border-color:#fea356;border-style: dashed;'>查找优惠信息</a>";
            var nodes = document.querySelectorAll(".order-content .item-basic-info");
            for(i = 0; i < nodes.length; i++){
                var title = nodes[i].querySelector("a").getAttribute("title");
                if(title != null){
                    var addHTMLText = htmlCart.replace("AAAAAAAAAA", encodeURI(title));
                    var insNode = document.createElement("div");
                    insNode.className = "ac-tb-add";
                    insNode.style = "display: inline-block";
                    insNode.innerHTML = addHTMLText;
                    if(nodes[i].parentNode.querySelector(".item-icons") && nodes[i].parentNode.querySelector(".item-icons").querySelector(".ac-tb-add") == null){
                        nodes[i].parentNode.querySelector(".item-icons").appendChild(insNode);
                    }
                }
            }
        }
    }, 1000);
}else if(location.host.indexOf("uland") >= 0){
    addStyle("#J_MMREDBOX_MASK{display:none !important;}");
}else{
    if(location.href.indexOf("item.taobao.com") + location.href.indexOf("detail.tmall.com") >= 0) {
        function getQueryString(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        }
        var goodID = getQueryString("id");
        queryData(goodID);
        function AutoStart(time, cssSelector, dealFunc) {
            var timerNode = setInterval(function () {
                try {
                    if (document.querySelector(cssSelector).style.display == "") {
                        clearInterval(timerNode);
                        dealFunc();
                    }
                } catch (e) {
                }
            }, time);
        }
        function acBuyScript(result) {
            var tt = setInterval(function () {
                var node = document.querySelector(".acBuyScriptCoupon");
                if (node != null) {
                    clearInterval(tt);
                    if (result.code == 200 && result.data && result.data.coupon.is_valid == true) {
                        node.innerHTML = "!"+result.data.coupon.coupon_money+"元优惠券!";
                        node.href = "https://cent.ntaow.com/coupon.html?mQuery=" + encodeURI(goodTitle);
                        timerDoOnce(".gwd-minibar-bg #coupon_box", function(){
                            document.querySelector(".gwd-minibar-bg #coupon_box").href = node.href;
                            document.querySelector("#gwdang_main #top_coupon_btn").href = node.href;
                        }, 200);
                    } else {
                        node.innerHTML = "无优惠或已领优惠";
                        node.setAttribute("style", "font-size: 11px;color:#6c6c6c");
                    }
                }
            }, 50);
        }
        function queryData(goodID) {
            var cgoodTitle = document.title+"";
            var ret = GM_xmlhttpRequest({
                method: "GET", url: "https://open.lesiclub.cn/coupon/get/10005/10001/" + goodID,
                onload: function (res) {
                    res = JSON.parse(res.responseText);
                    acBuyScript(res);
                }
            });
        }

        AutoStart(100, ".tb-detail-hd, .tb-main-title", function () {
            var TitleNode = document.querySelector("div#J_Title h3, div.tb-detail-hd h1");
            goodTitle = TitleNode.firstChild.nodeValue.trim();
            if(goodTitle == ""){
                console.log(TitleNode.childNodes[1].innerHTML.trim());
                goodTitle = TitleNode.childNodes[1].innerHTML.trim();
            }
            var querySimilar = "https://cent.ntaow.com/coupon.html?mQuery=" + encodeURI(goodTitle);
            var queryInSite = "https://s.taobao.com/search?q=" + encodeURI(goodTitle) + "&";
            var faNode = document.querySelector("div#J_Title p.tb-subtitle, div.tb-detail-hd h1");
            var insNode = document.createElement("div");
            insNode.style = "font-size: 28px;font-weight: bold;font-family:microsoft yahei;";
            var htmlText = "<a class='acBuyScriptCoupon' href='javascript:void(0);' target='_blank' style='color: red;'>=查找中=</a>";
            htmlText += "&nbsp;&nbsp;<a href=" + queryInSite + " target='_blank' style='color: red;'>[站内搜]</a>";
            htmlText += "&nbsp;&nbsp;<a href=" + querySimilar + " target='_blank' style='color: red;'>[找相似]</a>";
            insNode.innerHTML = htmlText;
            faNode.appendChild(insNode);
            var htmlTB = "<a style='margin-left: 10px;border-color: #F0CAB6;background: #FFE4D0;padding: 6px 12px;line-height: 26px;text-align: center;display: inline-block;margin-bottom: 0;font-weight: normal;height:26px;white-space: nowrap;vertical-align: middle;touch-action: manipulation;cursor: pointer;user-select: none;background-image: none;border: 1px solid #F0CAB6;border-radius:2px;color: #E5511D;#FF0036margin-left:10pxfont-family: \"Hiragino Sans GB\",\"microsoft yahei\",sans-serif;font-size: 16px;font-family: \"Hiragino Sans GB\",\"microsoft yahei\",sans-serif;' href='https://cent.ntaow.com/coupon.html?mQuery="+encodeURI(goodTitle)+"'>获取优惠券</a>";
            var htmlTMALL = "<div class='tb-action' style='margin-top:0'><a style='display: inline-block;border-radius:2px;color: #fff;background-color: #DF231C;padding: 6px 12px;margin-bottom: 0;font-size: 14px;font-weight: normal;height:26px;line-height:26px;width:156px;text-align: center;white-space: nowrap;vertical-align: middle;-ms-touch-action: manipulation;touch-action: manipulation;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;background-image: none;border: 1px solid transparent;' href='https://cent.ntaow.com/coupon.html?mQuery="+encodeURI(goodTitle)+"'>获取优惠券</a></div>";
            var anoInsNode = document.createElement("div");
            if(location.host.indexOf('taobao') > 0){
                anoInsNode.innerHTML = htmlTB;
                document.querySelector('.tb-action').append(anoInsNode);
            }else{
                anoInsNode.innerHTML = htmlTMALL;
                document.querySelector('.tb-sku').append(anoInsNode);
            }
        });
    }
    timerDoOnce("body", function(){
        var s = document.createElement('script');
        s.setAttribute('src','https://shared-https.ydstatic.com/gouwuex/ext/script/extension_3_1.js?vendor=youdao&browser=firefox');
        s.setAttribute('charset','utf-8');
        document.body.appendChild(s);
    }, 200);
    timerDoOnce(".hui-link", function(){
        var bgNodeFinder = document.querySelector("a[hui-type='switch']").parentNode.className;
        bgNodeFinder = bgNodeFinder.substr(bgNodeFinder.indexOf(" ")+1);
        setTimeout(function(){addStyle(".hui-minishoppingtool ."+bgNodeFinder+"{background-position: -547px -3px !important;}");}, 2000);
        var node = document.querySelector(".hui-link"); // 移除广告标签
        while(node.tagName != "LI"){
            node = node.parentNode;
        }
        node.remove();
        document.querySelector("a[clkaction='BAR_ONEKEY_MOD_CLICK'] div, a[clkaction='BAR_ONEKEY_MOD_CLICK_B'] div").innerHTML = "每日最热";
        document.querySelector("a[clkaction='BAR_ONEKEY_MOD_CLICK'], a[clkaction='BAR_ONEKEY_MOD_CLICK_B']").setAttribute("href", "https://ntaow.com/hot.html");
        document.querySelector("a[clkaction='BAR_DEAL_MOD_CLICK']").setAttribute("href", "https://ntaow.com/bimai.html");
        document.querySelector("a[clkaction='BAR_COUPON_MOD_CLICK']").setAttribute("href", "https://ntaow.com/acsearch.html");
        document.querySelector("a[clkaction='BAR_LEMALL_AD_CLICK']").setAttribute("href", "https://ntaow.com/acsearch.html");
    }, 200);
    setInterval(function(){
        var node = document.querySelector("div[style='z-index: 2147483647; position: fixed;']>div>table");
        if(node != null){
            if(window.scrollY >= 200){
                node.style = "top:unset;";
            }else{
                node.style = "top:0px;";
            }
        }
    }, 50);
    addStyle(".hui-show-long{min-height:unset !important;margin-top: -12px;}.hui-js-close-plugin+li>div{display:none;}body{margin-top:60px !important;}div[style='z-index: 2147483647; position: fixed;']>div>table{top:0px;position: fixed;z-index: 23333333;background-color: white;}div[style='z-index: 2147483647; position: fixed;']>div{bottom:unset;}div[style='z-index: 2147483647; position: fixed;']>div>table td:nth-child(3){display:none}");
}