import {primesTo} from "../../src/common/primes"
import { expect } from "chai"

describe("PrimeGenerator",()=>{
    it("normal",()=>{
        expect(primesTo(100).collect().join())
            .equals([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
                .join()
            )
    })
})