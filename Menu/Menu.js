//click on the hamburger, and menu drops down.  

const hamburger = document.querySelector('.menu-button');

const menu = document.querySelector('.menu');

console.log(menu);

function toggleMenu() {
//    menu.style.display = 'block';
    menu.classList.toggle('menu--open');
}

hamburger.addEventListener('click',() => toggleMenu());
























//const toggleMenu = () => {
//  // Toggle the "menu--open" class on your menu refence. 
//}
//
//// Start Here: Create a reference to the ".menu" class
//const menu;
//// create a reference to the ".menu-button" class
//const menuButton;
//// Using your menuButton reference, add a click handler that calls toggleMenu
