class UberPrice {
    constructor(costforkilameters, ridekilometers) {
        this.costforkilameters = costforkilameters;
        this.ridekilometers = ridekilometers;
    }
    CalculatePrice() {
        return this.costforkilameters * this.ridekilometers;
    }
}




const price = new UberPrice(2, 10);
console.log(price.CalculatePrice());