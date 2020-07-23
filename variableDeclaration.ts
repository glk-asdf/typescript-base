/*
    变量声明
    变量是一种方便的占位符；
    用于引用计算机内存地址；
    可以把变量看做存储数据的容器；
    变量声明的格式：
        let [变量名]: [类型] = 值;
        let [变量名]: [类型];
        let [变量名] = 值;
        let [变量名];
    类型断言：
        <类型>值
        值 as 类型
 */


let str: string = '1';
// 通过类型断言指定 str 的值为 any 类型，就可以赋给 str2
let str2: number = <any> str;

console.log('str:', typeof str);
console.log('str2:', typeof str2);
