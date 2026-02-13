document.addEventListener("DOMContentLoaded", function () {
    
    const menuIcon = document.getElementById("menuIcon");
    const navbar = document.getElementById("myNavbar");

    // Toggle mobile menu
    menuIcon.addEventListener("click", function () {
        navbar.classList.toggle("responsive");
        console.log("Menu clicked");
    });

    // Mobile dropdown click support
    const dropBtn = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");

    dropBtn.addEventListener("click", function (e) {
        // Prevent page jump
        e.preventDefault();

        // Toggle dropdown on mobile
        if (window.innerWidth <= 768) {
            dropdownContent.style.display =
                dropdownContent.style.display === "block" ? "none" : "block";
        }
    });

});

