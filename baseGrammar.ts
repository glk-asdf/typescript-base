/*
    基础语法
        声明变量时添加添加类型
        方法添加返回值类型
 */

// hello world
let hello: string = 'hello world';
console.log(hello);

/**
 * class Site 一个类
 * function name 方法
 */
class Site {
    name(): void {
        console.log('glk')
    }
}
// 实例化
let obj = new Site();
obj.name();
