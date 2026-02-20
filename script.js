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

    // ZOOM LUPA
    const img = document.getElementById("imagenPrincipal");
    const lupa = document.getElementById("lupa");

    if (img && lupa) {
        zoomEffect(img, lupa);
    }

    function zoomEffect(img, lupa) {

        // CONFIGURACIÓN INICIAL
        lupa.style.backgroundImage = "url('" + img.src + "')";
        lupa.style.backgroundRepeat = "no-repeat";
        lupa.style.backgroundSize = (img.width * 2) + "px " + (img.height * 2) + "px";
        lupa.style.opacity = "0";
        lupa.style.pointerEvents = "none"; // 🔥 evita el parpadeo

        img.addEventListener("mousemove", moveLupa);

        img.addEventListener("mouseenter", () => {
            lupa.style.opacity = "1";
        });

        img.addEventListener("mouseleave", () => {
            lupa.style.opacity = "0";
        });

        function moveLupa(e) {
            const rect = img.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const lupaWidth = lupa.offsetWidth;
            const lupaHeight = lupa.offsetHeight;

            lupa.style.left = (x - lupaWidth / 2) + "px";
            lupa.style.top = (y - lupaHeight / 2) + "px";

            lupa.style.backgroundPosition =
                "-" + (x * 2 - lupaWidth / 2) + "px -" +
                (y * 2 - lupaHeight / 2) + "px";
        }
    }

});