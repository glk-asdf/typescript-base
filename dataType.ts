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
let anyway: any = '任何类型';

// number
let num: number = 123;

// string
let str: string = 'qwer';

// boolean
let bol: boolean = true;

// 数组
let arr: number[] = [1, 2];
let arr0: Array<number> = [1, 2];
let arr1: any[] = [1, 'q'];

// 元组
let arr2: [number, boolean] = [1, true];

// 枚举
enum Color {Red, Green, Blue}
let color: Color = Color.Red;
console.log('color:', color);

// void
function fn (): void {
    console.log('void')
}

