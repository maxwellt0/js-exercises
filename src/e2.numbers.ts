import {expect} from "chai";

function checkNaN(value: any): boolean {
    return Number.isNaN(value);
}

describe("NaN Type", () => {

    it('should return "true"', () => {
        expect(checkNaN(NaN)).to.be.eq(true);
        // @ts-ignore
        expect().to.be.eq(true);
    });

    it('should return "false"', () => {
        // @ts-ignore
        expect(checkNaN("hello")).to.be.eq(false);
    });

    it('should parse', () => {
        expect(parseFloat("123")).to.be.eq(123);
        expect(isNaN(parseFloat("asfasdf23"))).to.be.eq(true);
        expect(parseFloat("123.34")).to.be.eq(123.34);
    });
    
    it('should ', () => {
        Number.parseFloat("123.3445") // 123.3445
        // console.log(Number.parseInt("123.3445")) // 123
        
        console.log(parseInt("111", 2)) // 9
    })
})