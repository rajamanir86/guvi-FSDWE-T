class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }
    getRadius() { return this.radius; }
    setRadius(newRadius) {
        this.radius = newRadius;
    }
    getColor() { return this.color; }
    setColor(newColor) {
        this.color = newColor;
    }
    toString() { 
        return (this.radius = this.radius.toString(), this.color = this.color.toString());
    }
    getArea() { return this.radius; }
    getCircumference() { return this.radius }

}