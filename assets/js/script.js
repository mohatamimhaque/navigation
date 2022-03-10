const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".main-nav");

hamburger_menu.addEventListener("click",() => {
    container.classList.toggle("active");
})


let list=document.querySelectorAll('.nav-link');
        function activeLink(){
            list.forEach((item)=>
            item.classList.remove('hovered'));
            this.classList.add('hovered');
        }
        list.forEach((item)=>
        item.addEventListener('mouseover',activeLink))






