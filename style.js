"use strict";

// var docWidth = document.documentElement.offsetWidth;

// [].forEach.call(
//   document.querySelectorAll('*'),
//   function(el) {
//     if (el.offsetWidth > docWidth) {
//       console.log(el);
//     }
//   }
// );  

// (function (d) {
//   var w = d.documentElement.offsetWidth,
//       t = d.createTreeWalker(d.body, NodeFilter.SHOW_ELEMENT),
//       b;
//   while (t.nextNode()) {
//       b = t.currentNode.getBoundingClientRect();
//       if (b.right > w || b.left < 0) {
//           t.currentNode.style.setProperty('outline', '1px dotted red', 'important');
//           console.log(t.currentNode);
//       }
//   };
// }(document));

// navbar toggler

// document.querySelector('.navbar-link-toggle').addEventListener('click', function(){
//     console.log("I am the navbar toggler");

//     var x = document.querySelector('.navbar');
//     if (x.style.display == 'none') {
//         x.style.display = 'flex';
//     } else {
//         x.style.display = 'none';
//     }

// });

document.querySelector('.navbar-link-toggle').addEventListener('click',function(){
    document.querySelector('.navbar').classList.toggle('navbar-toggler');
});



const homeactive = document.querySelector('.home-link');
homeactive.classList.contains('active-link');
const featureactive = document.querySelector('.feature-link');
featureactive.classList.contains('active-link');
const portfolioactive = document.querySelector('.portfolio-link');
portfolioactive.classList.contains('active-link');
const blogactive = document.querySelector('.blog-link');
blogactive.classList.contains('active-link');
const contactctive = document.querySelector('.contact-link');
contactctive.classList.contains('active-link');
const purchaseactive = document.querySelector('.purchase-link');
purchaseactive.classList.contains('active-link');
const searchactive = document.querySelector('.search-link');
searchactive.classList.contains('active-link');

// creating classlist const to add active class to the links

// click on navbar items
const yellowheader = document.querySelector('.dropnav-title');
document.querySelector('.feature-link').addEventListener('click',function(){
    const innerhtml = document.querySelector('.home-link').textContent;
    yellowheader.textContent = "Pricing Table";
    document.querySelector('.bg-yellow').style.display = 'block';

    // adding active class to the links and removing from other
    featureactive.classList.add('active-link');
    homeactive.classList.remove('active-link');
    portfolioactive.classList.remove('active-link');
    blogactive.classList.remove('active-link');
    contactctive.classList.remove('active-link');
    purchaseactive.classList.remove('active-link');
   
})
document.querySelector('.home-link').addEventListener('click',function(){
    document.querySelector('.bg-yellow').style.display = 'none';
    homeactive.classList.add('active-link');

      // adding active class to the links and removing from other
      featureactive.classList.remove('active-link');
      homeactive.classList.add('active-link');
      portfolioactive.classList.remove('active-link');
      blogactive.classList.remove('active-link');
      contactctive.classList.remove('active-link');
      purchaseactive.classList.remove('active-link');
})
document.querySelector('.portfolio-link').addEventListener('click',function(){
    const innerhtml = document.querySelector('.home-link').textContent;
    yellowheader.textContent = "Portfolio";
    document.querySelector('.bg-yellow').style.padding = '30px';
    document.querySelector('.bg-yellow').style.display = 'block';

      // adding active class to the links and removing from other
      featureactive.classList.remove('active-link');
      homeactive.classList.remove('active-link');
      portfolioactive.classList.add('active-link');
      blogactive.classList.remove('active-link');
      contactctive.classList.remove('active-link');
      purchaseactive.classList.remove('active-link');
})
document.querySelector('.blog-link').addEventListener('click',function(){
    const innerhtml = document.querySelector('.home-link').textContent;
    yellowheader.textContent = "Blog";
    document.querySelector('.bg-yellow').style.padding = '30px';
    document.querySelector('.bg-yellow').style.display = 'block';

      // adding active class to the links and removing from other
      featureactive.classList.remove('active-link');
      homeactive.classList.remove('active-link');
      portfolioactive.classList.remove('active-link');
      blogactive.classList.add('active-link');
      contactctive.classList.remove('active-link');
      purchaseactive.classList.remove('active-link');
})
document.querySelector('.contact-link').addEventListener('click',function(){
    const innerhtml = document.querySelector('.home-link').textContent;
    yellowheader.textContent = "Contact";
    document.querySelector('.bg-yellow').style.padding = '30px';
    document.querySelector('.bg-yellow').style.display = 'block';

      // adding active class to the links and removing from other
      featureactive.classList.remove('active-link');
      homeactive.classList.remove('active-link');
      portfolioactive.classList.remove('active-link');
      blogactive.classList.remove('active-link');
      contactctive.classList.add('active-link');
      purchaseactive.classList.remove('active-link');

    });



document.querySelector('.purchase-link').addEventListener('click',function(){
    const innerhtml = document.querySelector('.home-link').textContent;
    yellowheader.textContent = "Purchase";
    document.querySelector('.bg-yellow').style.padding = '30px';
    document.querySelector('.bg-yellow').style.display = 'block';

    
      // adding active class to the links and removing from other
      featureactive.classList.remove('active-link');
      homeactive.classList.remove('active-link');
      portfolioactive.classList.remove('active-link');
      blogactive.classList.remove('active-link');
      contactctive.classList.remove('active-link');
      purchaseactive.classList.add('active-link');
  

})

// document.querySelector('.search-icon').addEventListener('click',function(){
    
   
   
//     document.querySelector('.bg-yellow').style.display = 'block';
//      document.querySelector('.dropnav-title').textContent == " ";
//     document.querySelector('.search-box-container').style.display = 'block';

    
// })


const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");
const card3 = document.querySelector(".card-3");
const card4 = document.querySelector(".card-4");


document.querySelector('.card-1').addEventListener('mouseover',function(){

        document.querySelector('.card-1-title').classList.add('toggle-yellow');
        document.querySelector('.card-1-btn').classList.add('toggle-yellow');
        document.querySelector('.card-1-price').classList.add('toggle-bg');
        document.querySelector('.card-1-body').classList.add('toggle-body-bg');
        document.querySelector('.card-spec').classList.add('card-spec-2');
        document.querySelector('.card-5-title').classList.add('toggle-yellow');
        document.querySelector('.card-5-btn').classList.add('toggle-yellow');
        

})
document.querySelector('.card-1').addEventListener('mouseout',function(){

    document.querySelector('.card-1-title').classList.remove('toggle-yellow');
    document.querySelector('.card-1-btn').classList.remove('toggle-yellow');
    document.querySelector('.card-1-price').classList.remove('toggle-bg');
    document.querySelector('.card-1-body').classList.remove('toggle-body-bg');
    document.querySelector('.card-5-title').classList.remove('toggle-yellow');
    document.querySelector('.card-5-btn').classList.remove('toggle-yellow');

})

document.querySelector('.card-2').addEventListener('mouseover',function(){

    document.querySelector('.card-2-title').classList.add('toggle-yellow');
    document.querySelector('.card-2-btn').classList.add('toggle-yellow');
    document.querySelector('.card-2-price').classList.add('toggle-bg');
    document.querySelector('.card-2-body').classList.add('toggle-body-bg');
    document.querySelector('.card-6-title').classList.add('toggle-yellow');
        document.querySelector('.card-6-btn').classList.add('toggle-yellow');
    

})
document.querySelector('.card-2').addEventListener('mouseout',function(){

document.querySelector('.card-2-title').classList.remove('toggle-yellow');
document.querySelector('.card-2-btn').classList.remove('toggle-yellow');
document.querySelector('.card-2-price').classList.remove('toggle-bg');
document.querySelector('.card-2-body').classList.remove('toggle-body-bg');
document.querySelector('.card-6-title').classList.remove('toggle-yellow');
document.querySelector('.card-6-btn').classList.remove('toggle-yellow');


})


document.querySelector('.card-3').addEventListener('mouseover',function(){

    document.querySelector('.card-3-title').classList.add('toggle-yellow');
    document.querySelector('.card-3-btn').classList.add('toggle-yellow');
    document.querySelector('.card-3-price').classList.add('toggle-bg');
    document.querySelector('.card-3-body').classList.add('toggle-body-bg');
    document.querySelector('.card-7-title').classList.add('toggle-yellow');
    document.querySelector('.card-7-btn').classList.add('toggle-yellow');
    

})
document.querySelector('.card-3').addEventListener('mouseout',function(){

document.querySelector('.card-3-title').classList.remove('toggle-yellow');
document.querySelector('.card-3-btn').classList.remove('toggle-yellow');
document.querySelector('.card-3-price').classList.remove('toggle-bg');
document.querySelector('.card-3-body').classList.remove('toggle-body-bg');
document.querySelector('.card-7-title').classList.remove('toggle-yellow');
document.querySelector('.card-7-btn').classList.remove('toggle-yellow');



})

document.querySelector('.card-4').addEventListener('mouseover',function(){

    document.querySelector('.card-4-title').classList.add('toggle-yellow');
    document.querySelector('.card-4-btn').classList.add('toggle-yellow');
    document.querySelector('.card-4-price').classList.add('toggle-bg');
    document.querySelector('.card-4-body').classList.add('toggle-body-bg');
    document.querySelector('.card-8-title').classList.add('toggle-yellow');
    document.querySelector('.card-8-btn').classList.add('toggle-yellow');

})
document.querySelector('.card-4').addEventListener('mouseout',function(){

document.querySelector('.card-4-title').classList.remove('toggle-yellow');
document.querySelector('.card-4-btn').classList.remove('toggle-yellow');
document.querySelector('.card-4-price').classList.remove('toggle-bg');
document.querySelector('.card-4-body').classList.remove('toggle-body-bg');
document.querySelector('.card-8-title').classList.remove('toggle-yellow');
document.querySelector('.card-8-btn').classList.remove('toggle-yellow');



})