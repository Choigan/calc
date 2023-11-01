const btnsBox = document.getElementById('btnsBox');
const screenBox = document.getElementById('screenBox')
const historyContainer = document.getElementById('historyContainer');
const screenBasicValue = document.getElementById('screenBasicValue');

const btnList = {};
const btnValue = ['C', '+/-', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

const createBtn = (index) => {
    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.textContent = btnValue[index];
    btnsBox.append(btn);
    btnList['btn' + index] = btn
}

function renderBtn(count) {
    for (let index = 0; index < count; index++) {
        createBtn(index);
    }
}

renderBtn(19);

const keys = Object.keys(btnList);