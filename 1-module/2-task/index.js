'use strict';

/**
 * Эту функцию трогать не нужно
 */
function print (text) {
    alert(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid (name) {
    let a = name.replace(/\s+/g, '');
    let b = name.length;
    let c = a.length;
    if (b > c)
    {
        return false;
    }

    else if(b >= 4 )
    {
        return true;
    }

    else return false;


}

function sayHello () {
    let userName = prompt('Введите ваше имя');

    if (isValid(userName)) {
        print('Welcome back, ' + userName + '!');
    } else {
        print('Некорректное имя');
    }
}

sayHello();

