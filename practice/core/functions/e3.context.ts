export class ClassExample {
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