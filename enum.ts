/*
    枚举类型
        计算和初始化
 */

// 计算和初始化
const getValue = () => 0;

enum List {
    A = getValue(),
    B = 2,
    C
}

let a:List = List.A;
let b:List = List.B;
let c:List = List.C;

console.log('a:', a);
console.log('b:', b);
console.log('c:', c);


