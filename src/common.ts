import { curry,add } from "ramda";

export const trace = <T>(v:T)=>{console.log(v);return v}
// fn : (t1,i)->t2 -> [t1] -> [t2]
export const mapIndexed = curry(<T1,T2>(fn:(t1:T1,i:number)=>T2, t1s:T1[]):T2[]=> t1s.map((x,i)=>fn(x,i)))
export const stringComparator = (s1:string,s2:string) => s1.localeCompare(s2)
export const sum = <T>(f:(v:T)=>number,values :T[]):number => values.map(f).reduce(add,0)
export const sumIndexed = <T>(f:(v:T,i:number)=>number,values :T[]):number => values.map((x,i)=>f(x,i)).reduce(add,0)

export const collect = <T>(f:Iterable<T>):T[]=>{
    var result : T[] = []
    for(let t of f){
        result.push(t)
    }
    return result
}