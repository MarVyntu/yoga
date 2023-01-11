(function () {
  const iconBurger = document.querySelector(".navbar__burger");
  const navigationsBody = document.querySelector(".navbar__menu");
  iconBurger.addEventListener("click", function (e) {
    document.body.classList.toggle("lock");
    iconBurger.classList.toggle("active");
    navigationsBody.classList.toggle("active");
  });

  const navLinks = document.querySelectorAll(".navbar__link");
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", (_) => {
      if (iconBurger.classList.contains("active")) {
        document.body.classList.remove("lock");
        iconBurger.classList.remove("active");
        navigationsBody.classList.remove("active");
      }
    });
  });
})();
