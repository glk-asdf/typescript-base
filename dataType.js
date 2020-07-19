/*
    数据类型
        any     任意类型
        number  数字类型，双精度64位浮点值
        string  字符串类型
        boolean 布尔类型
                数组
                元组
        enum    枚举
 */
// any
var anyway = '任何类型';
// number
var num = 123;
// string
var str = 'qwer';
// boolean
var bol = true;
// 数组
var arr = [1, 2];
var arr0 = [1, 2];
var arr1 = [1, 'q'];
// 元组
var arr2 = [1, true];
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var color1 = Color.Red;
console.log('color1:', color1);
var color2 = Color.Green;
console.log('color2:', color2);
var color3 = Color.Blue;
console.log('color3:', color3);
// void
function fn() {
    console.log('void');
}
var rn = fn();
console.log('rn:', rn);
//# sourceMappingURL=datatype.js.map