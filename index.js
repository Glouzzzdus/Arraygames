const container = document.querySelector(".histogram-container");
const containerVal = document.querySelector(".value-container");
const containerIdx = document.querySelector(".index-container");
let arrLength = document.getElementById("lenght");
let maxValue = document.getElementById("max-value");
let minValue = document.getElementById("min-value");
let generateBtn = document.getElementById("gen-btn");
let data = [];
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomArray(length, min, max) {
  let result = [];
  for (let i = 0; i < length; i++) {
    result.push(getRandomInt(+min, +max));
  }
  return result;
}

function drawGistogramm(arr, color) {
  container.innerHTML = "";
  containerVal.innerHTML = "";
  containerIdx.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const column = document.createElement("div");
    const cValues = document.createElement("div");
    const cIndexes = document.createElement("div");
    column.classList.add("histogram-column");
    cValues.classList.add("value-column");
    cIndexes.classList.add("index-column");
    column.style.height = `${arr[i]}%`;
    cValues.innerText = `${arr[i]}`;
    cIndexes.innerText = `${i}`;
    column.style.backgroundColor = `${color}`;
    container.appendChild(column);
    containerVal.appendChild(cValues);
    containerIdx.appendChild(cIndexes);
  }
}

function createGistogramm() {
  if (arrLength.value > 20 || arrLength.value <= 0) arrLength.value = 20;
  if (minValue.value > 100 || minValue.value < 0) minValue.value = 0;
  if (maxValue.value > 100 || maxValue.value < 0) maxValue.value = 100;
  data = generateRandomArray(arrLength.value, minValue.value, maxValue.value);

  console.log("length = " + arrLength.value);
  console.log("min = " + minValue.value);
  console.log("max = " + maxValue.value);
  console.log(data);

  drawGistogramm(data, "red");
}
