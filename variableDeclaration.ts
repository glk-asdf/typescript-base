/*
    变量声明的格式：
        let [变量名]: [类型] = 值;
        let [变量名]: [类型];
        let [变量名] = 值;
        let [变量名];
    类型断言：
        <类型>值
        值 as 类型
 */

/*
    变量声明
    变量是一种方便的占位符；
    用于引用计算机内存地址；
    可以把变量看做存储数据的容器；
 */
let v1: number = 1;
let v2: number;
let v3 = 3;
let v4;
console.log('v1:', v1);
console.log('v2:', v2);
console.log('v3:', v3);
console.log('v4:', v4);

/*
    当 S 类型是 N 类型的子集，或 N 是 S 类型的子集，则可以断言成功
    与类型转换不同，并没有发生实质的变化（没有做类型转换），仅仅是编译时语法，为编译器提供分析代码的方法
 */
let str: string = '1';
// 通过类型断言指定 str 的值为 any 类型，就可以赋给 str2
let str2: number = <number> <any> str;
let str3: number = str as any;

console.log('str:', typeof str);
console.log('str2:', typeof str2);
console.log('str3:', typeof str3);

/*
    类型推断
    当类型没有给出时，typescript 根据类型推断给出变量类型
 */
let num = 1;
console.log('num:', num);
// num = '2';                 // TS2322 [ERROR]: Type '"2"' is not assignable to type 'number'.

/*
    变量作用域
        全局作用域
            全局变量定义在程序外部，可以在代码的任意位置使用
        类作用域
            类的字段，类变量声明在类中，可以通过类实例化的对象来访问，静态类变量也可以通过类直接访问
        局部变量
            局部变量只能在声明它的代码块中使用
 */
