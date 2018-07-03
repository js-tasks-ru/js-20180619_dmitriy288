'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

function getMinMax(str){
    let a0 = str.split('');
    for(let i=0; a0.length>i; i++){
        if(a0[i] == ",") a0[i]=" ";

    }
//var c = a0.filter(function(e) { return e !== ',' })
    let c1 = a0.join('');
    let a1 = c1.split(' ');
    //let a2 = [];

    let a2 = a1.filter(function(number) {
        return number;
    });
    for(let i=0; a2.length>i;  i++)
    {
        a2[i] = Number(a2[i]);

    }
    let min = a2[0];
    let max = a2[0];

    for(let i=0; a2.length-1>i;  i++){
        let t2 = a2[i+1];
        if (t2 < min) { min = t2;}
        else if(t2 > max) {max = t2;}
    }

    var result = {min, max};
    return result;
}
//alert(getMinMax('25,-1,-234,4,   1000'));
console.log(getMinMax('25,-1,-234,4,   1000'));