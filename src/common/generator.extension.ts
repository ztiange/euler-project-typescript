export { }

const Generator = Object.getPrototypeOf(function* () { });

declare global {
    interface Generator<T> {
        map<F>(mapper: (t: T) => F): Generator<F>;
        filter(pred : (t:T)=>boolean) : Generator<T>;
        collectFor(forPred:(v:T,i:number) => boolean):T[];
        collect():T[];
        pick(pickPred:(v:T,i:number) => boolean) : T
    }
}

Generator.prototype.map = function* <T,F>(mapper:(v:T)=>F) {
    for (const val of this) {
        yield mapper(val)
    }
};

Generator.prototype.filter = function* <T>(pred:(v:T)=>boolean){
    for (const val of this) {
       if(pred(val)) yield val
    }
}

Generator.prototype.collect = function<T>():T[]{
    var result :T[] = []
    for (const val of this) {
        result.push(val)
    }
    return result;
}

Generator.prototype.collectFor = function <T>(forPred:(v:T,i:number) => boolean):T[]{
    var result :T[] = []
    var index = 0;
    for (const val of this) {
        if(!forPred(val,index++)) break;
        result.push(val)
    }
    return result;
}

Generator.prototype.pick = function <T>(pickPred:(v:T,i:number) => boolean):T|null{
    var index = 0;
    for (const val of this) {
        if(pickPred(val,index++)) 
            return val;
    }
    return null;
}

export function* foreverFrom(start:number){
    var cur = start;
    while(true){
        yield cur++
    }
}