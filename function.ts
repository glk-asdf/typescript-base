/*
    函数
    一组一起执行一个任务的语句
    定义的参数调用时必需传入（除非设为可选或默认），而且不能传多余参数（使用剩余参数不能算多传）
        参数
            name: number
        可选参数
            name?: number   可选
        默认参数
            name: number = 0   默认
        剩余参数
            ...arr: string[]

 */

// 参数
function add (a: number, b: number): number {
    return a + b
}
console.log(add(1, 2));
// console.log(add(1));             // An argument for 'b' was not provided.
// console.log(add(1, 2, 3));       // error: TS2554 [ERROR]: Expected 2 arguments, but got 3.

// 可选参数
function buildName(firstName: string, lastName?: string) {
    return firstName + ' ' + (lastName || '')
}
console.log(buildName('lk', 'g'));
console.log(buildName('lk'));
// console.log(buildName('lk', 'g', 'd'));      // error: TS2554 [ERROR]: Expected 1-2 arguments, but got 3.

// 默认参数
// 不能同时设置可选参数和默认参数
function fn (a: string = '') {
    console.log('a:', a)
}
fn();
// function fn2 (a?: string = '') {     // error: TS1015 [ERROR]: Parameter cannot have question mark and initializer.
//     console.log('a:', a)
// }

// 剩余参数
function fn3 (a: string, ...arr: string[]) {
    console.log('a:', a);
    console.log('arr:', arr);
}
fn3('a', 'b', 'c');

// 递归函数
// 递归函数即在函数内调用函数本身
function factorial (num: number): number {
    if (num <= 1) return 1;
    return num * factorial(num - 1)
}
console.log('factorial:', factorial(6));

// lambda 箭头函数
let fn4 = (num: number):number => ++num;
console.log('fn4:', fn4(1));

// 函数重载
// 函数重载仅仅是类型的重载，不是真正意义的重载
// 可能是为了方便阅读参数组合吧
// function fn5 (num: number) {
//     return num + 1
// }
// console.log('fn5(1):', fn5(1));
// function fn5 (str:string) {
//     return str + '1'
// }
// console.log('fn5(\'1\'):', fn5('1'));
function disp(s1:string): void;
function disp(n1: number, s1: string): void;

function disp(x: any, y?: any): void {
    console.log(x);
    console.log(y);
}

disp("abc");
disp(1, "xyz");
