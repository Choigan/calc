// Если значение screenBasicValue.textContent равно 0 или знаку равенства, то мы его заменяем на значение кнопки, иначе добавляем в строку значение кнопки
// Кнопка 9
btnList.btn16.onclick = () => {
    if (firstElement(screenBasicValue.textContent) && mathSign(screenBasicValue.textContent)) { screenBasicValue.textContent += btnList.btn16.textContent; }
    else if (screenBasicValue.textContent == 0 || firstElement(screenBasicValue.textContent)) { screenBasicValue.textContent = btnList.btn16.textContent; }
    else screenBasicValue.textContent += btnList.btn16.textContent;
}

// Кнопка 1
btnList.btn12.onclick = () => {
    if (firstElement(screenBasicValue.textContent) && mathSign(screenBasicValue.textContent)) { screenBasicValue.textContent += btnList.btn12.textContent; }
    else if (screenBasicValue.textContent == 0 || firstElement(screenBasicValue.textContent)) { screenBasicValue.textContent = btnList.btn12.textContent; }
    else screenBasicValue.textContent += btnList.btn12.textContent;
}

// Кнопка 2
btnList.btn13.onclick = () => {
    if (firstElement(screenBasicValue.textContent) && mathSign(screenBasicValue.textContent)) { screenBasicValue.textContent += btnList.btn13.textContent; }
    else if (screenBasicValue.textContent == 0 || firstElement(screenBasicValue.textContent)) { screenBasicValue.textContent = btnList.btn13.textContent; }
    else screenBasicValue.textContent += btnList.btn13.textContent;
}

// Кнопка 3
btnList.btn14.onclick = () => {
    if (firstElement(screenBasicValue.textContent) && mathSign(screenBasicValue.textContent)) { screenBasicValue.textContent += btnList.btn14.textContent; }
    else if (screenBasicValue.textContent == 0 || firstElement(screenBasicValue.textContent)) { screenBasicValue.textContent = btnList.btn14.textContent; }
    else screenBasicValue.textContent += btnList.btn14.textContent;
}

// Кнопка 4
btnList.btn8.onclick = () => {
    if (firstElement(screenBasicValue.textContent) && mathSign(screenBasicValue.textContent)) { screenBasicValue.textContent += btnList.btn8.textContent; }
    else if (screenBasicValue.textContent == 0 || firstElement(screenBasicValue.textContent)) { screenBasicValue.textContent = btnList.btn8.textContent; }
    else screenBasicValue.textContent += btnList.btn8.textContent;
}

// Кнопка 5
btnList.btn9.onclick = () => {
    if (firstElement(screenBasicValue.textContent) && mathSign(screenBasicValue.textContent)) { screenBasicValue.textContent += btnList.btn9.textContent; }
    else if (screenBasicValue.textContent == 0 || firstElement(screenBasicValue.textContent)) { screenBasicValue.textContent = btnList.btn9.textContent; }
    else screenBasicValue.textContent += btnList.btn9.textContent;
}

// Кнопка 6
btnList.btn10.onclick = () => {
    if (firstElement(screenBasicValue.textContent) && mathSign(screenBasicValue.textContent)) { screenBasicValue.textContent += btnList.btn10.textContent; }
    else if (screenBasicValue.textContent == 0 || firstElement(screenBasicValue.textContent)) { screenBasicValue.textContent = btnList.btn10.textContent; }
    else screenBasicValue.textContent += btnList.btn10.textContent;
}

// Кнопка 7
btnList.btn4.onclick = () => {
    if (firstElement(screenBasicValue.textContent) && mathSign(screenBasicValue.textContent)) { screenBasicValue.textContent += btnList.btn4.textContent; }
    else if (screenBasicValue.textContent == 0 || firstElement(screenBasicValue.textContent)) { screenBasicValue.textContent = btnList.btn4.textContent; }
    else screenBasicValue.textContent += btnList.btn4.textContent;
}

// Кнопка 8
btnList.btn5.onclick = () => {
    if (firstElement(screenBasicValue.textContent) && mathSign(screenBasicValue.textContent)) { screenBasicValue.textContent += btnList.btn5.textContent; }
    else if (screenBasicValue.textContent == 0 || firstElement(screenBasicValue.textContent)) { screenBasicValue.textContent = btnList.btn5.textContent; }
    else screenBasicValue.textContent += btnList.btn5.textContent;
}

// Кнопка 9
btnList.btn6.onclick = () => {
    if (firstElement(screenBasicValue.textContent) && mathSign(screenBasicValue.textContent)) { screenBasicValue.textContent += btnList.btn6.textContent; }
    else if (screenBasicValue.textContent == 0 || firstElement(screenBasicValue.textContent)) { screenBasicValue.textContent = btnList.btn6.textContent; }
    else screenBasicValue.textContent += btnList.btn6.textContent;
}

// Функция которая проверяет начинается ли строка с символа равно
function firstElement(firstElem) {
    return firstElem[(firstElem.length) - (firstElem.length)] === '=';
}

// Функция которая проверяет присутствуют ли мат. символы
function mathSign(mathSign) {
    if (mathSign.includes(' × ') || (mathSign.includes('÷ ')) || (mathSign.includes(' + '))
        || (mathSign.includes(' - '))) {
        return true
    }
    else return false

}

// ----------------------------------------------------------------------------------------------------------------

// Кнопка C
btnList.btn0.onclick = () => {
    if (screenBasicValue.textContent != '0') { screenBasicValue.textContent = '0'; }
    else historyItemBox.innerHTML = '';
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
    const historyItem = document.createElement('p');
    historyItem.className = 'currExp';
    historyItemBox.append(historyItem);
    if (firstElement(screenBasicValue.textContent)) {
        if (screenBasicValue.textContent.includes('×')) {
            screenBasicValue.textContent = screenBasicValue.textContent.substring(1);
            replacementMultiplication = screenBasicValue.textContent.replace(/×/g, '*');
            historyItem.textContent = `${screenBasicValue.textContent} = ${eval(replacementMultiplication)}`;
            screenBasicValue.textContent = '= ' + eval(replacementMultiplication);
        } else if (screenBasicValue.textContent.includes('÷')) {
            screenBasicValue.textContent = screenBasicValue.textContent.substring(1);
            replacementDivision = screenBasicValue.textContent.replace(/÷/g, '/');
            historyItem.textContent = `${screenBasicValue.textContent} = ${eval(replacementDivision)}`;
            screenBasicValue.textContent = '= ' + eval(replacementDivision);
        } else {
            screenBasicValue.textContent = screenBasicValue.textContent.substring(1);
            historyItem.textContent = `${screenBasicValue.textContent} = ${eval(screenBasicValue.textContent)}`;
            screenBasicValue.textContent = '= ' + eval(screenBasicValue.textContent)
        };
    } else {
        if (screenBasicValue.textContent.includes('×')) {
            replacementMultiplication = screenBasicValue.textContent.replace(/×/g, '*');
            historyItem.textContent = `${screenBasicValue.textContent} = ${eval(replacementMultiplication)}`;
            screenBasicValue.textContent = '= ' + eval(replacementMultiplication);
        } else if (screenBasicValue.textContent.includes('÷')) {
            replacementDivision = screenBasicValue.textContent.replace(/÷/g, '/');
            historyItem.textContent = `${screenBasicValue.textContent} = ${eval(replacementDivision)}`;
            screenBasicValue.textContent = '= ' + eval(replacementDivision);
        } else {
            historyItem.textContent = `${screenBasicValue.textContent} = ${eval(screenBasicValue.textContent)}`;
            screenBasicValue.textContent = '= ' + eval(screenBasicValue.textContent)
        };
    }
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
    if (screenBasicValue.textContent.includes(' - ')) {
        procentSplit = screenBasicValue.textContent.split('-');
        minuend = procentSplit[0].trim();
        const replaceProcentMinus = screenBasicValue.textContent.replace(/\s+\-\s+/g, ' * ');
        const procentMinus = eval(replaceProcentMinus) / 100;
        screenBasicValue.textContent = minuend + ' - ' + procentMinus;
    }
    else if (screenBasicValue.textContent.includes(' + ')) {
        procentSplit = screenBasicValue.textContent.split('+');
        summand = procentSplit[0].trim();
        const replaceProcentPlus = screenBasicValue.textContent.replace(/\s+\+\s+/g, ' * ');
        const procentPlus = eval(replaceProcentPlus) / 100;
        screenBasicValue.textContent = summand + ' + ' + procentPlus;
    }
    else if (screenBasicValue.textContent.includes(' × ')) {
        procentSplit = screenBasicValue.textContent.split('×');
        multiplicanda = procentSplit[0].trim();
        multiplier = eval(procentSplit[1].trim() / 100)
        screenBasicValue.textContent = multiplicanda + ' × ' + multiplier;
    }
    else if (screenBasicValue.textContent.includes(' ÷ ')) {
        procentSplit = screenBasicValue.textContent.split('÷');
        dividend = procentSplit[0].trim();
        divisor = eval(procentSplit[1].trim() / 100)
        screenBasicValue.textContent = dividend + ' ÷ ' + divisor;
    }
}


// btnList.btn2.onclick = () => {
//     if (screenBasicValue.textContent.includes(' - ')) {
//         procentSplit = screenBasicValue.textContent.split('-');
//         minuend = procentSplit[0].trim();
//         const replaceProcentMinus = screenBasicValue.textContent.replace(/ - /g, ' * ');
//         const procentMinus = eval(replaceProcentMinus) / 100;
//         screenBasicValue.textContent = eval(minuend - procentMinus)
//     }
// }