const user = {
    id: 2113110072,
    name: 'Narongkorn Sangayotin',
    age: 20,
    isStudent: false
}

let sayHi = function (user) {
    console.log('Hi ' + user.name + ` My ${(user.isStudent) ? "Student" : "Guest"} How are you today?`);
}

let Animal = class {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}

let dog = new Animal("Dog", "Brown")

sayHi(user);
console.log(dog);