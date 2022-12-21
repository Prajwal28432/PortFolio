const menuHambarger = document.querySelector('.menu-hamburger');
const nav_block = document.querySelector('.nav-block');
menuHambarger.addEventListener('click',()=>{
    nav_block.classList.toggle('mobile-menu');
})

const scroll_up = document.querySelector('#scroll-up');
scroll_up.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    });
});
const view= document.querySelector('#view');
view.addEventListener('click',()=>{

})
