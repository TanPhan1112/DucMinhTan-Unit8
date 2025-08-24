const multipleOf3 = (a, b) => {
    for (let i = 1; i <= 100; i++) {
        if (i % a == 0) {
            console.log(i + " I am a multiple of 3");
            b = 0;
        } else {
            console.log(i);
        }
    }
    return b;
};

if (a) {
}

export default { multipleOf3 };