document.addEventListener("DOMContentLoaded", function () {

    // HEADER SCROLL
    window.addEventListener("scroll", function () {
        const header = document.getElementById("header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Solo activar zoom en desktop
    if (window.innerWidth > 768) {

        const img = document.getElementById("imagenPrincipal");
        const lupa = document.getElementById("lupa");

        if (img && lupa) {

            lupa.style.backgroundImage = "url('" + img.src + "')";
            lupa.style.backgroundRepeat = "no-repeat";
            lupa.style.backgroundSize = (img.width * 2) + "px " + (img.height * 2) + "px";

            img.addEventListener("mousemove", function(e) {

                const rect = img.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                lupa.style.left = (x - 60) + "px";
                lupa.style.top = (y - 60) + "px";
                lupa.style.opacity = "1";

                lupa.style.backgroundPosition =
                    "-" + (x * 2 - 60) + "px -" +
                    (y * 2 - 60) + "px";
            });

            img.addEventListener("mouseleave", function() {
                lupa.style.opacity = "0";
            });
        }
    }

});

document.getElementById("anio").textContent = new Date().getFullYear();