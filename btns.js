// Кнопка 9
btnList.btn16.onclick = () => {
    if (screenBasicValue.textContent == 0) { screenBasicValue.textContent = btnList.btn16.textContent; }
    else screenBasicValue.textContent += btnList.btn16.textContent;
}

// Кнопка 1
btnList.btn12.onclick = () => {
    if (screenBasicValue.textContent == 0) { screenBasicValue.textContent = btnList.btn12.textContent; }
    else screenBasicValue.textContent += btnList.btn12.textContent;
}

// Кнопка 2
btnList.btn13.onclick = () => {
    if (screenBasicValue.textContent == 0) { screenBasicValue.textContent = btnList.btn13.textContent; }
    else screenBasicValue.textContent += btnList.btn13.textContent;
}

// Кнопка 3
btnList.btn14.onclick = () => {
    if (screenBasicValue.textContent == 0) { screenBasicValue.textContent = btnList.btn14.textContent; }
    else screenBasicValue.textContent += btnList.btn14.textContent;
}

// Кнопка 4
btnList.btn8.onclick = () => {
    if (screenBasicValue.textContent == 0) { screenBasicValue.textContent = btnList.btn8.textContent; }
    else screenBasicValue.textContent += btnList.btn8.textContent;
}

// Кнопка 5
btnList.btn9.onclick = () => {
    if (screenBasicValue.textContent == 0) { screenBasicValue.textContent = btnList.btn9.textContent; }
    else screenBasicValue.textContent += btnList.btn9.textContent;
}

// Кнопка 6
btnList.btn10.onclick = () => {
    if (screenBasicValue.textContent == 0) { screenBasicValue.textContent = btnList.btn10.textContent; }
    else screenBasicValue.textContent += btnList.btn10.textContent;
}

// Кнопка 7
btnList.btn4.onclick = () => {
    if (screenBasicValue.textContent == 0) { screenBasicValue.textContent = btnList.btn4.textContent; }
    else screenBasicValue.textContent += btnList.btn4.textContent;
}

// Кнопка 8
btnList.btn5.onclick = () => {
    if (screenBasicValue.textContent == 0) { screenBasicValue.textContent = btnList.btn5.textContent; }
    else screenBasicValue.textContent += btnList.btn5.textContent;
}

// Кнопка 9
btnList.btn6.onclick = () => {
    if (screenBasicValue.textContent == 0) { screenBasicValue.textContent = btnList.btn6.textContent; }
    else screenBasicValue.textContent += btnList.btn6.textContent;
}

// ----------------------------------------------------------------------------------------------------------------

// Кнопка C
btnList.btn0.onclick = () => {
    screenBasicValue.textContent = 0;
}

// Кнопка ÷
btnList.btn3.onclick = () => {
    if (screenBasicValue.textContent[screenBasicValue.textContent.length - 1] === ' ') {
        screenBasicValue.textContent = screenBasicValue.textContent.slice(0, -2) + ` ${btnList.btn3.textContent} `
    }
    else screenBasicValue.textContent += ` ${btnList.btn3.textContent} `;
}

// Кнопка ×
btnList.btn7.onclick = () => {
    if (screenBasicValue.textContent[screenBasicValue.textContent.length - 1] === ' ') {
        screenBasicValue.textContent = screenBasicValue.textContent.slice(0, -2) + ` ${btnList.btn7.textContent} `
    }
    else screenBasicValue.textContent += ` ${btnList.btn7.textContent} `;
}

// Кнопка -
btnList.btn11.onclick = () => {
    if (screenBasicValue.textContent[screenBasicValue.textContent.length - 1] === ' ') {
        screenBasicValue.textContent = screenBasicValue.textContent.slice(0, -2) + ` ${btnList.btn11.textContent} `
    }
    else screenBasicValue.textContent += ` ${btnList.btn11.textContent} `;
}

// Кнопка +
btnList.btn15.onclick = () => {
    if (screenBasicValue.textContent[screenBasicValue.textContent.length - 1] === ' ') {
        screenBasicValue.textContent = screenBasicValue.textContent.slice(0, -2) + ` ${btnList.btn15.textContent} `
    }
    else screenBasicValue.textContent += ` ${btnList.btn15.textContent} `;
}

// Кнопка =
btnList.btn18.onclick = () => {
    if (screenBasicValue.textContent.includes('×')) {
        replacementMultiplication = screenBasicValue.textContent.replace(/×/g, '*');
        screenBasicValue.textContent = eval(replacementMultiplication);
    } else if (screenBasicValue.textContent.includes('÷')) {
        replacementDivision = screenBasicValue.textContent.replace(/÷/g, '/');
        screenBasicValue.textContent = eval(replacementDivision);
    } else screenBasicValue.textContent = eval(screenBasicValue.textContent);
}

// Кнопка +/-
btnList.btn1.onclick = () => {
    screenBasicValue.textContent = eval(screenBasicValue.textContent * -1)
}

// Кнопка .
btnList.btn17.onclick = () => {
    if (screenBasicValue.textContent[screenBasicValue.textContent.length - 1] === ' ') {
        screenBasicValue.textContent += '0' + btnList.btn17.textContent;
    }
    else screenBasicValue.textContent += btnList.btn17.textContent;
}

// Кнопка %
btnList.btn2.onclick = () => {
    screenBasicValue.textContent = eval(screenBasicValue.textContent);
}