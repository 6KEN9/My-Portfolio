'use strict'

{
 const next = document.getElementById('next');
 const prev = document.getElementById('prev');
 const worksUl = document.getElementById('works-ul');
 const slides = worksUl.children;
 let cureentIndex = 0;
 function moveSlides() {
  const slidesWidth = slides[0].getBoundingClientRect().width;
  worksUl.style.transform = `translateX(${-1 * slidesWidth * cureentIndex}px)`;
 }
 function  updateButtons() {
  prev.classList.remove('hidden');
  next.classList.remove('hidden');

   if (cureentIndex === 0) {
    prev.classList.add('hidden');
   }
   if (cureentIndex === slides.length - 1) {
    next.classList.add('hidden');
   }
 } 

 updateButtons();

 next.addEventListener('click' ,() => {
  cureentIndex ++;
  updateButtons();
  moveSlides();
});

 prev.addEventListener('click' ,() => {
  cureentIndex --;
  updateButtons();
  moveSlides();

 });
}