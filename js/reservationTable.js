let DragManager = new function () {

    let dragObject = {};

    let self = this;

    let currentTable = null;

    function onMouseDown(e) {

        let elem = e.target.closest('.draggable');
        if (!elem) return;

        dragObject.elem = elem;

        dragObject.downX = e.pageX;
        dragObject.downY = e.pageY;

        return false;
    }

    function onMouseMove(e) {
        if (!dragObject.elem) return;

        if (!dragObject.avatar) {
            let moveX = e.pageX - dragObject.downX;
            let moveY = e.pageY - dragObject.downY;

            if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
                return;
            }

            dragObject.avatar = createAvatar(e);
            if (!dragObject.avatar) {
                dragObject = {};
                return;
            }

            let coords = getCoords(dragObject.avatar);
            dragObject.shiftX = dragObject.downX - coords.left;
            dragObject.shiftY = dragObject.downY - coords.top;
            startDrag(e);
        }

        dragObject.avatar.style.left = e.pageX - dragObject.shiftX + 'px';
        dragObject.avatar.style.top = e.pageY - dragObject.shiftY + 'px';


        dragObject.avatar.hidden = true;
        let elemBelow = document.elementFromPoint(e.clientX, e.clientY);
        dragObject.avatar.hidden = false;

        if (!elemBelow) return;

        let tableBelow = elemBelow.closest('.table');

        if(dragObject.avatar.className === 'draggable reg__button'){
            stopDrag(e);
            return false;
        }

        if (tableBelow) {
            currentTable = tableBelow;

            if (currentTable) {

                let avatar = dragObject.elem;
                let old = {
                    parent: avatar.parentNode,
                    nextSibling: avatar.nextSibling,
                    position: avatar.position || '',
                    left: avatar.left || '',
                    top: avatar.top || '',
                    zIndex: avatar.zIndex || ''
                };

                old.parent.insertBefore(avatar, old.nextSibling);
                avatar.style.position = old.position;
                avatar.style.left = old.left;
                avatar.style.top = old.top;
                avatar.style.zIndex = old.zIndex;
            }
        }
        stopDrag(e);

        return false;
    }


    function onMouseUp(e) {
        if (dragObject.avatar) {
            finishDrag(e);
        }
        dragObject = {};
    }

    function finishDrag(e) {
        let dropElem = findFreePlace(e);

        if (!dropElem) {
            self.onDragCancel(dragObject);
        } else {
            self.onDragEnd(dragObject, dropElem);
        }
    }

    function createAvatar(e) {
        let avatar = dragObject.elem;

        avatar.rollback = function () {
        };
        return avatar;
    }

    function startDrag(e) {
        let avatar = dragObject.avatar;

        document.body.appendChild(avatar);
        avatar.style.zIndex = 1000;
        avatar.style.position = 'absolute';
    }

    function stopDrag(e) {
        let avatar = dragObject.avatar;

        document.body.appendChild(avatar);
        avatar.style.zIndex = 0;
        // avatar.style.position = 'fixed';
    }

    function findFreePlace(event) {
        dragObject.avatar.hidden = true;

        let elem = document.elementFromPoint(event.clientX, event.clientY);

        dragObject.avatar.hidden = false;

        return elem.closest('.free__place');
    }

    document.onmousemove = onMouseMove;
    document.onmouseup = onMouseUp;
    document.onmousedown = onMouseDown;

    this.onDragEnd = function (dragObject, dropElem) {
    };
    this.onDragCancel = function (dragObject) {
    };
};

function getCoords(elem) { // кроме IE8-
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}

DragManager.onDragCancel = function (dragObject) {
    dragObject.avatar.rollback();
};

DragManager.onDragEnd = function (dragObject, dropElem) {

    let coords = getCoords(dropElem);

    dragObject.elem.style.left = coords.left + "px";
    dragObject.elem.style.top = coords.top - 15 + "px";
};

function show(state) {
    document.getElementById('window').style.display = state;
    document.getElementById('gray').style.display = state;
}

function addName(i) {
    let x = document.getElementById(`myText_${i}`).value;
    document.getElementById(`demo_${i}`).innerHTML = x;
}
