// script.js


function toggleMobileMenu() {
    var nav = document.getElementById("navbar");
    if (nav.style.display === "block") {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";
    }
  }

  // Add an event listener to reset the navigation when the window is resized
  window.addEventListener("resize", function() {
    var nav = document.getElementById("navbar");
    var mobileMenuIcon = document.querySelector(".mobile-menu-icon");
    if (window.innerWidth > 768) {
      nav.classList.remove("collapsed");
      nav.style.display = "block";
      mobileMenuIcon.style.display = "none";
    } else {
      nav.classList.add("collapsed");
      nav.style.display = "none";
      mobileMenuIcon.style.display = "block";
    }
  });

  // Initialize the navigation state based on the initial window width
  window.addEventListener("load", function() {
    var nav = document.getElementById("navbar");
    var mobileMenuIcon = document.querySelector(".mobile-menu-icon");
    if (window.innerWidth > 768) {
      nav.style.display = "block";
      mobileMenuIcon.style.display = "none";
    } else {
      nav.classList.add("collapsed");
      nav.style.display = "none";
      mobileMenuIcon.style.display = "block";
    }
  });