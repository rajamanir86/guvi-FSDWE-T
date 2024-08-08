((x) => {
    for(var i = 0; i < x.length; i++) {
        console.log(x[i].charAt(0).toUpperCase() + x[i].substr(1));
    }
})(['raja', 'slower']);