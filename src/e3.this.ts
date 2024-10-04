import {expect} from "chai";

class ClassExample {
    firstName: string;

    constructor(firstName: string) {
        this.firstName = firstName;
    }
    
    hello() {
        const composeName = () =>  {
            return "Hello, " + this.firstName + "!";
        }
        
        return composeName()
    }
}

// function funcExample(firstName: string) {
//     this.firstName = firstName;
//     const contextA = this;
//    
//     return {
//         hello: function() {
//             return "Hello, " + contextA.firstName + "!";
//         }
//     }
// }


describe("This", () => {

    it('should greet', () => {
        const obj = new ClassExample("Tania");
        
        expect(obj.hello()).to.eq("Hello, Tania!")
    });

    // it('should greet', () => {
    //     const obj = funcExample("Tania");
    //
    //     // expect(obj.hello()).to.eq("Hello, Tania!")
    // });
})