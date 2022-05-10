
let menu = document.querySelector('#menu-bar');
let nav = document.querySelector('.nav');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
}


let btn_ban_than = document.getElementById('btn-dk_ban_than');
let btn_nguoi_than = document.getElementById('btn-dk_nguoi_than');

const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('form3');
const form4 = document.getElementById('form4');
//Nhấn nút Radio để hiện form tương ứng
btn_ban_than.addEventListener('click', () => {
    
    
      form1.style.display = 'block';
    
      progress.style.width = "110px";
      form2.style.display = 'none';
    
});
btn_nguoi_than.addEventListener('click', () => {
    
    
      form2.style.display = 'block';
    
      progress.style.width = "110px";
      form1.style.display = 'none';
      
});
// Load Page để hiện form 1
function LoadPage () {
  form1.style.display = 'block';
  form2.style.display = 'none';
  form3.style.display = 'none';
  form4.style.display = 'none';
  progress.style.width = "110px";
}
window.onload = LoadPage;
// Khai báo các nút
var Next1 = document.getElementById("Next1");
var Next2 = document.getElementById("Next2");
var Next3 = document.getElementById("Next3");
var Submit = document.getElementById("Submit");
var Back1 = document.getElementById("Back1");
var Back2 = document.getElementById("Back2");
var progress = document.getElementById("progress");
// Các nút form 1 form 2
Next1.addEventListener('click', () => {
    
    
  form3.style.display = 'block';
  
  form1.style.display = 'none';
  progress.style.width = "220px";
  
});
Next2.addEventListener('click', () => {
    
    
  form3.style.display = 'block';
  
  form2.style.display = 'none';
  progress.style.width = "220px";
});

// Các nút form 3
//Quay lại
Back1.addEventListener('click', () => {
    if (btn_ban_than.checked){
      form1.style.display = 'block';
      progress.style.width = "110px";
      form3.style.display = 'none';
    }
    else {
      form2.style.display = 'block';
      progress.style.width = "110px";
      form3.style.display = 'none';
    }
  
  
});
//Next3
Next3.addEventListener('click', () => {
    
    
  form4.style.display = 'block';
  
  form3.style.display = 'none';
  progress.style.width = "360px";
});
//form 4
//Nút Back
Back2.addEventListener('click', () => {
    
    
  form3.style.display = 'block';
  progress.style.width = "220px";
  form4.style.display = 'none';
  
});
// Nút xác nhận
Submit.addEventListener('click', () => {
    
    
  form1.style.display = 'block';
  
  form4.style.display = 'none';
  
});