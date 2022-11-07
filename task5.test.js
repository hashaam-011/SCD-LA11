const task5 = require('./task5');

test('task5', () => {
    expect(task5([1,2,3,4,5] , 5)).toBe(true);
    }
);
test('task5', () => {
    expect(task5([1,2,3,4,5] , 6)).toBe(false);
    }
);
