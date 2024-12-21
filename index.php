<?php
// 图片列表，包含图片的 URL 或本地路径
header("Access-Control-Allow-Origin: https://your.blog.cn");//跨域问题，

$imageUrls = [
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/1.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/2.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/3.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/4.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/5.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/6.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/7.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/8.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/9.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/10.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/11.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/12.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/13.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/14.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/15.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/16.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/17.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/18.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/19.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/20.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/21.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/22.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/23.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/24.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/25.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/26.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/27.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/28.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/29.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/30.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/31.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/32.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/33.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/34.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/35.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/36.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/37.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/38.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/39.jpg",
        "https://gitee.com/dreamfcn/randomImage/raw/main/Image/40.jpg",
       "./assets/fallback-image.jpg",
];

// 从图片列表中随机选择一个索引
$randomIndex = array_rand($imageUrls);

// 获取随机选择的图片 URL
$randomImage = $imageUrls[$randomIndex];

// 设置正确的 Content-Type 以便浏览器正确显示图片
header('Content-Type: image/jpeg');  // 根据图片类型设置，例如 image/jpeg、image/png 等

// 输出图片内容
echo file_get_contents($randomImage);
?>
