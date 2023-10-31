/**
* Utility function to calculate the current theme setting.
* Look for a local storage value.
* If found, fall back to system setting.
* If no local storage value, default to dark mode.
*/
function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  // Always default to dark mode for new users
  return "dark";
}

/**
* Utility function to update the button text and aria-label.
*/
function updateButton({ buttonEl, isDark }) {
  const sunIcon = buttonEl.querySelector(".fa-sun");
  const moonIcon = buttonEl.querySelector(".fa-moon");
  if (isDark) {
      sunIcon.style.display = "none"; // Hide the sun icon in dark mode
      moonIcon.style.display = "inline-block";
      buttonEl.setAttribute("aria-label", "Switch to light mode");
  } else {
      sunIcon.style.display = "inline-block";
      moonIcon.style.display = "none";
      buttonEl.setAttribute("aria-label", "Switch to dark mode");
  }
}


/**
* Utility function to update the theme setting on the html tag
*/
function updateThemeOnHtmlEl({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme);
}

/**
* On page load:
*/

/**
* 1. Grab what we need from the DOM and system settings on page load
*/
const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

/**
* 2. Work out the current site settings
*/
let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

/**
* 3. Update the theme setting and button text according to current settings
*/
updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
updateThemeOnHtmlEl({ theme: currentThemeSetting });

/**
* 4. Add an event listener to toggle the theme
*/
button.addEventListener("click", (event) => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  updateButton({ buttonEl: button, isDark: newTheme === "dark" });
  updateThemeOnHtmlEl({ theme: newTheme });

  currentThemeSetting = newTheme;
});


/**
* Contact button pop-up form
*/
$(function() {
  $('#contact').click(function() {
      $('#contactForm').fadeToggle().css('opacity', 1);
      $('.collapsebar').css('opacity', 1);
  });

  $(document).mouseup(function(e) {
      var container = $("#contactForm");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
          container.fadeOut();
          if ($(window).width() <= 768) {
              $('.collapsebar').css('opacity', 0.7);
          }
      }
  });
});

// self-executing function
(function() {
  if (window.localStorage.getItem('nav') === null) {
      window.localStorage.setItem('nav', 'none');
  }
  var x = document.getElementById("nav");
  x.style.display = window.localStorage.getItem('nav');
});

function myFunction() {
  var x = document.getElementById("nav");
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
  window.localStorage.setItem('nav', x.style.display);
}

document.addEventListener('DOMContentLoaded', function () {
  const iframes = document.querySelectorAll('iframe');

  function stopVideos() {
      iframes.forEach(function (iframe) {
          // Set the src attribute to an empty string to stop the video
          iframe.setAttribute('src', '');
      });
  }

  iframes.forEach(function (iframe) {
      iframe.addEventListener('click', function () {
          // Clicking on the iframe will stop the video
          stopVideos();
      });
  });
});








