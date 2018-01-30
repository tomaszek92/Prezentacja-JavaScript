for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 0, j = 1; ; j--, i++) {
    console.log(i, j);
    if (i === 2) {
        break;
    }
}