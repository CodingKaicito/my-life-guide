(function () {
    const nav = document.querySelector('nav');
    let isScrolling;

    window.addEventListener("scroll", function () {
        clearTimeout(isScrolling);

        isScrolling = setTimeout(() => {
            const scrollPosition = document.documentElement.scrollTop || window.pageYOffset;
            if (scrollPosition > 20) {
                nav.classList.add("sticky");
            } else {
                nav.classList.remove("sticky");
            }
        }, 50); // Adjust the delay as needed
    });
})();