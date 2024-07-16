

document.addEventListener("DOMContentLoaded", function () {
  var hamburgerIcon = document.getElementById("menu-icon");
  var xIcon = document.getElementById("close-icon");
  var navContainer = document.getElementById("side-bar");

  // This function handle the toggle of the Hamburger icon
  function toggleMenu() {
    navContainer.classList.toggle("active");
    hamburgerIcon.style.display =
      hamburgerIcon.style.display === "none" ? "unset" : "none";
    xIcon.style.display = xIcon.style.display === "none" ? "unset" : "none";
  }

  // This function will reset the icon to its original state when the Width size is greater than 475px
  function resetIcons() {
    if (window.innerWidth > 768) {
      navContainer.classList.remove("active");
      hamburgerIcon.style.display = "none";
      xIcon.style.display = "none";
    } else if (!navContainer.classList.contains("active")) {
      hamburgerIcon.style.display = "unset";
      xIcon.style.display = "none";
    }
  }

  //Add all functionality to the website
  if (hamburgerIcon && xIcon && navContainer) {
    hamburgerIcon.addEventListener("click", toggleMenu);
    xIcon.addEventListener("click", toggleMenu);
    window.addEventListener("resize", resetIcons);
    resetIcons(); // Initial check when the page loads
  } else {
    console.error(
      "Element(s) not found: hamburgerIcon, xIcon, or navContainer"
    );
  }
});
