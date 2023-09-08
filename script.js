document.addEventListener('DOMContentLoaded', function() {
    let logo = document.querySelector("#CMlogo");
    logo.addEventListener("mouseover", function() {
        logo.src = "black_logo.png";

    })
    logo.addEventListener("mouseout", function() {
        logo.src = "Logo.png";
    })
    let navlinks = document.querySelectorAll(".nav-link");
                for (let i = 0; i < navlinks.length; i++) {
                    navlinks[i].addEventListener("mouseover", function() {
                        navlinks[i].style.backgroundColor = "#ffaec9";
                        navlinks[i].style.color = "black";

                    })
                    navlinks[i].addEventListener("mouseout", function() {
                        navlinks[i].style.backgroundColor = "#99d9ea";
                        navlinks[i].style.color = "#ffaec9";

                    })

                }
})