var nav = document.getElementById("navlink");

function showMenu() {
    nav.style.right = "0"

    nav.style.display = "flex"
}

function closeMenu() {
    nav.style.right = "-200px"
    nav.style.display = "none"

}