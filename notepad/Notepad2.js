if(typeof(ntaowRun) == "undefined"){
	ntaowRun = 1;
	!function(){
		var ntaowDT = setInterval(function () {
			if(document.querySelector(".detail-imgBtn") !=null){
				clearInterval(ntaowDT);
				init(resp);
			}
		}, 200);
		function init(data){
			$(".ac-load-spinner").attr("style", "display:none");
			$(".detail-imgBtn").attr("style", ""); // 数据都载入了，那么图片也要显示
			if (data.status == 1) {
				data = data.mod_json_details;
				var curGoodItemImgNode = document.querySelector(".detail-imgBtn");
				curGoodItemImgNode.dataset.url = data.itemClickUrl;
				curGoodItemImgNode.setAttribute("title", "N淘网-商品购买-" + data.title);
				var curGoodItemImgImage =  document.querySelector(".detail-imgBtn img");
				if(curGoodItemImgImage.src.length < 60){
					if(data.pict_url.indexOf("alicdn.com") > 0){
						curGoodItemImgImage.src = data.pict_url.replace("_400x400.jpg", "") + "_400x400q80.jpg";
					}else{
						curGoodItemImgImage.src = data.pict_url.replace("_400x400.jpg", "");
					}
				}
				var curGoodItem = document.createElement("div");
				curGoodItem.className = "detail-col";
				curGoodItem.innerHTML =
					`<a class="title clearfix " href="javascript:void(0);" rel="nofollow" title="N淘网-${data.title}" onclick="openUrl(this)" data-url="${data.couponUrl}" target="_blank" _pageexpand_="80">
						<span class="tmall"></span>
						<span class="title">${data.title}</span>
					</a>
					<div class="desc"><!--这里增加--></div>
					<div class="coupon-wrap clearfix">
						<span class="now-price"><b>(独享)</b>券后价&nbsp;&nbsp;&nbsp;&nbsp;<b>￥<i>${parseFloat(data.priceAfterDiscount).toFixed(2)}</i></b></span>
						<span class="org-price">在售价&nbsp;&nbsp;￥<i>${data.priceBeforeDiscount}</i></span>
					</div>
					<div class="text-wrap">
					<span class="text-wrap-span">已经领券<i>${data.couponUsedCount}</i>张，手慢无</span>
						<span>已有<i>${data.volume}</i>人购买</span>
					</div>
					<div class="buy-step clearfix">
						<div onclick="showQR()" class="qcrimg" style="float:right">
							<div class="qrCodeScan" style="height:80px; width:80px;margin-top: -20px;margin-left: 35px;">
							</div>
							<div style="line-height: 30px;">
								<span>无需登录，手机直接购买</span><span style="display: block;text-align: center;">点击放大，淘宝APP扫一扫即可畅游</span>
							</div>
						</div>
						<div class="ehy-normal clearfix NoTempCoupon" style="width: 250px;">
							<div class="buy-coupon">
								<span>优惠券</span>
								<span><b _hover-ignore="1"><i>￥</i>${parseInt(data.priceDiscount)}</b></span>
							</div>
							<!--这里增加-->
					</div>
					<div class="text2">
						<span>如果您喜欢此宝贝，记得分享给您的朋友。</span>
					</div>`;
				$("div.detail-row").append(curGoodItem);
				// 处理文字说明完成+
				$(".top-couponPrice span").html(parseInt(data.priceDiscount)+"元");
				$(".top-gotobuy a").attr("href", data.couponUrl);
				if(null != data.tempcouponUrl) $(".top-couponPrice a").attr("href", data.tempcouponUrl);
				document.title = data.title.replace(/<\/?span[^>]*>/g, "")+"-N淘网";
				var reasontxt = "<span>推荐理由：</span>";
				var buyBtnTxt = `<div class='goCouponbtn' style='display:inline-block;background:#ff4400;width:100px;'><a rel='nofollow' href='javascript:void(0);' class='coupon-btn' onclick='openUrl(this)' data-url='${data.couponUrl}' target='_blank' _pageexpand_='168'>${parseInt(data.priceDiscount) == 0 ? "直接购买" : "2.进入购买"}</a></div>`;
				// 针对内容元素进行修改
				if(data.text != null){
					var reasontxt = data.text;
				}
				if(parseInt(data.priceDiscount) != 0){
					reasontxt += `此款商品正在进行限时活动，原来天猫售价${data.priceBeforeDiscount}元，现有${parseInt(data.priceDiscount)}元优惠券，到手仅需${parseFloat(data.priceAfterDiscount).toFixed(2)}元，现已入选疯抢榜，绝对超值，有需要可速度下单哦！`;
				}
				$(".detail-col .desc").html(reasontxt);
				if(data.tempcouponUrl != null){
					$(".detail-col .ehy-normal").removeClass("NoTempCoupon");
					buyBtnTxt = `<div style='display:inline-table;background:#ff4400;width:70px;position:absolute;left:55px;top:0px;'>
									<a rel='nofollow' href='javascript:void(0);' class='coupon-btn' onclick='openUrl(this)' data-url='${data.tempcouponUrl}' target='_blank' _pageexpand_='168'>
										${parseInt(data.priceDiscount) == 0 ? "" :
						"<span style='line-height: 37px;'>1.先领券</span><span style='font-size: 11px;display: block;height: 15px;margin-top: 0;padding-top: 0;line-height: 10px;'>领券点我</span>"}
									</a>
								</div>` + buyBtnTxt;
				}
				$(".detail-col .ehy-normal").append(buyBtnTxt);
				// var qrURL = location.href.replace(/(&mQuery|&title).*/, "");
				// if(data.tempcouponUrl == null){ 强制---只要直接券地址---否则某些系统上ntaow会被强制弹出浏览器
				var qrURL = data.couponUrl.replace(/www.ntaow.com\/Slink.jsp\?GoTo=/, "s.click.taobao.com/");
				// }
				QRconfig = {
					text: encodeURI(qrURL),
					width: 80, height: 80, render: "canvas", foreground: "#FF6026", correctLevel: 0
				};
				jQuery('.qrCodeScan').qrcode(QRconfig);
			} else if (data.status == -2) {
				var curGoodItem = document.createElement("div");
				curGoodItem.style = "text-align: center;font-size: 22px;line-height: 3rem;";
				curGoodItem.innerHTML = "<a href='/hot.html' style='color: #ff9651;'>该商品暂不提供链接，看看其他的吧</a>";
				$("div.detail-row").append(curGoodItem);
			} else if (data.status == -3) {
				var curGoodItem = document.createElement("div");
				curGoodItem.style = "text-align: center;font-size: 22px;line-height: 3rem;";
				curGoodItem.innerHTML = "<a href='/hot.html' style='color: #ff9651;'>网站例行维护中，请过几分钟后再试</a>";
				$("div.detail-row").append(curGoodItem);
			} else {
				var curGoodItem = document.createElement("div");
				curGoodItem.style = "text-align: center;font-size: 22px;line-height: 3rem;";
				curGoodItem.innerHTML = "<a href='/hot.html' style='color: #ff9651;'>该商品暂不提供链接，看看其他的吧</a>";
				$("div.detail-row").append(curGoodItem);
			}
		}
	}()
}


