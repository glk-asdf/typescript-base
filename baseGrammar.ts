/*
    基础语法
        声明变量时添加类型
        方法添加参数类型
        方法添加返回值类型
 */

// hello world
let hello: string = 'hello world';
console.log('hello:', hello);
let num : number | undefined = undefined;
console.log('num:', num);

/**
 * class Site 一个类
 * function name 方法
 */
class Site {
    name(str: string = 'glk'): void {
        console.log(str)
    }
}
// 实例化
let obj = new Site();
obj.name();
