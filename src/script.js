/*
 * @Author: pahhcn 9122129@gmail.com
 * @Date: 2024-12-21 12:42:07
 * @LastEditors: pahhcn 9122129@gmail.com
 * @LastEditTime: 2024-12-21 14:14:40
 * @FilePath: \randomImage\script.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


// 配置选项，可以通过传入配置自定义行为
const config = {
    fallbackImageUrl: 'assets/fallback-image.jpg',  // 备用图片路径
    logErrors: true,  // 是否记录错误日志
};

// 默认图片 URL 列表
const imageUrls = [
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

// 随机选择图片
function getRandomImageUrl() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
}

// 将错误日志保存到 localStorage
function logErrorToLocalStorage(message) {
    let logs = JSON.parse(localStorage.getItem('imageErrorLogs')) || [];
    logs.push({ timestamp: new Date().toISOString(), errorMessage: message });
    localStorage.setItem('imageErrorLogs', JSON.stringify(logs));
}

// 处理图片加载失败
window.handleImageError = function(img) {
    const errorMessage = `图片加载失败: ${img.src}`;
    
    // 使用配置中的备用图片
    img.src = config.fallbackImageUrl;
    img.alt = '图片加载失败';  // 替代文本

   
};

// 设置图片
(function() {
    const imgElement = document.getElementById('randomImage');
    imgElement.src = getRandomImageUrl();
})();
