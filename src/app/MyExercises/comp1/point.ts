export class Point {

  constructor(private _x:number, private _y:number) {
  }

  //Method
  draw() {
    console.log('X: '+this._x+', Y: '+this._y);
  }

  get x() {
    return this._x;
  }

  set x(value: number) {
    this._x = value;
    if (this._x < 0) {
      throw new Error('X is less than 0');
    }

  }

}
