var numbers = [1,2,3,4,5];
var result = numbers.map(x => x + x);

setTimeout(() => {
    result = 'wynik: ' + result;
    console.log(result);
}, 200);