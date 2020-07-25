window.onload = function() {
  if(localStorage.length === 0) {
    document.body.style.backgroundColor = 'lightgray';
    document.body.style.color = 'black';
    document.body.style.fontSize = '12px';
  } else {
    document.body.style.backgroundColor = localStorage.getItem('background-color')
    document.body.style.color = localStorage.getItem('text-color');
    document.body.style.fontSize = localStorage.getItem('font-size');
  }
}
/*Alterar a cor do background da página*/
var bkgColor = document.getElementById('bkgColor').value;
var body = document.querySelector('body');
var btnColor = document.getElementById('btnColor');
btnColor.addEventListener('click', changeBackgroundColor);
function changeBackgroundColor() {
  body.style.backgroundColor = bkgColor;
  localStorage.setItem('background-color', bkgColor);
}
/*Alterar a cor do texto*/
var txtColor = document.getElementById('txtColor').value;
var btnColorText = document.getElementById('btnColorText');
btnColorText.addEventListener('click', changeTextColor);
function changeTextColor() {
  document.body.style.color = txtColor;
  localStorage.setItem('text-color', txtColor);
}
/*Alterar tamanho da fonte*/
var sizeFont = document.getElementById('sizeFont').value;
var btnSizeFont = document.getElementById('btnSizeFont');
btnSizeFont.addEventListener('click', changeSizeFont);
function changeSizeFont() {
  document.body.style.fontSize = sizeFont;
  localStorage.setItem('font-size', sizeFont);
}