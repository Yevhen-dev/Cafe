let idFotText = "";
for (let i = 1; i <= 20; i++) {
    const regDiv = document.createElement('div');
    regDiv.classList.add('draggable', 'reg__button');
    document.body.append(regDiv);

    const regP = document.createElement('p');
    regP.setAttribute('id', `demo_${i}`);
    regP.classList.add('text__name');
    regDiv.append(regP);

    const regImg = document.createElement('img');
    regImg.setAttribute('src', "../media/images/chair.png");
    regImg.setAttribute('id', `chair_${i}`);
    regImg.addEventListener('dblclick', function () {
        idFotText = +regImg.id.slice(6);
        show("block");
    });
    regDiv.append(regImg);
}

const windowDiv = document.createElement('div');
windowDiv.setAttribute('id', 'window');
windowDiv.classList.add('add__window');
document.body.append(windowDiv);

const closeImg = document.createElement('img');
closeImg.setAttribute('src', "../media/images/close.png");
closeImg.classList.add('close');
closeImg.addEventListener('click', () => {
    show("none");
});
windowDiv.append(closeImg);

const formDiv = document.createElement('div');
formDiv.classList.add('form');
formDiv.innerHTML = "<h2>Enter name</h2> ";
windowDiv.append(formDiv);

const nameInput = document.createElement('input');
nameInput.setAttribute('type', 'text');
nameInput.classList.add('input');
formDiv.append(nameInput);

const addNameInput = document.createElement('input');
addNameInput.setAttribute('type', 'submit');
addNameInput.setAttribute('value', 'Add name');
addNameInput.classList.add('input');
addNameInput.addEventListener('click', () => {
    nameInput.setAttribute('id', `myText_${idFotText}`);
    addName(idFotText);
    show("none");
    nameInput.value = '';
});
formDiv.append(addNameInput);

for (let i = 1; i <= 5; i++) {
    const tableAndChairDiv = document.createElement('div');
    tableAndChairDiv.classList.add('draggable', `table__position__${i}`);
    document.body.append(tableAndChairDiv);

    const tableDiv = document.createElement('div');
    tableDiv.classList.add('table');
    tableAndChairDiv.append(tableDiv);

    const numberTable  = document.createElement('p');
    numberTable.classList.add('number__table');
    numberTable.innerHTML = `${i}`;
    tableDiv.append(numberTable);

    for (let j = 1; j <= 4; j++) {
        const chairDiv = document.createElement('div');
        chairDiv.classList.add('free__place', `chair__${j}`);
        tableAndChairDiv.append(chairDiv);
    }
}

const closeAddNameDiv = document.createElement('div');
closeAddNameDiv.setAttribute('id', `gray`);
closeAddNameDiv.addEventListener('click', () => {
    show("none");
});
document.body.append(closeAddNameDiv);
