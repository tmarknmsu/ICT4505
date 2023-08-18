const open_item1 = document.getElementById('button_item1');
const open_item2 = document.getElementById('button_item2');
const open_item3 = document.getElementById('button_item3');
const open_item4 = document.getElementById('button_item4');
const open_item5 = document.getElementById('button_item5');
const open_item6 = document.getElementById('button_item6');
const open_item7 = document.getElementById('button_item7');

const closeModalBtn = document.getElementById('closeModalBtn');
const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');
const item4 = document.getElementById('item4');
const item5 = document.getElementById('item5');
const item6 = document.getElementById('item6');
const item7 = document.getElementById('item7');

const overlay = document.getElementById('overlay');

open_item1.addEventListener('click', () => {
    console.log("open1");
    item1.style.display = 'block';
  overlay.style.display = 'block';
});

open_item2.addEventListener('click', () => {
    console.log("open_item2");
    item2.style.display = 'block';
  overlay.style.display = 'block';
});

open_item3.addEventListener('click', () => {
    console.log("open_item3");
    item3.style.display = 'block';
  overlay.style.display = 'block';
});
open_item4.addEventListener('click', () => {
    console.log("open_item4");
    item4.style.display = 'block';
  overlay.style.display = 'block';
});
open_item5.addEventListener('click', () => {
    console.log("open_item5");
    item5.style.display = 'block';
  overlay.style.display = 'block';
});
open_item6.addEventListener('click', () => {
    console.log("open_item6");
    item6.style.display = 'block';
  overlay.style.display = 'block';
});
open_item7.addEventListener('click', () => {
    console.log("open_item7");
    item7.style.display = 'block';
  overlay.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
    item1.style.display = 'none';
    item2.style.display = 'none';
    item3.style.display = 'none';
    item4.style.display = 'none';
    item5.style.display = 'none';
    item6.style.display = 'none';
    item7.style.display = 'none';
  overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
    item1.style.display = 'none';
    item2.style.display = 'none';
    item3.style.display = 'none';
    item4.style.display = 'none';
    item5.style.display = 'none';
    item6.style.display = 'none';
    item7.style.display = 'none';
  overlay.style.display = 'none';
});