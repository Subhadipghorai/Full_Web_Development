// let obj= {
//     a:"Subhadip",
//     b:44
// }
// console.log(obj);

// let animal={
//     eats:true

// };
// let rabbit={
//     jumps:true
// };

// rabbit.__proto__=animal;

class Animal {
    constructor(name) {
        this.name = name;
        console.log("object is created");
    }
    eats() {
        console.log("eats");
    }
    jumps() {
        console.log("jumping");
    }
}
class lion extends Animal {
    constructor(name) {
        super(name);
        console.log("object is created and he is a lion ");
    }
    eats() {
        super.eats();
        console.log("kha raha hoon");
    }
}
let a = new Animal();

console.log(a);

let l = new lion("sera");
console.log(l);
