import { reverseString, Calculator, capitalize, stringLength } from './string';

describe('Unit Test', () => {
  test('string length', () => {
    expect(stringLength('hello')).toBe(5);
  });
  test('Capital', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
  test('reverse string', () => {
    expect(reverseString('hello')).toEqual('olleh');
  });
  test('add get two numbers', () => {
    const calc = new Calculator();
    expect(calc.get(2, 3)).toEqual([2, 3]);
    expect(calc.add()).toEqual(5);
  });
});
