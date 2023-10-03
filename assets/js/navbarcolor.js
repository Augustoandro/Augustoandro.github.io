document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const section2 = document.getElementById('header'); // Change this to the appropriate section

    window.addEventListener('scroll', function() {
        const section2Offset = section2.getBoundingClientRect().top;

        if (section2Offset <= 0) {
            navbar.classList.add('black-navbar');
        } else {
            navbar.classList.remove('black-navbar');
        }
    });
});
