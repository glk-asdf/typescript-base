/// <reference path = "./IShape.ts"/>
/// <reference path = "./Circle.ts"/>
/// <reference path = "./Triangle.ts"/>

// deno 无法运行    // error: Uncaught ReferenceError: Drawing is not defined
// tsc + node 可以运行
let circle: Drawing.Circle = new Drawing.Circle();
let triangle: Drawing.Triangle = new Drawing.Triangle();
circle.draw();
triangle.draw();
