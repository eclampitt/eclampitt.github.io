/************************************
Table of Contents
Section 1: Hamburger Menu
Section 2: Dropdown Menu
Section 4: Nav Background Transition
Section 4: Button Scroll to Top
Section 5: Main
Section 6: Footer
Section 7: Shapes
Section 8: Misc Code for testing
Section 9: Media Devices Content Styling
************************************/

/************************************
Section 1: Hamburger Menu
************************************/
const menuBtn = document.querySelector(".menu-btn");
const sidemenu = document.querySelector(".Side-Menu");
const topmenu = document.querySelector(".Top-Menu");
const body = document.querySelector("body");


menuBtn.addEventListener("click", MblMenuBtn);

function MblMenuBtn() {
  if (menuBtn.classList.contains("close") === false) {
    menuBtn.classList.add("close");
    sidemenu.style.display = "flex";
    body.style.overflow = "hidden"; // Removes scroll from side menu
    } 
  else {
    menuBtn.classList.remove("close");
    sidemenu.style.display = "none"
    body.style.overflow = "auto";
  }
}
// Closes Mobile Menu after resizing screen
document.addEventListener('resize', hide);

function hide() {
  menuBtn.classList.remove("close");
  sidemenu.style.display = "none"
  };

/************************************
Section 2: Close dropdown
************************************/

// Close dropdown if the user clicks outside of it
window.addEventListener('click', hidedropdown);

function hidedropdown(e) {
  if (!e.target.matches('.dropbtn')) {

  droptoparray.forEach((array) => {
    if (array.classList.contains('show') === true) {
      array.classList.remove('show');
    }
  });
  caratarray.forEach((array) => {
    array.classList.remove("fa-angle-up");
  });  
  }
};

// Close Top Nav dropdown if the user scrolls main page
window.addEventListener('scroll', hidedropdownscroll);
menuBtn.addEventListener("click", hidedropdownscroll);
window.addEventListener("resize", hidedropdownscroll);

function hidedropdownscroll() {
  for (let i = 0; i < carat.length; i++) {
    carat[i].classList.remove("fa-angle-up");
  }
  for (let i = 0; i < droptop.length; i++) {
    droptop[i].classList.remove('show');
  }
};


/************************************
Section 5: Filter Buttons
https://www.w3schools.com/howto/howto_js_filter_elements.asp
************************************/
