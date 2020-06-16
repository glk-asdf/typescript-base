/*
    基础语法
        声明变量时添加添加类型
        方法添加返回值类型
 */
// hello world
var hello = 'hello world';
console.log(hello);
/**
 * class Site 一个类
 * function name 方法
 */
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log('glk');
    };
    return Site;
}());
// 实例化
var obj = new Site();
obj.name();
//# sourceMappingURL=baseGrammar.js.map