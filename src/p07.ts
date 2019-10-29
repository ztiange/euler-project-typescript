import {isPrime} from "./common/primes"
import { foreverFrom } from "./common/generator.extension";
/*
10001st prime

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/
console.log(foreverFrom(2).filter(isPrime).pick((v,i)=>i===10000))
