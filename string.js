export function stringLength(string) {
  if (string.length >= 1 && string.length <= 10) {
    return string.length;
  } else {
    throw new Error('Must be between 1 and 9');
  }
}
export function reverseString(string) {
  return string.split('').reverse().join('');
}
export class Calculator {
  constructor() {
    this.store = [];
  }
  get(numberOne, numberTwo) {
    this.store.push(numberOne);
    this.store.push(numberTwo);
    return this.store;
  }
  add() {
    let sum = 0;
    for (let i = 0; i < this.store.length; i += 1) {
      sum = sum + this.store[i];
    }
    return sum;
  }
}
export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1, string.length);
}
