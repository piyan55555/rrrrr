let selectedRegion = null;
let selectedColor = null;

// 點選舌頭部位
function selectRegion(region) {
  selectedRegion = region;
  updateResult();
}

// 點選顏色按鈕
function selectColor(color) {
  selectedColor = color;
  updateResult();
}

// 更新結果區塊
function updateResult() {
  const resultBox = document.getElementById('result');

  if (selectedRegion && selectedColor) {
    const key = selectedRegion + '_' + selectedColor;

    // 舌診資料庫（可擴充）
    const data = {
      "脾胃_黃色": {
        message: "脾胃濕熱，常見口苦、胃脹、大便黏滯。",
        herb: "建議中藥：黃連、厚朴、茯苓",
        classic: "《素問》：「黃為脾色，其病為熱。」"
      },
      "腎_白色": {
        message: "腎陽虛，可能有腰痠、怕冷、夜尿多。",
        herb: "建議中藥：附子、肉桂、杜仲",
        classic: "《靈樞》：「黑色主腎，其病寒濕內盛。」"
      },
      "心肺_紅色": {
        message: "心火旺盛，可能伴隨口舌生瘡、心煩易怒。",
        herb: "建議中藥：黃連、蓮子心、丹參",
        classic: "《素問》：「赤為心色，其病為熱。」"
      }
    };

    if (data[key]) {
      resultBox.innerHTML = `
        <p><strong>選擇部位：</strong>${selectedRegion}</p>
        <p><strong>選擇顏色：</strong>${selectedColor}</p>
        <p><strong>分析結果：</strong>${data[key].message}</p>
        <p>${data[key].herb}</p>
        <p><em>${data[key].classic}</em></p>
      `;
    } else {
      resultBox.innerHTML = `<p>此組合尚未設定：${selectedRegion} + ${selectedColor}</p>`;
    }
  } else {
    resultBox.innerHTML = `<p>請先選擇部位與顏色。</p>`;
  }
}
