export class Preorder {
    constructor(){
        this.container = document.getElementsByClassName("main__container")[0];
        this.reservation = document.getElementById("reservation");
        this.order = {
            dishes: [],
            totalPrice: 0
        };
    }
    createList() {
        const list = document.createElement("ul");
        list.className = "main__preorder";
        this.container.appendChild(list);
        return list;
    }
    getMenu() {
        return fetch("https://api.npoint.io/c4e596b64ba2529ec25a")
            .then( (response) => response.json() )
    }
    createListAndItem() {
        this.getMenu()
            .then( (result) => {
                const container = this.createList();
                result.menu.forEach( (dish) => {
                    container.appendChild(this.createItem(dish))
                } );
                this.createTotalSum();
            } )
    }
    createItem(product) {
        const preorder = this.order;
        const item = document.createElement("li");
        item.className = "main__preorder__item";
        item.id = product.id;
        const name = document.createElement("span");
        name.className = "main__preorder__item-name";
        name.innerText = product.name;
        const description = document.createElement("span");
        description.className = "main__preorder__item-description";
        description.innerText = product.ingredients;
        const price = document.createElement("span");
        price.className = "main__preorder__item-price";
        price.innerText = `$${product.price}`;
        const count = document.createElement("label");
        count.className = "main__preorder__item-count";
        const input = document.createElement("input");
        input.type = "number";
        input.min = "0";
        input.value = "0";
        input.addEventListener("change", function countTotalSum() {
            const info = {};
            info.id = product.id;
            info.quantity = input.value;
            info.price = product.price;
            if(preorder.dishes.length === 0) {
                preorder.dishes.push(info);
            } else {
                if( !check() ) {
                    preorder.dishes.push(info)
                } else {
                    preorder.dishes.forEach( (item) => {
                        if(item.id === info.id) {
                            item.quantity = info.quantity
                        }
                    } )
                }
                function check() {
                    for( let item of preorder.dishes ) {
                        if( item.id === info.id ) {
                            return true;
                        }
                    }
                    return false
                }
            }
            preorder.totalPrice = 0;
            preorder.dishes.forEach( (dish) => {
                preorder.totalPrice += dish.quantity * dish.price;
            } );
            document.getElementsByClassName("main__total-count")[0].innerText = `$${preorder.totalPrice}`
        });
        count.appendChild(input);
        item.appendChild(name);
        item.appendChild(description);
        item.appendChild(price);
        item.appendChild(count);
        return item;
    }
    createTotalSum() {
        const blockSum = this.container.appendChild(document.createElement("div"));
        blockSum.className = "main__total";
        const title = blockSum.appendChild(document.createElement("span"));
        title.className = "main__total-title";
        title.innerText = "Total:";
        const count = blockSum.appendChild(document.createElement("span"));
        count.className = "main__total-count";
        count.innerText = `$0`
    }
    makeReservationPreorder() {
        const preorder = this.order;
        this.reservation.addEventListener("click", function reservationPreorderHandler(event) {
            event.preventDefault();
            return preorder
        })
    }
}

