import "./__global"

function* numbers(){
    for(let i=0;i<100;i++) yield i;
}

console.log(numbers().map((x:number)=>x*10).filter((x)=>x>950).pick((x,i)=>i===100))
// for(let v of numbers().map((x:number)=>x*10)){
//     console.log(v)
// }