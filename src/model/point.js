
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toObject() {
        return {
            x: this.x, 
            y: this.y
        }
    }
}

module.exports = Point;