window.onload = function () {
  if (localStorage.length === 0) {
    document.body.style.backgroundColor = 'lightgray';
    document.body.style.color = 'black';
    document.body.style.fontSize = '12px';
    document.body.style.lineHeight = '1.5';
    document.body.style.fontFamily = 'comic-sans';
  } else {
    document.body.style.backgroundColor = localStorage.getItem('background-color')
    document.body.style.color = localStorage.getItem('text-color');
    document.body.style.fontSize = localStorage.getItem('font-size');
    document.body.style.lineHeight = localStorage.getItem('line-height');
    document.body.style.fontFamily = localStorage.getItem('font-family');
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
  //document.getElementById('bkgColor').value='';
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
/*Alterar espaçamento entre linhas*/
var spaceLine = document.getElementById('spaceLine').value;
var btnSpaceLine = document.getElementById('btnSpaceLine');
btnSpaceLine.addEventListener('click', changeSpaceLine);
function changeSpaceLine() {
  document.body.style.lineHeight = spaceLine;
  localStorage.setItem('line-height', spaceLine);
}
/*Alterar a fonte*/
var font = document.getElementById('changeFont').value;
var btnChangeFont = document.getElementById('btnChangeFont');
btnChangeFont.addEventListener('click', changeFont);
function changeFont() {
  document.body.style.fontFamily = font;
  localStorage.setItem('font-family', font);
}
/*Limpar predefinições*/
var btnClear = document.getElementById('btnClear');
btnClear.addEventListener('click', clear);
function clear() {
  document.body.style.backgroundColor = 'lightgray';
  document.body.style.color = 'black';
  document.body.style.fontSize = '12px';
  document.body.style.lineHeight = '1.5';
  document.body.style.fontFamily = 'comic-sans';
}