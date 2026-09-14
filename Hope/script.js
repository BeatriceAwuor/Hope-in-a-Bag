
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




