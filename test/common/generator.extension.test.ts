import { expect } from "chai";
import {foreverFrom} from "../../src/common/generator.extension"

const generate_1_2 = (function* v(){yield 1,yield 2})
describe('generator.extension', () => {
    it("filter",()=>{
        expect(generate_1_2().filter(x=>x>1).collect().join()).equal("2")
    }),
    it("map",()=>{
        expect(generate_1_2().map(x=>x*10).collect().join(),"10,20")
    }),
    
    it("collect",()=>{
        expect(generate_1_2().collect().join()).equal("1,2")
    }),

    it('foreverFrom&collectFor',()=>{
        expect(foreverFrom(3).collectFor((x,i)=>x<=6).join()).equal("3,4,5,6")
        expect(foreverFrom(3).collectFor((x,i)=>i<=4).join()).equal("3,4,5,6,7")
    }),

    it("pick",()=>{
        expect(generate_1_2().pick((v,i)=>v===2)).equal(2)
    })
})

