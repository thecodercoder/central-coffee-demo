
// Add class function from Sitepoint
// https://www.sitepoint.com/add-remove-css-class-vanilla-js/
function addClass(selector, myClass) {

    // get all elements that match our selector
    elements = document.querySelectorAll(selector);
  
    // add class to all chosen elements
    for (var i=0; i<elements.length; i++) {
      elements[i].classList.add(myClass);
    }
}

// Remove class function from Sitepoint
// https://www.sitepoint.com/add-remove-css-class-vanilla-js/
function removeClass(selector, myClass) {

    // get all elements that match our selector
    elements = document.querySelectorAll(selector);
  
    // remove class from all chosen elements
    for (var i=0; i<elements.length; i++) {
      elements[i].classList.remove(myClass);
    }
}

// smooth scroll
var headerHeight = document.getElementsByClassName('header')[0].offsetHeight;
var scroll = new SmoothScroll('a[href*="#"]', {
    offset: headerHeight
});

// Hamburger menu
var btnOpen = document.getElementById('btnOpen');
btnOpen.onclick = function(){
    //console.log("open menu");
    addClass('.offcanvas', 'open');
    addClass('body', 'noscroll');
}

var btnClose = document.getElementById('btnClose');
var closeMenu = function(){
    removeClass('.offcanvas', 'open');
    removeClass('body', 'noscroll');
}
btnClose.onclick = function(){
    closeMenu();
};

// Close menu on click

var menuItems = document.getElementsByClassName('offcanvas__item');

for (var i = 0; i < menuItems.length; i++){
    menuItems[i].addEventListener('click', closeMenu, false);
}
