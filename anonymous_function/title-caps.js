let add = function(x) {
    for (let i = 0; i < x.length; i++) {
        console.log(x[i].charAt(0).toUpperCase() + x[i].substr(1));
        }
    }



add(['raja', 'mani', 'karthik', 'muthu'])