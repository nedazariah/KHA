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

document.querySelectorAll(".fighter").forEach((fighter) => {
    fighter.addEventListener("click", () => {
        // Close any other open fighter
        fighters.forEach((f) => {
            if (f !== fighter) {
                f.classList.remove("flipped");
            }
        });

        // Toggle the clicked one
        fighter.classList.toggle("flipped");
    });
});
