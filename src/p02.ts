import {range,add} from "ramda";
import {trace,collect} from "./common"


function* Fibonacci(max : number) : Iterable<number>{
    yield 1;
    yield 2;
    var lastPair = [1,2]
    const sumOfPair = () => lastPair[0] + lastPair[1]
    while(sumOfPair()<max){
        const result = sumOfPair()
        lastPair = [lastPair[1],result]
        yield result
    }
}

trace(collect( Fibonacci(4000000)).filter(x=>x%2===0).reduce(add))