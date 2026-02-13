// Get navbar and menu icon
const navbar = document.getElementById("myNavbar");
const menuIcon = document.getElementById("menuIcon");

// Toggle menu when hamburger is clicked
menuIcon.addEventListener("click", () => {
  if (navbar.className === "navbar") {
    navbar.className += " responsive";
  } else {
    navbar.className = "navbar";
  }
});
