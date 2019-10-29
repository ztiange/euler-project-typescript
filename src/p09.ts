
/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

import { pairs } from "./common/generator.extension";
import { trace } from "./common/common";

trace(
    //generate 2d pairs such as [{x:2,y:3},{x:2,y:4} ...]
    pairs([2,1000/3],(a=>[a+1,(1000-a)/2]))  
    .filter(({x,y})=>x*x + y*y === (1000-x-y)*(1000-x-y))
    .map(({x,y})=>x*y*(1000-x-y))
    .first()
)
