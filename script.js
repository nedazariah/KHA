document.getElementById("enterText").onclick = function () {
    const enterText = document.getElementById("enterText");
    const dojoDoors = document.getElementById("dojoDoors");
    const doorAnimation = document.getElementById("doorAnimation");
    const leftPanel = document.getElementById("leftPanel");
    const rightPanel = document.getElementById("rightPanel");

    const snr = document.getElementById("snr");
    const sensei = document.getElementById("sensei");

    enterText.classList.add("hideText");
    setTimeout(function () {
        leftPanel.classList.add("slideOpen");
        rightPanel.classList.add("slideOpen");
    }, 450);

    setTimeout(function () {
        enterText.style.display = "none";
        dojoDoors.style.display = "none";
        doorAnimation.style.display = "none";
        snr.style.display = "flex";
        sensei.style.display = "flex";
    }, 1500);
};

document.addEventListener("DOMContentLoaded", () => {
    const fighters = document.querySelectorAll(".fighter");
    // True on phones/tablets where hover isn’t available
    const isTouchDevice = window.matchMedia("(hover: none) and (pointer: coarse)").matches;

    fighters.forEach((fighter) => {
        if (isTouchDevice) {
            // Mobile: tap to flip
            fighter.addEventListener("click", () => {
                // close siblings
                fighters.forEach((f) => {
                    if (f !== fighter) f.classList.remove("flipped");
                });
                fighter.classList.toggle("flipped");
            });
        }
        // Desktop: no click listener, hover handles flip
    });
});
