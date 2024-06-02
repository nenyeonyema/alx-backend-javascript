// 5-building.js
export default class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error('Building is an abstract class and cannot be instantiated directly');
    }
    this._sqft = this._validateNumber(sqft, 'Square feet');
  }

  // Getter
  get sqft() {
    return this._sqft;
  }

  // Validation method
  _validateNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a number`);
    }
    return value;
  }

  // Method to ensure implementation in subclass
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
