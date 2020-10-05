export class Authorisation {
    constructor() {
        this.buttonIn = document.getElementById("signBtn");
        this.buttonOut = document.getElementById("signOutBtn");
        this.buttonInBurger = document.getElementById("signBtn-burger");
        this.buttonOutBurger = document.getElementById("signOutBtn-burger");
        this.shadow = document.getElementById("shadow");
        this.cancel = document.getElementById("cancel");
        this.continue = document.getElementById("continue");
        this.email = document.getElementsByClassName("shadow__elem__email-input")[0];
        this.pass = document.getElementsByClassName("shadow__elem__password-input")[0];
    }
    createAuthorisationWindow() {
        const shadow = this.shadow;
        if(document.body.clientWidth < 798) {
            this.buttonInBurger.addEventListener("click", function showShadowWindowBurgerHandler() {
                shadow.classList.remove("hidden")
            })
        } else {
            this.buttonIn.addEventListener("click", function showShadowWindowHandler() {
                shadow.classList.remove("hidden")
            })
        }
    }

    removeAuthorisationWindow() {
        const shadow = this.shadow;
        const email = this.email;
        const pass = this.pass;
        this.cancel.addEventListener("click", function removeWindowHandler() {
            shadow.classList.add("hidden");
            email.classList.remove("wrong");
            email.value = "";
            pass.classList.remove("wrong");
            pass.value = "";
        })

    }
    authorisationUser()  {
        const buttonIn = this.buttonIn;
        const buttonOut = this.buttonOut;
        const buttonInBurger = this.buttonInBurger;
        const buttonOutBurger = this.buttonOutBurger;
        const email = this.email;
        const pass = this.pass;
        const cancel = this.cancel;
        this.continue.addEventListener("click", async function checkUserHandler() {
            await fetch("https://api.npoint.io/148051677f5710b54131")
                .then( (response) => response.json() )
                    .then( (result) => {
                        result.users.forEach( (user) => {
                            if( user.email === email.value && user.password === Sha256.hash(pass.value)) {
                                localStorage.setItem("user", JSON.stringify(user));
                                buttonIn.classList.add("hidden");
                                buttonInBurger.classList.add("hidden");
                                buttonOut.classList.remove("hidden");
                                buttonOutBurger.classList.remove("hidden");
                                buttonOut.innerText += `, ${user.name}`;
                                buttonOutBurger.innerText += `, ${user.name}`;
                                cancel.click()
                            } else {
                                email.classList.add("wrong");
                                pass.classList.add("wrong");
                            }
                        } )
                    } )
        })
    }
    signOut() {
        const btnIn = this.buttonIn;
        const btnOut = this.buttonOut;
        const btnInBurger = this.buttonInBurger;
        const btnOutBurger = this.buttonOutBurger;
        const email = this.email;
        const pass = this.pass;
        btnOut.addEventListener("click", logOutHandler);
        btnOutBurger.addEventListener("click", logOutHandler);
        function logOutHandler() {
            btnOut.innerText = "sign out";
            btnOutBurger.innerText = "sign out";
            btnOut.classList.add("hidden");
            btnOutBurger.classList.add("hidden");
            btnIn.classList.remove("hidden");
            btnInBurger.classList.remove("hidden");
            localStorage.removeItem("user");
            email.classList.remove("wrong");
            pass.classList.remove("wrong");
        }
    }
    checkLocalStorage() {
        if(localStorage.getItem("user")) {
            const user = JSON.parse(localStorage.getItem("user"));
            this.buttonIn.classList.add("hidden");
            this.buttonInBurger.classList.add("hidden");
            this.buttonOut.classList.remove("hidden");
            this.buttonOutBurger.classList.remove("hidden");
            this.buttonOut.innerText += `, ${user.name}`;
            this.buttonOutBurger.innerText += `, ${user.name}`
            this.signOut();
        } else {
            this.createAuthorisationWindow();
            this.removeAuthorisationWindow();
            this.authorisationUser();
            this.signOut();
        }
    }
}
