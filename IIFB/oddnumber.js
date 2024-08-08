// ((x, y) => {
//     console.log(x + y);
// })(5, 6);

((x) => {
    for (var i = 0; i < x.length; i++) {
        if (x[i] % 2 != 0) {
            console.log(x[i]);
        }
    }
})([1,3,4,5,6,7,8,9,10,11]);