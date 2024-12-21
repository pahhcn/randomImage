/*
 * @Author: pahhcn 9122129@gmail.com
 * @Date: 2024-12-21 12:42:07
 * @LastEditors: pahhcn 9122129@gmail.com
 * @LastEditTime: 2024-12-21 12:55:59
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
    "https://raw.gitcode.com/qq_44112897/images/raw/master/comic/39.jpg",
    "https://raw.gitcode.com/qq_44112897/images/raw/master/comic/9.jpg",
    "https://raw.gitcode.com/qq_44112897/images/raw/master/comic/3.jpg",
    "https://raw.gitcode.com/qq_44112897/images/raw/master/comic/19.jpg",

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
