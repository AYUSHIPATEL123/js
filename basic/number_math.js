let s=100
// console.log(s);
// console.log(s.toFixed(1));
// console.log(s.toString()+5);
let a=1000000;
// console.log(a.toLocaleString('en-in'));
// console.log(Number.MAX_SAFE_INTEGER);
// console.table([Number.MAX_VALUE,Number.MIN_VALUE,Number.NEGATIVE_INFINITY,Number.NaN,Number.EPSILON]);

// Math methods
let z=19.78;
console.table([
    Math.round(z),Math.E,Math.LN10,Math.SQRT2,
    Math.abs(z),
    Math.floor(z),
    Math.pow(z,2)
]);

let min=10;
let max=20;
let x=Math.floor(Math.random()*(max-min+1) + min);
console.log(x);