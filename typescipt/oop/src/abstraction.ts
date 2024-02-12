// // Define an interface
// interface Shape {
//     calculateArea(): number;
// }

// // Implement the interface in classes
// class Circle implements Shape {
//     radius: number;

//     constructor(radius: number) {
//         this.radius = radius;
//     }

//     calculateArea(): number {
//         return Math.PI * this.radius * this.radius;
//     }
// }

// class Square implements Shape {
//     sideLength: number;

//     constructor(sideLength: number) {
//         this.sideLength = sideLength;
//     }

//     calculateArea(): number {
//         return this.sideLength * this.sideLength;
//     }
// }

// // Usage
// const circle = new Circle(5);
// console.log(circle.calculateArea()); // Output: 78.54

// const square = new Square(4);
// console.log(square.calculateArea()); // Output: 16

// // Define an abstract class
// abstract class Shape {
//     abstract calculateArea(): number;
// }

// // Implement the abstract class in derived classes
// class Circle extends Shape {
//     radius: number;

//     constructor(radius: number) {
//         super();
//         this.radius = radius;
//     }

//     calculateArea(): number {
//         return Math.PI * this.radius * this.radius;
//     }
// }

// class Square extends Shape {
//     sideLength: number;

//     constructor(sideLength: number) {
//         super();
//         this.sideLength = sideLength;
//     }

//     calculateArea(): number {
//         return this.sideLength * this.sideLength;
//     }
// }

// // Usage
// const circle = new Circle(5);
// console.log(circle.calculateArea()); // Output: 78.54

// const square = new Square(4);
// console.log(square.calculateArea()); // Output: 16

