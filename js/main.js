/* fixed header */
document.addEventListener("scroll", function() {
    let header = document.querySelector(".fixed-header");
    let scrollTop = window.scrollY;

    if (scrollTop > 10) {
            header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
});

/* mobile menu */
document.addEventListener("DOMContentLoaded", function () {
    let menuIcon = document.getElementById("menu-icon");
    let mobileMenu = document.querySelector(".mobile-menu");

    menuIcon.addEventListener("click", function () {
        mobileMenu.style.display = (mobileMenu.style.display === "none" || mobileMenu.style.display === "") ? "block" : "none";
    });
});


/* slider */
$(document).ready(function(){
    $(".gallery-wrapper").slick({
      dots: false,
      arrows: true,
      slidesToShow: 4,
      responsive: [
          {
              breakpoint: 1400,
              settings: {
                  slidesToShow: 3
              }
          },
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 2.5
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2
              }
          },
          {
              breakpoint: 576,
              settings: {
                  slidesToShow: 1.5
              }
          }
      ],
      appendArrows: $(".gallery-slider-icons")
    }) 


    $(".free-positions").slick({
      dots: false,
      arrows: true,
      slidesToShow: 2, 
      appendArrows: $(".positions-slider-icons")
    }) 
});

/* faq accordion */
const accordionBtns = document.querySelectorAll(".accordion-btn");
let openAccordion = null; 

accordionBtns.forEach((accordion) => {
    accordion.onclick = function () {
        if (openAccordion && openAccordion !== this) {
            openAccordion.classList.remove("is-open");
            let openAccordionContent = openAccordion.nextElementSibling;
            openAccordionContent.style.maxHeight = null;
        }

        this.classList.toggle("is-open");

        let content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            openAccordion = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            openAccordion = this;
        }
    };
});