let selectedRegion = null;
let selectedColor = null;

function selectRegion(region) {
  selectedRegion = region;
  updateResult();
}

function selectColor(color) {
  selectedColor = color;
  updateResult();
}

function updateResult() {
  if (selectedRegion && selectedColor) {
    const resultBox = document.getElementById('result');
    const key = selectedRegion + '_' + selectedColor;
    
    // 模擬一組資料庫 (可以未來換成 JSON 載入)
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
      }
    };

    if (data[key]) {
      resultBox.innerHTML = `
        <p><strong>分析結果：</strong>${data[key].message}</p>
        <p>${data[key].herb}</p>
        <p><em>${data[key].classic}</em></p>
      `;
    } else {
      resultBox.innerHTML = `<p>此組合尚未設定。</p>`;
    }
  }
}
