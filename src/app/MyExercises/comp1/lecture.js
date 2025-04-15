var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    //Method
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setX = function (value) {
        if (x < 0) {
            throw new Error('X is less than 0');
            this.x = value;
        }
    };
    return Point;
}());
var point = new Point(1, 2);
point.draw();
var x = point.getX();
point.setX(10);
point.draw();
