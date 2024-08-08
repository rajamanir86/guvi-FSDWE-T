// // arrow functions
// let add = (x, y) => {
//     console.log(x + y);
// }

// add(5, 6);


let add = (x) => { 
    for (let i = 0; i < x.length; i++) {
        if (x[i] % 2 != 0) {
            console.log(x[i]);
        }
    }
};

add([1,2,3,4,5,6,7,8,9,10]);


