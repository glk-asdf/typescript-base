/*
    对象
    对象是包含一组键值对的的实例，值可以是 标量、函数、数组、对象
    typescript 中对象不能随意添加属性方法，必须是特定类型的实例
    鸭子类型（duck typing）
        duck typing 是动态类型的一种风格，是多态的一种形式
        在这种风格中，一个对象的有效语义，不是由继承的类或接口决定，而是由‘方法和属性的集合’决定
 */

let sites = {
    site1: 'Runoob',
    site2: 'Google'
};
let sites2 = {
    site1: 'Runoob',
    site2: 'Google'
};
// sites.site3 = 'glk';         // error: TS2551 [ERROR]: Property 'site3' does not exist on type '{ site1: string; site2: string; }'. Did you mean 'site1'?

/*
    鸭子类型（duck typing）
    duck typing 是动态类型的一种风格，是多态的一种形式
    在这种风格中，一个对象的有效语义，不是由继承的类或接口决定，而是由‘方法和属性的集合’决定
 */
interface IPoint {
    x: number,
    y: number
}
function addPoints(p1: IPoint, p2: IPoint): IPoint {
    let x = p1.x + p2.x;
    let y = p1.y + p2.y;
    return {x, y}
}
addPoints({x: 1, y: 1}, {x:2, y:2});
// addPoints({x: 1}, {x:2, y:2});               // error: TS2345 [ERROR]: Argument of type '{ x: number; }' is not assignable to parameter of type 'IPoint'.
                                                // Property 'y' is missing in type '{ x: number; }' but required in type 'IPoint'.
