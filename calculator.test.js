const calculator = require('./calculator');

test('add', () => {
    expect(calculator.sum(1, 2)).toBe(3);
    }
);

test('subtract', () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
    }
);

test('multiply', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
    }
);

test('divide', () => {
    expect(calculator.divide(1, 0)).toBe(null);
    }
);

test('divide', () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
    }
);

test('power', () => {
    expect(calculator.power(1, 2)).toBe(1);
    }
);

test('round', () => {
    expect(calculator.round(1.5)).toBe(2);
    }
);

test('ceiling', () => {
    expect(calculator.ceiling(1.5)).toBe(2);
    }
);
