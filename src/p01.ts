import {range,add} from "ramda";

const mod3Or5 = (value:number) => value % 3 === 0 || value % 5 === 0
console.log(range(0,1000).filter(mod3Or5).reduce(add))