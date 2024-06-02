// Pricing
// 4-pricing.js
import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = this._validateNumber(amount, 'Amount');
    this._currency = this._validateCurrency(currency);
  }

  // Getters
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // Setters
  set amount(value) {
    this._amount = this._validateNumber(value, 'Amount');
  }

  set currency(value) {
    this._currency = this._validateCurrency(value);
  }

  // Method to display full price
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  // Validation methods
  _validateNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a number`);
    }
    return value;
  }

  _validateCurrency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be an instance of the Currency class');
    }
    return value;
  }
}
