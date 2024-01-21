// content.js
// 创建一个 <style> 元素并添加动画定义
const style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `
@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.9); /* 放大的比例 */
    }
}
.pulse-animation {
    animation: pulse 1s infinite ease-in-out;
}`;
document.head.appendChild(style);

document.addEventListener('mouseup', function (event) {
    let selectedText = window.getSelection().toString().trim();
    let isClickInsideIcon = event.target.classList.contains('xiamu-ssr-modifier-icon');
    let activeIcon = document.querySelector('.xiamu-ssr-modifier-icon');

    // 有图标，没点上图标
    if (activeIcon && !isClickInsideIcon) {
        clearIcons(); // 只有当点击不在图标上时才清除图标
        return;
    }
    // 有图标，点上图标
    // if (activeIcon && isClickInsideIcon) {
    //     clearIcons(); // 只有当点击不在图标上时才清除图标
    //     return;
    // }

    //没有图标，选中了文本，就新建图标
    if (selectedText.length > 0 && !activeIcon) {
        // 获取鼠标位置
        // let iconX = event.pageX;
        // let iconY = event.pageY;
        let iconX = event.pageX + window.scrollX;
        let iconY = event.pageY + window.scrollY;

        // 创建图标元素并显示
        let iconElement = document.createElement('img');
        iconElement.src = chrome.runtime.getURL('images/icon48.png');
        iconElement.classList.add('xiamu-ssr-modifier-icon', 'pulse-animation');
        // iconElement.style.position = 'absolute';
        iconElement.style.position = 'fixed';
        iconElement.style.top = `${iconY - 20}px`;
        iconElement.style.left = `${iconX + 20}px`;
        iconElement.style.zIndex = '1000';
        document.body.appendChild(iconElement);

        // 添加点击事件
        iconElement.addEventListener('click', async function () {
            // 获取选中的文本对象
            let selection = window.getSelection();
            // 使用自定义规则修改文本
            let newText = await modifyText(selectedText);
            // 创建范围对象，并用新文本节点替换选中的文本
            let range = selection.getRangeAt(0);
            range.deleteContents();
            range.insertNode(document.createTextNode(newText));
            if (window.getSelection) { 
                window.getSelection().removeAllRanges(); 
            }else if (document.selection) { 
                document.selection.empty(); 
            }
            // 移除图标
            // iconElement.remove();
            clearIcons();
            // 尝试取消所有选中的文本
            if (window.getSelection) {
                window.getSelection().removeAllRanges();
            } else if (document.selection) { // 主要是针对较旧的IE浏览器
                document.selection.empty();
            }
        });
    }
    // else{
    //     // 尝试取消所有选中的文本
    //     if (window.getSelection) {
    //         window.getSelection().removeAllRanges();
    //     } else if (document.selection) { // 主要是针对较旧的IE浏览器
    //         document.selection.empty();
    //     }
    //     clearIcons();
    // }
});

//清空所有图标
function clearIcons() {
    const icons = document.querySelectorAll('.xiamu-ssr-modifier-icon'); // 假设你给图标加了这个类名
    icons.forEach(icon => icon.remove());
}


// 根据规则修改文本的函数,使用async声明函数以使用await
async function modifyText(selectedText) {
    try {
        // 等待getOptions获取结果
        let options = await getOptions();
        console.log(options);
        let text = selectedText;
        for (let feature in options) {
            if (options[feature]) {
                text = applyRule(feature, text);
            }
        }
        return text;
    } catch (error) {
        console.error('Error getting options:', error);
    }
}


// 获取用户选择的功能设置,返回一个Promise
function getOptions() {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get('options', function (result) {
            if (chrome.runtime.lastError) {
                reject(new Error(chrome.runtime.lastError));
            } else {
                resolve(result.options);
            }
        });
    });
}



// 应用规则的函数，每个功能为一个规则
function applyRule(rule, text) {
    // 这里根据规则修改文本，每个功能实现一个规则
    switch (rule) {
        case 'feature1':
            text = func_01(text);
            break;
        case 'feature2':
            text = func_02(text);
            break;
        case 'feature3':
            text = func_03(text);
            break;
        // 更多功能...
    }
    return text;
}

//功能01
function func_01(text){
    console.log("func_01 start, text=", text);
    // text = text.replace(/([a-zA-Z]+([-_][a-zA-Z]+)*)/g, '`$1`');
    // text = text.replace(/(?<!`)([a-zA-Z]+([-_][a-zA-Z]+)*)(?!`)/g, '`$1`');
    text = text.replace(/(?<!`)\b([a-zA-Z]+([-\s_.][a-zA-Z]+)*)\b(?!`)/g, '`$1`');
    console.log("func_01 -over, text=", text);
    return text;
}

//功能02
function func_02(text){
    console.log("func_02 start, text=", text);

    console.log("func_02 -over, text=", text);
    return text;
}
//功能03
function func_03(text){
    console.log("func_02 start, text=", text);

    console.log("func_02 -over, text=", text);
    return text;
}

