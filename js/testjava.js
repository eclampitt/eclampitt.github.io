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

    btnlinearray.forEach((array) => {
      array.style.backgroundColor = 'var(--darkfont-bg)';
    });  
    } 
  else {
    menuBtn.classList.remove("close");
    sidemenu.style.display = "none"
    body.style.overflow = "auto";
    btnlinearray.forEach((array) => {
      array.style.backgroundColor = 'var(--darkfont-bg)';
    });  
    }
  }

// Closes Mobile Menu after resizing screen
document.addEventListener('resize', hide);

function hide() {
  menuBtn.classList.remove("close");
  sidemenu.style.display = "none"
  };

/************************************
Section 2: Dropdown Menu
************************************/
/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
const droptop = document.querySelectorAll(".droptop");
const droptoparray = Array.from(droptop);
const carat = document.querySelectorAll(".carat");
const caratarray = Array.from(carat);


function droptoggle() {
    //  can also do a for loop instead of a .forEach
    //  for (let i = 0; i < droptop.length; i++) {droptop[i].classList.remove('show');
    droptoparray.forEach((array) => {
      array.classList.toggle("show");
    });
    caratarray.forEach((array) => {
      array.classList.toggle("fa-angle-up");
    });

    nav.style.backgroundColor = 'var(--lightfont-bg)';
    nav.style.color = 'var(--darkfont-bg)';
    nav.style.transition  = "all .25s";
    nav.style.boxShadow = '0px 2px 3px 1px rgba(0,0,0,0.2)';
};

// Close Top Nav dropdown if the user clicks outside of it
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
Section 4: Button Scroll to top

//https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
************************************/
//Get the button and Nav info
var mybutton = document.getElementById("totop");
const nav = document.querySelectorAll('nav')[0];
const btnline = document.querySelectorAll('.btn-line');
const btnlinearray = Array.from(btnline);



// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    totop.style.display = "block";
    nav.style.backgroundColor = 'var(--lightfont-bg)';
    nav.style.color = 'var(--darkfont-bg)';
    nav.style.transition  = "all .25s";
    nav.style.boxShadow = '0px 2px 3px 1px rgba(0,0,0,0.2)';   
    btnlinearray.forEach((array) => {
      array.style.backgroundColor = 'var(--darkfont-bg)';
    });  
    
  } else {
    totop.style.display = "none";
    nav.style.transition  = "all .25s";
    nav.style.boxShadow = 'none';
    nav.style.backgroundColor = 'transparent';
    nav.style.color = 'var(--darkfont-bg)';
    btnlinearray.forEach((array) => {
      array.style.backgroundColor = 'var(--darkfont-bg)';
    });  
    
  }
}



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/************************************
Section 5: Test JS
https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
*Delete if Not Working*
************************************/


/************************************
Section 5: Test JS - Process Load container

*Delete if Not Working*
************************************/

const arrowl = document.getElementById("arrow-left");
const arrowricon = document.getElementById("arrow-right-icon");
const arrowlicon = document.getElementById("arrow-left-icon");
const arrowr = document.getElementById("arrow-right");

const processheader = document.getElementsByClassName("process-header");
const processdescription = document.getElementsByClassName("process-description");

arrowr.addEventListener('click', addcount);
arrowl.addEventListener('click', subcount);


let count = 0;

function addcount() {
  count ++;
  arrows();
}

function subcount() {
  count --;
  arrows();
}

function arrows() {
  if (count ===0) {
    arrowl.style.display= "none";
    processheader[0].innerHTML = 'Our Process';
    processdescription[0].innerHTML = "You maybe wondering what happens after you've decided to partner with us? Our process may seem simple but a lot of work happens behind the scenes to make your dream website a reality. To sum it up we typically follow a 4 step process: Consultation, Design, Framework, Testing, and Launch.";
    arrowricon.classList.add('r-slide');
  }
  else if (count ===1) {
    arrowricon.classList.remove('r-slide');
    arrowl.style.display= "initial";
    arrowr.style.display= "initial";
    processheader[0].innerHTML = "Consultation";
    processdescription[0].innerHTML = "During the consultation, we work on introducing a problem-solving mindset with our clients and ask questions like \"What goals do you want your website to achieve?\". This time is used to better understand your needs and wants for a website. ";
  }
  else if (count ===2) {
    arrowl.style.display= "initial";
    arrowr.style.display= "initial";
    processheader[0].innerHTML = "Framework";
    processdescription[0].innerHTML = "Once we have a better understanding of your goals, we can then transition to design of the site. The design process will include discussing overall branding as well as look and feel of your website.";
  }
  else if (count === 3) {
    arrowl.style.display= "initial";
    arrowr.style.display= "initial";
    processheader[0].innerHTML = "Design";
    processdescription[0].innerHTML = "When the framework is approved we begin building the site from the ground up. This part of process is where all the heavy lifting happens. The design process will take the longest to complete.";
    }
  else if (count === 4) {
    arrowl.style.display= "initial";
    arrowr.style.display= "initial";
    processheader[0].innerHTML = "Testing";
    processdescription[0].innerHTML = "After designing the site with all the discussed requirments we launch a demo for our clients to test. During this time our clients take their sites for a test drive and provide us with feedback on changes they would like to make before the launch.";
    arrowlicon.classList.remove('l-slide');
    }
  else if (count === 5) {
    arrowl.style.display= "initial";
    arrowr.style.display= "none";
    processheader[0].innerHTML = "Launch";
    processdescription[0].innerHTML = "The last step in our process is the launch! After running through the test site and completing any revisions, it's time to launch your new site for everyone to enjoy!";
    arrowlicon.classList.add('l-slide');
    }

}

/************************************
Section 5: Test JS - Benefits
************************************/

const custom = document.getElementById("custom");
const template = document.getElementById("template");

const benfexpl = document.getElementsByClassName("benefit-explanation");
const benfitem = document.getElementsByClassName("benefit-items");

const ben1 = document.getElementsByClassName("ben1");
const ben2 = document.getElementsByClassName("ben2");
const ben3 = document.getElementsByClassName("ben3");
const ben4 = document.getElementsByClassName("ben4");
const ben5 = document.getElementsByClassName("ben5");

const check = document.querySelectorAll(".check");
const checkarray = Array.from(check);

custom.addEventListener('click', customdescr);
template.addEventListener('click', templatedescr);

function customdescr() {
    benfexpl[0].innerHTML = 'A custom website is built completely from scratch using code. Your web developer will work with you to create a truly unique website that addresses the specific needs of your business and provides an exceptional user experience for your customers. You maintain control over every aspect of the design process in order to ensure the finished product becomes a powerful tool you can use to grow your business.';
    ben1[0].innerHTML = "Conveys your brand's unique value";
    ben2[0].innerHTML = 'Improves search engine results';
    ben3[0].innerHTML = 'Provides a better user experience';
    ben4[0].innerHTML = 'Allows for easy scalability';
    ben5[0].innerHTML = 'Creates a more professional appearance';
    checkarray.forEach((array) => {
      array.classList.add("fa-check");
      array.style.color='var(--bluefont-bg)'
      array.classList.remove("fa-xmark");
      array.style.transition  = "all .5s";
    });
  }
function templatedescr() {
  benfexpl[0].innerHTML = 'A templated website provides you with a predesigned site based off of a specific template. You will have the ability to add your own content and images to the website, but you will be very limited in terms of the adjustments you can make to the design features of the site, such as color, navigation, and other elements that are important for delivering an excellent user experience.';
  ben1[0].innerHTML = 'Design Limitations';
  ben2[0].innerHTML = 'No SEO';
  ben3[0].innerHTML = 'Lack of Support';
  ben4[0].innerHTML = 'Prone to Being Hacked';
  ben5[0].innerHTML = 'Less Control Over User Experience (UX)';
  checkarray.forEach((array) => {
    array.style.transition  = "all .5s";
    array.classList.add("fa-xmark");
    array.style.color='red'
    array.classList.remove("fa-check");
  });
}



  /************************************
Section 5: Test JS - typing

*Delete if Not Working*
************************************/



//https://codepen.io/patriciamolnar/pen/jOMjePz

//https://codepen.io/psdr03/pen/exMPyY
//https://codepen.io/zd12t4nt/pen/mdBYNza

 //https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
 //window.addEventListener('scroll', reveal)
 //let relPoint = 150;
 //reveal();

 //function reveal() {
  
  // let box = document.getElementsByClassName('box-hidden')
  // for (let i = 0 ; box.length; i++) {
   //  var windowheight = window.innerHeight;
  //   var boxTop = box[i].getBoundingClientRect().top;
  //   var boxBottom = box[i].getBoundingClientRect().bottom;
   //  if (boxTop < windowheight - relPoint) {
   //    box[i].classList.add('box')
   //  } else {
    //   box[i].classList.remove('box')
   //  }
  // }
 //}

