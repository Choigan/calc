// Если значение screenBasicValue.textContent равно 0 или начинается со знака равенства, то мы его заменяем на значение кнопки
// Если строка начинается со знака равно и также встречается матемю знак, то мы конкатинируем значение кнопки в строку screenBasicValue.textContent
// В остальных случаях мы также конкатинируем значение кнопки в строку screenBasicValue.textContent

// Кнопка 0
btnList.btn16.onclick = () => {
    if (firstElement(screenBasicValue.textContent) && mathSign(screenBasicValue.textContent)) { screenBasicValue.textContent += btnList.btn16.textContent; }
    else if (screenBasicValue.textContent === '0' || firstElement(screenBasicValue.textContent)) { screenBasicValue.textContent = btnList.btn16.textContent; }
    else screenBasicValue.textContent += btnList.btn16.textContent;
}

// Кнопка 1
btnList.btn12.onclick = () => {
    if (firstElement(screenBasicValue.textContent) && mathSign(screenBasicValue.textContent)) { screenBasicValue.textContent += btnList.btn12.textContent; }
    else if (screenBasicValue.textContent === '0' || firstElement(screenBasicValue.textContent)) { screenBasicValue.textContent = btnList.btn12.textContent; }
    else screenBasicValue.textContent += btnList.btn12.textContent;
}

// Кнопка 2
btnList.btn13.onclick = () => {
    if (firstElement(screenBasicValue.textContent) && mathSign(screenBasicValue.textContent)) { screenBasicValue.textContent += btnList.btn13.textContent; }
    else if (screenBasicValue.textContent === '0' || firstElement(screenBasicValue.textContent)) { screenBasicValue.textContent = btnList.btn13.textContent; }
    else screenBasicValue.textContent += btnList.btn13.textContent;
}

// Кнопка 3
btnList.btn14.onclick = () => {
    if (firstElement(screenBasicValue.textContent) && mathSign(screenBasicValue.textContent)) { screenBasicValue.textContent += btnList.btn14.textContent; }
    else if (screenBasicValue.textContent === '0' || firstElement(screenBasicValue.textContent)) { screenBasicValue.textContent = btnList.btn14.textContent; }
    else screenBasicValue.textContent += btnList.btn14.textContent;
}

// Кнопка 4
btnList.btn8.onclick = () => {
    if (firstElement(screenBasicValue.textContent) && mathSign(screenBasicValue.textContent)) { screenBasicValue.textContent += btnList.btn8.textContent; }
    else if (screenBasicValue.textContent === '0' || firstElement(screenBasicValue.textContent)) { screenBasicValue.textContent = btnList.btn8.textContent; }
    else screenBasicValue.textContent += btnList.btn8.textContent;
}

// Кнопка 5
btnList.btn9.onclick = () => {
    if (firstElement(screenBasicValue.textContent) && mathSign(screenBasicValue.textContent)) { screenBasicValue.textContent += btnList.btn9.textContent; }
    else if (screenBasicValue.textContent === '0' || firstElement(screenBasicValue.textContent)) { screenBasicValue.textContent = btnList.btn9.textContent; }
    else screenBasicValue.textContent += btnList.btn9.textContent;
}

// Кнопка 6
btnList.btn10.onclick = () => {
    if (firstElement(screenBasicValue.textContent) && mathSign(screenBasicValue.textContent)) { screenBasicValue.textContent += btnList.btn10.textContent; }
    else if (screenBasicValue.textContent === '0' || firstElement(screenBasicValue.textContent)) { screenBasicValue.textContent = btnList.btn10.textContent; }
    else screenBasicValue.textContent += btnList.btn10.textContent;
}

// Кнопка 7
btnList.btn4.onclick = () => {
    if (firstElement(screenBasicValue.textContent) && mathSign(screenBasicValue.textContent)) { screenBasicValue.textContent += btnList.btn4.textContent; }
    else if (screenBasicValue.textContent === '0' || firstElement(screenBasicValue.textContent)) { screenBasicValue.textContent = btnList.btn4.textContent; }
    else screenBasicValue.textContent += btnList.btn4.textContent;
}

// Кнопка 8
btnList.btn5.onclick = () => {
    if (firstElement(screenBasicValue.textContent) && mathSign(screenBasicValue.textContent)) { screenBasicValue.textContent += btnList.btn5.textContent; }
    else if (screenBasicValue.textContent === '0' || firstElement(screenBasicValue.textContent)) { screenBasicValue.textContent = btnList.btn5.textContent; }
    else screenBasicValue.textContent += btnList.btn5.textContent;
}

// Кнопка 9
btnList.btn6.onclick = () => {
    if (firstElement(screenBasicValue.textContent) && mathSign(screenBasicValue.textContent)) { screenBasicValue.textContent += btnList.btn6.textContent; }
    else if (screenBasicValue.textContent === '0' || firstElement(screenBasicValue.textContent)) { screenBasicValue.textContent = btnList.btn6.textContent; }
    else screenBasicValue.textContent += btnList.btn6.textContent;
}

// Функция которая проверяет начинается ли строка с символа равно
function firstElement(firstElem) {
    return firstElem[(firstElem.length) - (firstElem.length)] === '=';
}

// Функция которая проверяет присутствуют ли мат. символы
function mathSign(mathSign) {
    if (mathSign.includes(' × ') || (mathSign.includes('÷ ')) || (mathSign.includes(' + ')) || (mathSign.includes(' - ')) || (mathSign.includes('.'))) return true;
    else return false;

}

// ----------------------------------------------------------------------------------------------------------------

// Кнопка C
// Кнопка очищает поле screenBasicValue, повторное нажатие очищает Журнал вычислений.
btnList.btn0.onclick = () => {
    if (screenBasicValue.textContent != '0') { screenBasicValue.textContent = '0'; }
    else historyItemBox.innerHTML = '';
}

// Если в конце строки встречаем пробел(возникает когда уже выбран другой матем.символ, мы его заменяем)
// Если пробела нет, то просто конкатинируем значение в строку

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
// Проверяем есть ли знак равенства в начале выражения, если да, то удаляем его
// Если встречаем в выражении знаки "×" и "÷", то заменяем их на "*" и "/" соответственно
btnList.btn18.onclick = () => {
    const historyItem = document.createElement('p'); // Создаем параграф
    historyItem.className = 'currExp'; // Даем созданному параграфу класс
    historyItemBox.append(historyItem); // Добавляем созданный параграф в блок historyItemBox
    if (firstElement(screenBasicValue.textContent)) { //Проверяем начинается ли строка с символа "равно"
        if (screenBasicValue.textContent.includes('×') || screenBasicValue.textContent.includes('÷')) {
            screenBasicValue.textContent = screenBasicValue.textContent.substring(1); // Удаляем знак "равно"
            if (screenBasicValue.textContent[screenBasicValue.textContent.length - 1] === ' ') { // Если встречаем в конце пробел(встречается если введен мат. знак)
                replacementValue = screenBasicValue.textContent.replace(/×/g, '*').replace(/÷/g, '/'); // Заменяем символы на * и /
                replacementValue = replacementValue.slice(0, -3) // удаляем мат. знак
                historyItem.textContent = `${screenBasicValue.textContent.slice(0, -3)} = ${eval(replacementValue)}`;
                screenBasicValue.textContent = '= ' + eval(replacementValue);
            } else {
                replacementValue = screenBasicValue.textContent.replace(/×/g, '*').replace(/÷/g, '/');
                historyItem.textContent = `${screenBasicValue.textContent} = ${eval(replacementValue)}`;
                screenBasicValue.textContent = '= ' + eval(replacementValue);
            }
        } else {
            screenBasicValue.textContent = screenBasicValue.textContent.substring(1);
            if (screenBasicValue.textContent[screenBasicValue.textContent.length - 1] === ' ') {
                screenBasicValue.textContent = screenBasicValue.textContent.slice(0, -3)
                historyItem.textContent = `${screenBasicValue.textContent} = ${eval(screenBasicValue.textContent)}`;
                screenBasicValue.textContent = '= ' + eval(screenBasicValue.textContent)
            } else {
                historyItem.textContent = `${screenBasicValue.textContent} = ${eval(screenBasicValue.textContent)}`;
                screenBasicValue.textContent = '= ' + eval(screenBasicValue.textContent)
            }
        };
    } else {
        if (screenBasicValue.textContent.includes('×') || screenBasicValue.textContent.includes('÷')) {
            if (screenBasicValue.textContent[screenBasicValue.textContent.length - 1] === ' ') {
                replacementValue = screenBasicValue.textContent.replace(/×/g, '*').replace(/÷/g, '/');
                replacementValue = replacementValue.slice(0, -3)
                historyItem.textContent = `${screenBasicValue.textContent.slice(0, -3)} = ${eval(replacementValue)}`;
                screenBasicValue.textContent = '= ' + eval(replacementValue);
            } else {
                replacementValue = screenBasicValue.textContent.replace(/×/g, '*').replace(/÷/g, '/');
                historyItem.textContent = `${screenBasicValue.textContent} = ${eval(replacementValue)}`;
                screenBasicValue.textContent = '= ' + eval(replacementValue);
            }
        } else {
            if (screenBasicValue.textContent[screenBasicValue.textContent.length - 1] === ' ') {
                screenBasicValue.textContent = screenBasicValue.textContent.slice(0, -3)
                historyItem.textContent = `${screenBasicValue.textContent} = ${eval(screenBasicValue.textContent)}`;
                screenBasicValue.textContent = '= ' + eval(screenBasicValue.textContent)
            } else {
                historyItem.textContent = `${screenBasicValue.textContent} = ${eval(screenBasicValue.textContent)}`;
                screenBasicValue.textContent = '= ' + eval(screenBasicValue.textContent)
            }
        };
    }
}

// Кнопка +/-
// Проверяем есть ли знак равенства в начале выражения, если да, то удаляем его
// Выражение умножаем на "-1"
btnList.btn1.onclick = () => {
    let screenBasicValueSplit = screenBasicValue.textContent.split(' ');
    if (firstElement(screenBasicValue.textContent)) {
        screenBasicValue.textContent = screenBasicValue.textContent.substring(1);
        if (screenBasicValue.textContent[screenBasicValue.textContent.length - 1] === ' ') {
            screenBasicValue.textContent += `(-${screenBasicValueSplit[screenBasicValueSplit.length - 3]})`
        } else {
            screenBasicValueSplit[screenBasicValueSplit.length - 1] = `(${eval(screenBasicValueSplit[screenBasicValueSplit.length - 1] * (-1))})`
            screenBasicValue.textContent = screenBasicValueSplit.join(' ')
        }
    }
    else {
        if (screenBasicValue.textContent[screenBasicValue.textContent.length - 1] === ' ') {
            screenBasicValue.textContent += `(-${screenBasicValueSplit[screenBasicValueSplit.length - 3]})`
        } else {
            screenBasicValueSplit[screenBasicValueSplit.length - 1] = `(${eval(screenBasicValueSplit[screenBasicValueSplit.length - 1] * (-1))})`
            screenBasicValue.textContent = screenBasicValueSplit.join(' ')
        }
    };
}

// Кнопка .
// Проверяем есть ли знак пробела в конце, если есть то добавляем 0 перед точкой
btnList.btn17.onclick = () => {
    if (screenBasicValue.textContent[screenBasicValue.textContent.length - 1] === ' ') {
        screenBasicValue.textContent += 0 + btnList.btn17.textContent;
    }
    else {
        const inputString = screenBasicValue.textContent;
        const validInput = /\d+(\.\d+)?(\s*[\+\-\*\/]\s*\d+(\.\d+)?)*/.test(inputString);

        if (validInput) {
            const lastPart = inputString.split(' ').pop();
            if (!lastPart.includes('.')) {
                screenBasicValue.textContent += btnList.btn17.textContent;
            }
        }
    }

}

// Кнопка %
btnList.btn2.onclick = () => {
    if (firstElement(screenBasicValue.textContent)) {
        screenBasicValue.textContent = screenBasicValue.textContent.substring(1);
        if (screenBasicValue.textContent.includes(' - ')) {
            procentSplit = screenBasicValue.textContent.split('-');
            minuend = procentSplit[0].trim();
            const replaceProcentMinus = screenBasicValue.textContent.replace(/\s+\-\s+/g, ' * ');
            const procentMinus = eval(replaceProcentMinus) / 100;
            screenBasicValue.textContent = '= ' + minuend + ' - ' + procentMinus;
        }
        else if (screenBasicValue.textContent.includes(' + ')) {
            procentSplit = screenBasicValue.textContent.split('+');
            summand = procentSplit[0].trim();
            const replaceProcentPlus = screenBasicValue.textContent.replace(/\s+\+\s+/g, ' * ');
            const procentPlus = eval(replaceProcentPlus) / 100;
            screenBasicValue.textContent = '= ' + summand + ' + ' + procentPlus;
        }
        else if (screenBasicValue.textContent.includes(' × ')) {
            procentSplit = screenBasicValue.textContent.split('×');
            multiplicanda = procentSplit[0].trim();
            multiplier = eval(procentSplit[1].trim() / 100)
            screenBasicValue.textContent = '= ' + multiplicanda + ' × ' + multiplier;
        }
        else if (screenBasicValue.textContent.includes(' ÷ ')) {
            procentSplit = screenBasicValue.textContent.split('÷');
            dividend = procentSplit[0].trim();
            divisor = eval(procentSplit[1].trim() / 100)
            screenBasicValue.textContent = '= ' + dividend + ' ÷ ' + divisor;
        }
    }
    else {
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
}