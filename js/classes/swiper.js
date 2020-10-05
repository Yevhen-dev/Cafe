let counter = 1;
export class Swiper {
    constructor () {
        this.firstRoom = document.getElementById("first_room");
        this.firstRoomWindow = document.getElementById("first_room_window");
        this.secondRoom = document.getElementById("second_room");
        this.secondRoomWindow = document.getElementById("second_room_window");
        this.thirdRoom = document.getElementById("third_room");
        this.thirdRoomWindow = document.getElementById("third_room_window");
        this.leftArrow = document.getElementById("left");
        this.rightArrow = document.getElementById("right");
    }
    countRoom(roomNumber) {
        if( roomNumber === 3 ) {
            this.firstRoom.display = "none";
            this.firstRoomWindow.display = "none";
            this.secondRoom.display = "none";
            this.secondRoomWindow.display = "none";
            this.thirdRoom.display = "block";
            this.thirdRoomWindow.display = "block";
        } else if( roomNumber === 2 ) {
            this.firstRoom.display = "none";
            this.firstRoomWindow.display = "none";
            this.secondRoom.display = "block";
            this.secondRoomWindow.display = "block";
            this.thirdRoom.display = "none";
            this.thirdRoomWindow.display = "none";
        } else {
            this.firstRoom.display = "block";
            this.firstRoomWindow.display = "block";
            this.secondRoom.display = "none";
            this.secondRoomWindow.display = "none";
            this.thirdRoom.display = "none";
            this.thirdRoomWindow.display = "none";
        }
    }
    swipeLeft() {
        const firstRoom = this.firstRoom;
        const firstRoomWindow = this.firstRoomWindow;
        const secondRoom = this.secondRoom;
        const secondRoomWindow = this.secondRoomWindow;
        const thirdRoom = this.thirdRoom;
        const thirdRoomWindow = this.thirdRoomWindow;
        this.leftArrow.addEventListener("click", function swipeLeftHandler () {
            counter--;
            if(counter < 1) {
                counter = 3;
            }
            if( counter === 3 ) {
                firstRoom.style.display = "none";
                firstRoomWindow.style.display = "none";
                secondRoom.style.display = "none";
                secondRoomWindow.style.display = "none";
                thirdRoom.style.display = "block";
                thirdRoomWindow.style.display = "block";
            } else if (counter === 2) {
                firstRoom.style.display = "none";
                firstRoomWindow.style.display = "none";
                secondRoom.style.display = "block";
                secondRoomWindow.style.display = "block";
                thirdRoom.style.display = "none";
                thirdRoomWindow.style.display = "none";
            } else {
                firstRoom.style.display = "block";
                firstRoomWindow.style.display = "block";
                secondRoom.style.display = "none";
                secondRoomWindow.style.display = "none";
                thirdRoom.style.display = "none";
                thirdRoomWindow.style.display = "none";
            }
        });
    }

    swipeRight() {
        const firstRoom = this.firstRoom;
        const firstRoomWindow = this.firstRoomWindow;
        const secondRoom = this.secondRoom;
        const secondRoomWindow = this.secondRoomWindow;
        const thirdRoom = this.thirdRoom;
        const thirdRoomWindow = this.thirdRoomWindow;
        this.rightArrow.addEventListener("click", function swipeRightHandler() {
            counter++;
            if(counter > 3) {
                counter = 1;
            }
            if( counter === 3 ) {
                firstRoom.style.display = "none";
                firstRoomWindow.style.display = "none";
                secondRoom.style.display = "none";
                secondRoomWindow.style.display = "none";
                thirdRoom.style.display = "block";
                thirdRoomWindow.style.display = "block";
            } else if (counter === 2) {
                firstRoom.style.display = "none";
                firstRoomWindow.style.display = "none";
                secondRoom.style.display = "block";
                secondRoomWindow.style.display = "block";
                thirdRoom.style.display = "none";
                thirdRoomWindow.style.display = "none";
            } else {
                firstRoom.style.display = "block";
                firstRoomWindow.style.display = "block";
                secondRoom.style.display = "none";
                secondRoomWindow.style.display = "none";
                thirdRoom.style.display = "none";
                thirdRoomWindow.style.display = "none";
            }
        })

    }



}