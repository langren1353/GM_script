<?php

function doGet($yourUrl){
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $yourUrl);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    // 第一次请求-提取app.xxxxx.js
    $data = curl_exec($curl);
    return $data;
}

$html = doGet('http://fanyi.sogou.com/');
preg_match('(app.[^.]+.js)', $html, $match);
$match = $match[0];
$html2 = doGet('http://dlweb.sogoucdn.com/translate/pc/static/js/'.$match);
//echo $html2;
preg_match('(\+L\+O\+B\+"([^"]+))', $html2, $match2);
//print_r($match2[1]);
echo $match2[1];
?>