// Implement a Class Currency with getter and setters


export default class Currency {
  constructor (code, name) {
    this._code = code;
    this._name = name;
  }

     // Getters and Setters
  get code() {
    return this._code;
  }

  set code(code) {
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`
  }
}
