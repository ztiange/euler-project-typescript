import {range} from "ramda";

/*
10001st prime

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

const isPrime = (n : number):boolean=> range(2,Math.floor(n/2+1)).every(x=>n%x!==0)
console.log(range(2,110000).filter(isPrime)[10000])
