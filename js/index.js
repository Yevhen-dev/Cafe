import {Authorisation} from "./classes/authorisation.js";
import {Burger} from "./classes/burger.js";

const signInBtn = new Authorisation();
// signInBtn.createAuthorisationWindow();
// signInBtn.removeAuthorisationWindow();
// signInBtn.authorisationUser();
// signInBtn.signOut();
signInBtn.checkLocalStorage();

const burger = new Burger();
burger.activeMenu();
window.addEventListener("resize", function resizeHandler() {
    signInBtn.createAuthorisationWindow();
    burger.burgerBtn.children[0].classList.remove("active");
    burger.menu.classList.remove("active")
});
