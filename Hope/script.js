
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if(target){
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
const amounts = document.querySelectorAll(".amount");
amounts.forEach(btn=>{
btn.addEventListener("click",()=>{
amounts.forEach(b=>b.classList.remove("active"));
btn.classList.add("active");
});
});

const images = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

images.forEach(img=>{
img.addEventListener("click", ()=>{
lightbox.style.display="flex";
lightboxImg.src = img.src;
});
});

lightbox.addEventListener("click", ()=>{
lightbox.style.display="none";
});

const amountButtons = document.querySelectorAll(".amount-btn");
const customAmount = document.getElementById("customAmount");
const donateButton = document.getElementById("donateButton");

let selectedAmount = 0;



amountButtons.forEach(button => {

button.addEventListener("click", () => {

amountButtons.forEach(btn => btn.classList.remove("active"));

button.classList.add("active");

selectedAmount = button.getAttribute("data-amount");

customAmount.value = "";

});

})

customAmount.addEventListener("input", () => {

amountButtons.forEach(btn => btn.classList.remove("active"));

selectedAmount = customAmount.value;

});


donateButton.addEventListener("click", () => {

if(selectedAmount <= 0){

alert("Please select or enter a donation amount.");

}else{

alert("Thank you for donating $" + selectedAmount);

}

});

/* Mobile navigation menu */
const menuToggle = document.querySelector(
  '.menu-toggle, .hamburger, .nav-toggle, .mobile-menu-btn, .mobile-menu-toggle'
);

const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');

    const isOpen = navLinks.classList.contains('active');

    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close the menu after clicking a navigation link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function () {
      navLinks.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    const icon = menuToggle.querySelector('i');

    // Toggle menu on click
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        
        // Change icon to X when open
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });
});




