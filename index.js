
    const lune_boutton = document.getElementById('lune_btn');
    const soleil_boutton = document.getElementById('soleil_btn');
    const body = document.body;

    lune_boutton.addEventListener("click", () => {
        body.classList.add('light_mode');
        body.classList.remove('dark_mode');
        soleil_boutton.style.display = "block";
        lune_boutton.style.display = "none";
    });

    soleil_boutton.addEventListener("click", () => {
        body.classList.remove('light_mode');
        body.classList.add('dark_mode');
        soleil_boutton.style.display = "none";
        lune_boutton.style.display = "block";
    });
        /*menu_btn*/
    document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu_btn");
    const navCache = document.querySelector("nav.caché");

    menuBtn.addEventListener("click", () => {
        navCache.classList.toggle("active");
    });
});
