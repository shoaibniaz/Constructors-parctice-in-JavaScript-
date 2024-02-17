function cars(model, number, color) {
    this.model = model
    this.number = number
    this.color = color
}
let myCar = new cars("honda", "city", "black")
console.log(myCar.model);
console.log(myCar.number);
console.log(myCar.color);
function Person(name, gender, age, height) {
    this.name = name
    this.gender = gender
    this.age = age
    this.height = height Math.round
}
let mairaj = new Person("mairaj", "male", 23, 5.4)
console.log(mairaj.age);
console.log(mairaj.gender);
console.log(mairaj.age);
console.log(mairaj.height);


function Class(name, age, rollNumber, marks) {
    this.name = name
    this.age = age
    this.rollNumber = rollNumber
    this.marks = marks

}
this.totalmarks = function () {
    return this.marks * this.rollNumber;


};
let person = new Class("Furqan", 27, 3, 300)
console.log(person.name);
console.log(person.age);
console.log(person.rollNumber);
console.log(person.marks);
console.log(person.totalmarks());