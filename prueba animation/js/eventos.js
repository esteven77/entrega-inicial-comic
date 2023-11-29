let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/* activación del sol*/
var sol = document.querySelector('.sol')
sol.addEventListener('mouseover', mover)

function mover(){
    sol.classList.add('sol_move') 

}

/* activacion nubes */
var nubes = document.querySelector('.nubes')
nubes.addEventListener('mouseover', Mover)

function  Mover(){
    nubes.classList.add('nubes_mueve')
}  

/* activacion plantas */

var planta = document.querySelector('.planta')
planta.addEventListener('click', moviendo)

function moviendo(){
    planta.addEventListener('shake-little')
}






