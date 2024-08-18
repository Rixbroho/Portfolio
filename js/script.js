// window.onscroll=function(){headerShadow()};
AOS.init({
    offset:280,
    duration:800,
 });


const a=document.querySelector('.menu-option');
function menu(){
    a.classList.toggle('off');
    document.querySelector('body').classList.toggle('stop');
}
