// ==UserScript==
// @name         2020 VirMach抢购自动下单的程序
// @namespace    Dxt
// @version      0.1
// @description  使用说明：①界面请打开https://billing.virmach.com/supporttickets.php
// @author       Dxt
// @include      http*://virmach.com/*
// @include      http*://billing.virmach.com/*
// @require      https://cdn.bootcss.com/jquery/2.2.4/jquery.min.js
// @grant        GM_xmlhttpRequest
// @grant        GM.notification
// @grant        GM_notification
// @connect      billing.virmach.com
// @run-at       document-end
// ==/UserScript==

var planid = {};

$(function () {
    if (check_url('billing.virmach.com') && !location.href.includes("supporttickets")) {
        vir_show();
        order();
    } else {
        vir_index()
        console.clear();
    }
    setTimeout(() => {
        location.reload();
    }, 1800000)
})

function vir_index() {
    var data = '<div style="margin: 20px; line-height: 35px; font-size: 18px; position: absolute;right: 0px;top: 0px;width: 350px;" id="vir_show">\n' +
      '    <span style="display:inline-flex;float: right;background: #485a5a;color:#fff;padding:5px;cursor:pointer;"\n' +
      '          id="vir_show_btn">设置</span>\n' +
      '    <div class="online" style="line-height: 24px;padding: 25px 16px;text-align: center;">\n' +
      '        <h4 style="font-size: 45px;line-height: 100%;vertical-align: middle;color: #ffffff;" id="vir_pricing">$0.00\n' +
      '            <span>/年</span></h4>\n' +
      '        <span style="display: inherit;background: #485a5a;color:#fff;padding:5px;text-align: center;">①点击设置 ②设置下单参数 ③勾选开启自动下单 ④程序会自动匹配下单！</span>\n' +
      '    </div>\n' +
      '    <div style="background-color: #fbf8fd;">\n' +
      '        <ul style="margin: 0;padding: 0;">\n' +
      '            <li style="list-style: none;padding: 5px;border-bottom: 1px solid #ddd;text-indent: 30px;">\n' +
      '                <img alt="VIRTUALIZATION" src="https://cdn2.virmach.com/wp-content/uploads/3d.png" style="width: 20px;">\n' +
      '                <strong id="vir_virt">KVM</strong>–\n' +
      '                <span id="vir_message">0 GIGABIT</span></li>\n' +
      '            <li style="display:none;list-style: none;padding: 5px;border-bottom: 1px solid #ddd;text-indent: 30px;">\n' +
      '                <img alt="WINDOWS" src="https://cdn1.virmach.com/wp-content/uploads/windows.png" style="width:20px;">\n' +
      '                <strong>WINDOWS</strong><span id="vir_windows">不可用</span></li>\n' +
      '            <li style="list-style: none;padding: 5px;border-bottom: 1px solid #ddd;text-indent: 30px;">\n' +
      '                <img alt="RAM" src="https://cdn2.virmach.com/wp-content/uploads/ram.png" style="width: 20px;">\n' +
      '                <strong id="vir_ram">0</strong> 内存\n' +
      '            </li>\n' +
      '            <li style="list-style: none;padding: 5px;border-bottom: 1px solid #ddd;text-indent: 30px;">\n' +
      '                <img alt="CPU" src="https://cdn1.virmach.com/wp-content/uploads/cpu.png" style="width: 20px;">\n' +
      '                <strong id="vir_cpu">0</strong> 核心\n' +
      '            </li>\n' +
      '            <li style="list-style: none;padding: 5px;border-bottom: 1px solid #ddd;text-indent: 30px;">\n' +
      '                <img alt="HDD" src="https://cdn3.virmach.com/wp-content/uploads/disk.png" style="width: 20px;">\n' +
      '                <strong id="vir_hdd">0</strong> 固态硬盘(RAID 10)\n' +
      '            </li>\n' +
      '            <li style="list-style: none;padding: 5px;border-bottom: 1px solid #ddd;text-indent: 30px;">\n' +
      '                <img alt="BANDWIDTH" src="https://cdn1.virmach.com/wp-content/uploads/network.png" style="width: 20px;">\n' +
      '                <strong id="vir_bw">0</strong> 流量\n' +
      '            </li>\n' +
      '            <li style="list-style: none;padding: 5px;border-bottom: 1px solid #ddd;text-indent: 30px;">\n' +
      '                <img alt="LOCATION" src="https://cdn1.virmach.com/wp-content/uploads/2015/09/server2.png"\n' +
      '                     style="width: 20px;">\n' +
      '                <strong id="vir_location">DALLAS, TX</strong> 机房\n' +
      '            </li>\n' +
      '            <li style="list-style: none;padding: 5px;border-bottom: 1px solid #ddd;text-indent: 30px;">\n' +
      '                <img alt="IPs" src="https://cdn2.virmach.com/wp-content/uploads/ip.png" style="width: 20px;">\n' +
      '                <strong id="vir_ips">0</strong> 独享IPv4\n' +
      '            </li>\n' +
      '            <li style="list-style: none;padding: 5px;border-bottom: 1px solid #ddd;text-align: center;">\n' +
      '                正在监控，【<span id="vir_time">2</span>】秒后刷新\n' +
      '            </li>\n' +
      '            <li style="list-style: none;padding: 5px;border-bottom: 1px solid #ddd;color: #03A9F4;text-align: center;">\n' +
      '                <input type="checkbox" id="open_checkbox" checked>开启自动下单\n' +
      '            </li>\n' +
      '        </ul>\n' +
      '    </div>\n' +
      '    <p id="buyurl" style="text-align: center;background: red;margin: 15px 0px;">\n' +
      '        <a href="#" rel="noopener noreferrer" target="_blank">\n' +
      '           <span id="vir_buyurl" style="font-size: 20px;line-height: 50px;width: 100%;color:  #fff;text-decoration: none;">已售空</span></a>\n' +
      '    </p>\n' +
      '</div>\n' +
      '<div style="margin: 20px; line-height: 35px; font-size: 18px; text-align: center;display: none;position: absolute;right: 0px;top: 0px;width: 350px;" id="vir_setting">\n' +
      '    <span style="display:inline-flex;float: left;background: #485a5a;color:#fff;padding:5px;cursor:pointer;"\n' +
      '          id="vir_setting_btn">←</span>\n' +
      '    <div style="line-height: 24px;padding: 25px 16px;background-color: #2196F3;">\n' +
      '        <h4 style="font-size: 30px;color: #ffffff;">设置</h4>\n' +
      '    </div>\n' +
      '    <div style="background-color: #fbf8fd;">\n' +
      '        <ul style="margin: 0;padding: 0;">\n' +
      '            <li style="list-style: none;padding: 5px;border-bottom: 1px solid #ddd;">\n' +
      '                <img alt="VIRTUALIZATION" src="https://cdn2.virmach.com/wp-content/uploads/3d.png" style="width: 20px;">\n' +
      '                <strong>价格：</strong>\n' +
      '                <select id="priv" style="width: 200px;">\n' +
      '                    <option value="0">所有</option>\n' +
      '                    <option value="5">小于$5</option>\n' +
      '                    <option value="10" selected>小于$10</option>\n' +
      '                    <option value="15">小于$15</option>\n' +
      '                    <option value="20">小于$20</option>\n' +
      '                    <option value="25">小于$25</option>\n' +
      '                    <option value="30">小于$30</option>\n' +
      '                    <option value="40">小于$40</option>\n' +
      '                    <option value="50">小于$50</option>\n' +
      '                </select>\n' +
      '            </li>\n' +
      '            <li style="list-style: none;padding: 5px;border-bottom: 1px solid #ddd;">\n' +
      '                <img alt="RAM" src="https://cdn2.virmach.com/wp-content/uploads/ram.png" style="width: 20px;">\n' +
      '                <strong>内存：</strong>\n' +
      '                <select id="ramv" style="width:  200px;">\n' +
      '                    <option value="0">所有</option>\n' +
      '                    <option value="512">内存大于512M</option>\n' +
      '                    <option value="1024" selected>内存大于1024M</option>\n' +
      '                    <option value="2048">内存大于2048M</option>\n' +
      '                    <option value="4096">内存大于4096M</option>\n' +
      '                    <option value="8192">内存大于8192M</option>\n' +
      '                </select>\n' +
      '            </li>\n' +
      '            <li style="list-style: none;padding: 5px;border-bottom: 1px solid #ddd;">\n' +
      '                <img alt="CPU" src="https://cdn1.virmach.com/wp-content/uploads/cpu.png" style="width: 20px;">\n' +
      '                <strong>CPU：</strong>\n' +
      '                <select id="cpuv" style="width:  200px;">\n' +
      '                    <option value="0">所有</option>\n' +
      '                    <option value="2" selected>大于1核</option>\n' +
      '                    <option value="3">大于2核</option>\n' +
      '                    <option value="4">大于3核</option>\n' +
      '                    <option value="5">大于4核</option>\n' +
      '                    <option value="6">大于5核</option>\n' +
      '                </select>\n' +
      '            </li>\n' +
      '            <li style="list-style: none;padding: 5px;border-bottom: 1px solid #ddd;">\n' +
      '                <img alt="HDD" src="https://cdn3.virmach.com/wp-content/uploads/disk.png" style="width: 20px;">\n' +
      '                <strong>硬盘：</strong>\n' +
      '                <select id="hddv" style="width:  200px;">\n' +
      '                    <option value="0">所有</option>\n' +
      '                    <option value="5">硬盘大于5G</option>\n' +
      '                    <option value="10">硬盘大于10G</option>\n' +
      '                    <option value="15">硬盘大于15G</option>\n' +
      '                    <option value="20">硬盘大于20G</option>\n' +
      '                    <option value="30">硬盘大于30G</option>\n' +
      '                    <option value="50">硬盘大于50G</option>\n' +
      '                </select>\n' +
      '            </li>\n' +
      '            <li style="list-style: none;padding: 5px;border-bottom: 1px solid #ddd;">\n' +
      '                <img alt="BANDWIDTH" src="https://cdn1.virmach.com/wp-content/uploads/network.png" style="width: 20px;">\n' +
      '                <strong>流量：</strong>\n' +
      '                <select id="bwv" style="width:  200px;">\n' +
      '                    <option value="0">所有</option>\n' +
      '                    <option value="100">流量大于100G</option>\n' +
      '                    <option value="200">流量大于200G</option>\n' +
      '                    <option value="300">流量大于300G</option>\n' +
      '                    <option value="500">流量大于500G</option>\n' +
      '                    <option value="1000">流量大于1000G</option>\n' +
      '                    <option value="3000">流量大于3000G</option>\n' +
      '                    <option value="5000">流量大于5000G</option>\n' +
      '                </select>\n' +
      '            </li>\n' +
      '            <li style="list-style: none;padding: 5px;border-bottom: 1px solid #ddd;">\n' +
      '                <img alt="IPs" src="https://cdn2.virmach.com/wp-content/uploads/ip.png" style="width: 20px;">\n' +
      '                <strong>ＩＰ：</strong>\n' +
      '                <select id="ips" style="width:  200px;">\n' +
      '                    <option value="0">所有</option>\n' +
      '                    <option value="1">大于 1 IP</option>\n' +
      '                    <option value="2">大于 2 IP</option>\n' +
      '                    <option value="3">大于 3 IP</option>\n' +
      '                    <option value="4">大于 4 IP</option>\n' +
      '                    <option value="5">大于 5 IP</option>\n' +
      '                </select>\n' +
      '            </li>\n' +
      '            <li style="list-style: none;padding: 5px;border-bottom: 1px solid #ddd;">\n' +
      '                <img alt="LOCATION" src="https://cdn1.virmach.com/wp-content/uploads/2015/09/server2.png"\n' +
      '                     style="width: 20px;">\n' +
      '                <strong>机房：</strong>\n' +
      '                <select id="locv">\n' +
      '                    <option value="0">所有</option>\n' +
      '                    <option value="1">洛杉矶</option>\n' +
      '                    <option value="2">圣何塞</option>\n' +
      '                    <option value="3">西雅图</option>\n' +
      '                    <option value="4">水牛城</option>\n' +
      '                    <option value="5">圣何塞</option>\n' +
      '                </select>\n' +
      '                <img alt="WINDOWS" src="https://cdn1.virmach.com/wp-content/uploads/windows.png" style="width:20px;">\n' +
      '                <strong>Win：</strong>\n' +
      '                <select id="win">\n' +
      '                    <option value="0">所有</option>\n' +
      '                    <option value="0">否</option>\n' +
      '                    <option value="1">是</option>\n' +
      '                </select></li>\n' +
      '        </ul>\n' +
      '    </div>\n' +
      '    <style>' +
      '    .online{ background-color: #2196F3;}' +
      '    .offline{ background-color: red;}' +
      '    </style>'
    '</div>';

    //$('head').remove();
    //$('body').remove();
    $('body').append(data);

    $('#vir_show_btn').click(function () {
        $('#vir_show').hide();
        $('#vir_setting').show();
    })
    $('#vir_setting_btn').click(function () {
        $('#vir_setting').hide();
        $('#vir_show').show();
    })

    $('#buyurl').click(function () {
        window.open("https://billing.virmach.com/aff.php?aff=8971&pid=0179&billingcycle=annually");
    })

    $("#open_checkbox").click(function () {
        //开启自动下单
        planid = 0;
    })
    refreshTime();
}

function vir_show() {
    var data = '<div id="vir_log" style="position: fixed;display: block;top: 0;right:0;z-index: 9999;width:  100%;height:  100%;background: rgba(0,0,0,0.5);text-align: center;">\n' +
      '  <span id="text_log" style="background: #485a5a;color:#fff;z-index:  100000;top: 50%;display: inherit;margin: 0 auto;position: relative;"></span>\n' +
      '</div>';

    $('body').append(data);
    $("#vir_log").hide();
    $("#vir_log").click(function(){
        $("#vir_log").remove();
    })
}

function check_url(check) {
    var this_url = location.href;
    if (this_url.indexOf(check) > -1) {
        return 1;
    }
    return 0;
}

function refreshTime() {
    var time_span = document.getElementById("vir_time");
    var time_val = time_span.innerHTML;
    var int_val = parseInt(time_val);//返回由字符串转换得到的整数。
    var new_int_val = int_val - 1;
    if (new_int_val > -1) {
        time_span.innerHTML = new_int_val;

    } else {
        time_span.innerHTML = 5;
        MyRefresh();
    }
    setTimeout(refreshTime, 1000);

}

let isLoading = false

function MyRefresh() {
    if(isLoading === false){
        isLoading = true
    }else{
        return
    }

    $.ajax({
        type: "get",
        url: "https://billing.virmach.com/modules/addons/blackfriday/new_plan.json",
        dataType: "json",//回调函数接收数据的数据格式
        // headers: {
        //   "Referer": 'https://billing.virmach.com/clientarea.php',
        //   "Origin": 'https://billing.virmach.com'
        // },
        success: function (msg) {
            // msg = JSON.parse(msg.responseText)
            if (planid != msg.planid) {
                planid = msg.planid;
                var iwin = msg.windows;
                var bwin = document.getElementById("vir_windows");
                if (iwin != true) {
                    bwin.innerText = "不可用";
                } else {
                    bwin.innerText = "可用";
                }
                var ppp = "0.00";
                if (msg.price != null) {
                    ppp = msg.price.replace("yr", "年");
                }
                $('#vir_pricing').html(ppp);
                $('#vir_virt').html(msg.virt);
                $('#vir_ram').html(msg.ram);
                $('#vir_cpu').html(msg.cpu);
                $('#vir_hdd').html(msg.hdd);
                $('#vir_bw').html(msg.bw);
                $('#vir_ips').html(msg.ips);
                $('#vir_message').html(msg.message);
                $('#vir_location').html(msg.location);

                if (msg.ended != undefined) {
                    $('#vir_buyurl').text("已售空");
                    $('#buyurl').attr('style', 'text-align: center;background: red;margin: 15px 0px;');
                } else {
                    $('#vir_buyurl').text("立即购买");
                    $('#buyurl').attr('style', 'text-align: center;background: #16a085;margin: 15px 0px;');
                    //开启自动下单
                    if ($("#open_checkbox")[0].checked) {
                        var pp = msg.price;
                        var ppv = pp.substr(1, 5);
                        var ppf = parseFloat(ppv);
                        var toplay = 1;
                        //自选套餐处理
                        var mpri = parseFloat(document.getElementById("priv").value);
                        var mcpu = parseFloat(document.getElementById("cpuv").value);
                        var mloc = parseFloat(document.getElementById("locv").value);
                        var mram = parseFloat(document.getElementById("ramv").value);
                        var mhdd = parseFloat(document.getElementById("hddv").value);
                        var mbw = parseFloat(document.getElementById("bwv").value);
                        var mwin = parseFloat(document.getElementById("win").value);
                        var mips = parseFloat(document.getElementById("ips").value);
                        var mall = mpri + mcpu + mloc + mram + mhdd + mbw + mwin + mips;
                        if (mall != 0) {
                            var icpu = parseInt(msg.cpu);
                            var ihdd = parseInt(msg.hdd);
                            var iram = parseInt(msg.ram);
                            var ibw = parseInt(msg.bw);
                            var iips = parseInt(msg.ips);
                            if (mpri != 0) {
                                if (ppf >= mpri) {
                                    toplay = 0;
                                }
                            }
                            if (mcpu != 0 && toplay == 1) {
                                if (icpu < mcpu) {
                                    toplay = 0;
                                }
                            }
                            if (mram != 0 && toplay == 1) {
                                if (iram < mram) {
                                    toplay = 0;
                                }
                            }
                            if (mhdd != 0 && toplay == 1) {
                                if (ihdd < mhdd) {
                                    toplay = 0;
                                }
                            }
                            if (mbw != 0 && toplay == 1) {
                                if (ibw < mbw) {
                                    toplay = 0;
                                }
                            }
                            if (mips != 0 && toplay == 1) {
                                if (iips < mips) {
                                    toplay = 0;
                                }
                            }
                            if (mwin != 0 && toplay == 1) {
                                if (iwin != true || mwin != 1) {
                                    toplay = 0;
                                }
                            }
                            if (mloc != 0 && toplay == 1) {
                                switch (mloc) {
                                    case 1:
                                        if (msg.location != "LOS ANGELES, CA")
                                            toplay = 0;
                                        break;
                                    case 2:
                                        if (msg.location != "San Jose, CA")
                                            toplay = 0;
                                        break;
                                    case 3:
                                        if (msg.location != "SEATTLE, WA")
                                            toplay = 0;
                                        break;
                                    case 4:
                                        if (msg.location != "BUFFALO, NY")
                                            toplay = 0;
                                        break;
                                    default:
                                        toplay = 0;
                                        break;
                                }
                            }
                        }

                        if (toplay == 1) {
                            //$("#vir_buyurl").click();
                            window.open("https://billing.virmach.com/aff.php?aff=8971&pid=0179&billingcycle=annually");
                        }
                    }
                }
            }
        },
        error: function() {
            $('.online').addClass("offline");
            GM.notification({
                'text': 'API掉线了- reNew一下',
                'title': 'API掉线了- reNew一下',
                'image': 'https://eyun.baidu.com/box-static/page-common/images/favicon.ico',
                'timeout': 5,
                'onclick': () => {
                    window.open('https://billing.virmach.com/modules/addons/blackfriday/new_plan.json')
                    // shouldReload = true
                    // link.click()
                }
            })
        },
        complete: ()=> {
            isLoading = false
        }
    });
}

function order() {
    if ($(".cf-error-code").text() == "") {
        if ($("#challenge-form").text() == "") {
            if (check_url("cart.php?a=confproduct")) {
                Msg_Log("正在打开购买界面，请耐心等候...");
                if ($(".alert-heading").text() == "Out of Stock") {
                    Msg_Log("错误或者售罄，本机抢购结束！");
                    window.close();
                    //错误或者售罄
                } else {
                    $('form[name="orderform"]').submit();
                }
                Msg_Log("正在购买界面数据已经提交");
            }
            if (check_url("cart.php?a=view")) {
                if ($(".alert-heading").text() != "" && $(".alert-heading").text() != undefined) {
                    Msg_Log("错误或者售罄，本机抢购结束！");
                    window.close();
                    //错误或者售罄
                } else if ($("body").html().indexOf("$0.00 USD") > -1) {
                    Msg_Log("账单为$0.00 USD，正在为你重新下单，请耐心等候...");
                    //账单为$0.00 USD，正在为你重新下单
                    location.href = "https://billing.virmach.com/aff.php?aff=8971&pid=175&billingcycle=annually";
                } else {
                    Msg_Log("正在跳转购物车界面，请耐心等候...");
                    $('.btn').each(function (e) {
                        if ($(this).text().indexOf('Checkout') != -1) {
                            $(this)[0].click();
                        }
                    });
                    Msg_Log("正在提交购物车界面...");
                }
            }
            if (check_url("cart.php?a=checkout")) {
                Msg_Log("正在跳转数据确认界面，请耐心等候...");
                if ($("body").html().indexOf("$0.00 USD") > -1) {
                    Msg_Log("账单为$0.00 USD，本次抢购比较火爆，已经被抢完。");
                    window.close();
                } else {
                    $("#accepttos")[0].parentNode.parentNode.click();
                    $('.selector').each(function (e) {
                        if ($(this).attr('data-value').indexOf('paypalbilling') != -1) {
                            $(this)[0].click();
                        }
                    });
                    $('input').each(function (e) {
                        if ($(this).val().indexOf('Complete Order') != -1) {
                            $(this)[0].click();
                        }
                    });
                    $(":submit")[0].click();
                    $("#modalsubmit").click();
                    Msg_Log("已经提交数据，请耐心等待，看到支付界面，说明成功！");
                }
            }
            if (check_url("cart.php?a=complete")) {
                Msg_Log("本次抢购结束！");
                window.close();
            }
        } else {
            Msg_Log("出现验证码，请手动输入验证码！");
        }
    } else {
        setTimeout(function () {
            location.reload();
        }, 3000);
    }
}

function Msg_Log(msg) {
    $("#vir_log").show();
    $('#text_log').text(msg);
    console.log(msg);
}
