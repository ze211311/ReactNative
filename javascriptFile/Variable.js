const user = {
    id: 2113110072,
    name: 'Narongkorn Sangayotin',
    age: 20,
    isStudent: false
} // Create empty

let sayHi = function (user) {
    console.log('Hi ' + user.name + ` My ${(user.isStudent) ? "Student" : "Guest"} How are you today?`);
} // Create function

let Animal = class {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
} // Create class in the Obj

let dog = new Animal("Dog", "Brown")

sayHi(user);
console.log(dog);
console.log('test');