const Point = require('./point');

class FoodInfo {

    constructor(posX, posY) {
        this.id = -1;
        this.point = new Point(posX, posY);
    }

    toObject() {
        return {
            id: this.id,
            point: this.point.toObject()
        }
    }

}

module.exports = FoodInfo;