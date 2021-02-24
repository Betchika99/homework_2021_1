'use strict';

const inverse = function inverseArr(arr, count){

    let arr1 = [];
    if(count > 0) {
        arr1 = arr.splice(0,count);
        arr.reverse();
        arr = arr1.concat(arr);
    } 
    else if (count < 0) {
        arr1 = arr.splice(count);
        arr.reverse();
        arr = arr.concat(arr1);
    } 
    else arr.reverse();

    return arr;
};
