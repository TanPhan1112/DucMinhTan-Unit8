const multipleOf3and5 = (a, b, c) => {
    for (let i = 1; i <= 100; i++) {
        if (i % a == 0 && i % b == 0) {
            console.log(i + " I am a multiple of both 3 and 5");
            c = 0;
        } else {
            console.log(i);
        }
    }
    return c;
};

module.exports = { multipleOf3and5 };