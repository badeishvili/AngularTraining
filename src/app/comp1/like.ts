export class Like {

  //Fields

  //Constructor
  constructor(private _likesCount: number, private _isSelected: boolean) {
  }

  //Methods
  onClick() {
    this._likesCount += (this._isSelected ? -1 : 1);
    this._isSelected = !this._isSelected;
  }

  get likesCount() {
    return this._likesCount;
  };

  get isSelected() {
    return this._isSelected;
  }
}
