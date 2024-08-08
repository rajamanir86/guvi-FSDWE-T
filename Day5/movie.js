class Movie {
    constructor(title , studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getPG() {  
        if (this.rating == "PG") {
            console.log(this.title, this.studio, this.rating);
        }
    }
}

const movie1 = new Movie('Inception', 'Sony', "LL");
console.log(movie1);
let movie2 = [];
movie2.push(new Movie('Interstellar', 'Paramount'));
movie2.push(new Movie('spider', 'marvell', 'PG'));
movie2.push(new Movie('ironman', 'marvell', 'LL'));

for (let index = 0; index < movie2.length; index++){
    movie2[index].getPG();
}


