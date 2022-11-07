function sum(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
    return a * b;
    }
function divide(a, b) {
    if(b!=0) return a / b;
    return null;
    }
function power(a, b) {
    return a ** b;
    }
function round(a) {
    return Math.round(a);
    }
function ceiling(a) {
    return Math.ceil(a);
    }

module.exports.sum = sum;
module.exports.subtract = subtract;
module.exports.multiply = multiply;
module.exports.divide = divide;
module.exports.power = power;
module.exports.round = round;
module.exports.ceiling = ceiling;
