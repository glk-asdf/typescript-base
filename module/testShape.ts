import shape = require("./IShape");
import circle = require("./Circle");
import triangle = require("./Triangle");

// deno 无法运行    // TS2307 [ERROR]: Cannot find module './Triangle' or its corres ponding type declarations.
// tsc + node 可以运行

function drawAllShape (shapeToShow: shape.IShape) {
    shapeToShow.draw()
}

drawAllShape(new circle.Circle());
drawAllShape(new triangle.Triangle());
