abstract class Shape{
    abstract draw():void
}
const myStyled = (targetComponent:string) =>([style]:[string])=> class extends Shape {
    draw(){
        console.log(targetComponent)
        return;
    }
};

interface F{
    (c:string):string;
}  

const f1 = (v:TemplateStringsArray,...args:any[])=>console.log(v.raw,args);

// f1({m:"CCC"})
const a = 10
const b = "10"
f1`test1
test2
${a},
${b}`

    