const navbarr = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function (){
        console.log(window.scrollY);
        if(this.window.scrollY>1){
            navbarr.classList.replace('bg-transparent', 'nav-color')
        } else if (this.window.scrollY <= 0) {
            navbarr.classList.replace('nav-color', 'bg-transparent')
        }
    });

var lastScrollTop = 0;
    navbar = document.getElementById('navbar');
window.addEventListener("scroll", function() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-80px";
    } else {
        // navbar.classList.replace('nav-color', 'bg-transparent');
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
})


