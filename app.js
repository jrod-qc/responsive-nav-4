var btnContainer = document.getElementById("nav-list");

var NavBtn = btnContainer.getElementsByClassName("nav-btn");

for (var i = 0; i < NavBtn.length; i++) {
    NavBtn[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

var mobileBtnContainer = document.getElementById("mobile-nav-list");

var mobileNavBtn = mobileBtnContainer.getElementsByClassName("mobile-nav-btn");

for (var i = 0; i < mobileNavBtn.length; i++) {
    mobileNavBtn[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("mobile-active");
        current[0].className = current[0].className.replace(" mobile-active", "");
        this.className += " mobile-active";
    });
}



// $(document).ready(function() {
//     $('#nav-icon').click(function() {
//         $(this).toggleClass('open');
//     });
// });



function navMobile() {
    const navBtn = document.querySelector("#nav-icon");
    let menuOpen = false;

    navBtn.addEventListener("click", () => {
        if (!menuOpen) {
            navBtn.classList.add("open");
            menuOpen = true;
            $(".mobile-nav-container").css("left", "0");
        } else {
            navBtn.classList.remove("open");
            menuOpen = false;
            $(".mobile-nav-container").css("left", "-100%");
        }
    })
}
navMobile();