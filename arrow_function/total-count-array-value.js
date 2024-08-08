let arraucount = array => {
    j = 0;
    for (let i = 0; i < array.length; i++) {
        j += array[i];
    }
    return console.log(j);
}
arraucount([1,2,4])