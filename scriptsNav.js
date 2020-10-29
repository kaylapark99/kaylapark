function openNav() {
    document.getElementById("toggleNav").classList.add("overlay-open");
    document.getElementById("toggleNav").classList.remove("overlay-closed");
    document.getElementById("open-button").style.display = "none";
    document.getElementById("close-button").style.display = "inline";
}

function closeNav() {
    document.getElementById("open-button").style.display = "inline";
    document.getElementById("close-button").style.display = "none";
    document.getElementById("toggleNav").classList.remove("overlay-open");
    document.getElementById("toggleNav").classList.add("overlay-closed");
}

function checkCloseNav() {
    if (document.URL.includes("index.html")) {
        closeNav();
    }
}

function openArt() {
    window.location = 'art.html';
}

function openCode() {
    window.location = 'code.html';
}

function openAbout() {
    window.location = 'about.html';
}

function displayNav(item, x, opc) {
    item.style.transition = '0.9s';
    item.style.opacity = opc;
    if(window.innerWidth > 450) {
        item.innerHTML = x;
    }
}
