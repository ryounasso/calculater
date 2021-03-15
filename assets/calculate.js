var result = document.getElementById("result");
var his = document.getElementById("history");
function edit(elem) {
  result.value = result.value + elem.value;
}
let historys = [];
var div = document.createElement("div");
function calc() {
  result.value = new Function("return " + result.value)();
  historys.push(result.value);
  div.innerText = historys;
  his.appendChild(div);
}
function calc_tax() {
  result.value = new Function("return " + result.value*1.1)();
  result.value = Math.floor(result.value)
}
function hanten() {
  result.value = new Function("return " + result.value*-1)();
}
function clearText() {
  result.value = '';
}