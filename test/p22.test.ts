import { expect } from "chai";
import {sumOfWordsWorth} from "../src/p22"

describe('sumOfWordsWorth', function() {
  it('sumOfWordsWorth_0',function(){
    expect(sumOfWordsWorth(["A"])).equal(1);
    expect(sumOfWordsWorth(["AC"])).equal(4);
    expect(sumOfWordsWorth(["BB","AA"])).equal(10);
  });
}) 






  