// popup.js
document.getElementById('save').addEventListener('click', () => {

  console.log("保存设置中");
  let options = {
    feature1: document.getElementById('feature1').checked,
    feature2: document.getElementById('feature2').checked,
    feature3: document.getElementById('feature3').checked,
  };
  document.getElementById('test').innerText="设置成功√";
  // 保存到存储中
  chrome.storage.local.set({ options }, function () {
    console.log('Options saved.');
  });

  setTimeout(function() {
    document.getElementById('test').innerText = "一切正常:)";
  }, 1000);
});

// 当文档加载完毕时，读取存储的设置
document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get('options', function(data) {
    if (data.options) {
      document.getElementById('feature1').checked = data.options.feature1;
      document.getElementById('feature2').checked = data.options.feature2;
      document.getElementById('feature3').checked = data.options.feature3;
    }
  });
});