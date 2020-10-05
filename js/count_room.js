let counter = 1;

left.addEventListener('click', function () {
    counter--;

    if(counter < 1)
        counter = 3;

    countRoom(counter);

});

right.addEventListener('click', function () {
    counter++;

    if(counter > 3) {
        counter = 1;
    }

    countRoom(counter);
});

function countRoom(i){
    if(i == 3){
        document.getElementById('first_room').style.display = "none";
        document.getElementById('second_room').style.display = "none";
        document.getElementById('third_room').style.display = "block";

        document.getElementById('first_room_window').style.display = "none";
        document.getElementById('second_room_window').style.display = "none";
        document.getElementById('third_room_window').style.display = "block";
    }
    if(i == 2){
        document.getElementById('first_room').style.display = "none";
        document.getElementById('second_room').style.display = "block";
        document.getElementById('third_room').style.display = "none";

        document.getElementById('first_room_window').style.display = "none";
        document.getElementById('second_room_window').style.display = "block";
        document.getElementById('third_room_window').style.display = "none";
    }
    if(i == 1) {
        document.getElementById('first_room').style.display = "block";
        document.getElementById('second_room').style.display = "none";
        document.getElementById('third_room').style.display = "none";

        document.getElementById('first_room_window').style.display = "block";
        document.getElementById('second_room_window').style.display = "none";
        document.getElementById('third_room_window').style.display = "none";
    }
}

