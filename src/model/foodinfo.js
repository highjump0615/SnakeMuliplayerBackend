const Point = require('./point');

class FoodInfo {

    constructor(posX, posY) {
        // timestamp(11) + seqnum(3) + weight(1) + userid(6)
        this.id = "";
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