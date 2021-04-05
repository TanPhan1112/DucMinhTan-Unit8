const { multipleOf3 } = require('./multipleOf3.js');
const { multipleOf5 } = require('./multipleOf5.js');
const { multipleOf3and5 } = require('./multipleOf3and5.js');

// The operation should print the text "I am a multiple of 3" next to the numbers that are multiple of 3 from 1 to 100.
test('Multiple of 3', () => {
    expect(multipleOf3(3)).toBe(0)
});

// The operation should print the text "I am a multiple of 5" next to the numbers that are multiple of 5 from 1 to 100.
test('Multiple of 5', () => {
    expect(multipleOf5(5)).toBe(0)
});

// The operation should print the text "I am a multiple of both 3 and 5" next to the numbers that are multiple of both 3 and 5 from 1 to 100.
test('Multiple of both 3 and 5', () => {
    expect(multipleOf3and5(3, 5)).toBe(0)
});