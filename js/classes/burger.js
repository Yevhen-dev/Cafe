export class Burger {
    constructor() {
        this.burgerBtn = document.getElementsByClassName("header__burger")[0];
        this.menu = document.getElementsByClassName("header__burger-menu")[0];
    }
    activeMenu() {
        const menu = this.menu;
        this.burgerBtn.addEventListener("click", function toggleClassActive() {
            this.children[0].classList.toggle("active");
            menu.classList.toggle("active");
        })
    }
}