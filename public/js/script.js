"use strict";const modal=document.querySelector("[data-modal]"),modalCloseBtn=document.querySelector("[data-modal-close]"),modalCloseOverlay=document.querySelector("[data-modal-overlay]"),modalCloseFunc=function(){modal.classList.add("closed")};modalCloseOverlay.addEventListener("click",modalCloseFunc),modalCloseBtn.addEventListener("click",modalCloseFunc);const notificationToast=document.querySelector("[data-toast]"),toastCloseBtn=document.querySelector("[data-toast-close]");toastCloseBtn.addEventListener("click",function(){notificationToast.classList.add("closed")});const mobileMenuOpenBtn=document.querySelectorAll("[data-mobile-menu-open-btn]"),mobileMenu=document.querySelectorAll("[data-mobile-menu]"),mobileMenuCloseBtn=document.querySelectorAll("[data-mobile-menu-close-btn]"),overlay=document.querySelector("[data-overlay]");for(let e=0;e<mobileMenuOpenBtn.length;e++){const t=function(){mobileMenu[e].classList.remove("active"),overlay.classList.remove("active")};mobileMenuOpenBtn[e].addEventListener("click",function(){mobileMenu[e].classList.add("active"),overlay.classList.add("active")}),mobileMenuCloseBtn[e].addEventListener("click",t),overlay.addEventListener("click",t)}const accordionBtn=document.querySelectorAll("[data-accordion-btn]"),accordion=document.querySelectorAll("[data-accordion]");for(let e=0;e<accordionBtn.length;e++)accordionBtn[e].addEventListener("click",function(){const e=this.nextElementSibling.classList.contains("active");for(let t=0;t<accordion.length&&!e;t++)accordion[t].classList.contains("active")&&(accordion[t].classList.remove("active"),accordionBtn[t].classList.remove("active"));this.nextElementSibling.classList.toggle("active"),this.classList.toggle("active")});var swiper=new Swiper(".team-slider",{loop:!0,grabCursor:!0,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:1},768:{slidesPerView:2},991:{slidesPerView:3}},autoplay:{delay:2500,disableOnInteraction:!1}});swiper=new Swiper(".vehicles-slider",{grabCursor:!0,centeredSlides:!0,spaceBetween:20,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{0:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:3}}}),swiper=new Swiper(".products-slider",{loop:!0,grabCursor:!0,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:1},550:{slidesPerView:2},850:{slidesPerView:3},1200:{slidesPerView:4}}});