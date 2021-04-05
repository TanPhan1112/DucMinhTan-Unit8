const multipleOf5 = (a, b) => {
    for (let i = 1; i <= 100; i++) {
        if (i % a == 0) {
            console.log(i + " I am a multiple of 5");
            b = 0;
        } else {
            console.log(i);
        }
    }
    return b;
};

module.exports = { multipleOf5 };