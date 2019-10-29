import {range} from "ramda"
export const isPrime = (n : number):boolean=> range(2,Math.sqrt(n)+1).every(x=>x===n || n%x!==0)

export function* primesTo(to:number){
    const notPrimes:Set<number> = new Set();
    var cur = 2
    while(cur<=to){
        if(!notPrimes.has(cur) ){
            var timedValue = cur * 2
            while(timedValue<=to){
                notPrimes.add(timedValue)
                timedValue = timedValue + cur
            }
            yield cur;
        }
        cur ++
    }
}