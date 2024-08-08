let countarray = function(array) {
    let j = 0;
    for (let i = 0; i < array.length; i++) {
        j += array[i];
    }
    return console.log(j);
}
countarray([1, 2, 3]);