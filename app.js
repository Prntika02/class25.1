let btn = document.querySelector('.btn');
let btn2 = document.querySelector('.btn2');
let input = document.querySelector('.input');

btn2.addEventListener('click' ,function(){
 
   input.type = "text";
   btn2.style.display = "none";
   btn.style.display = "block";
});
btn.addEventListener('click' ,function(){

   input.type = "password";
   btn.style.display = "none";
   btn2.style.display = "block";
});
