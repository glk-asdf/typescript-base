/*
    数据类型
        any     任意类型
        number  数字类型，双精度64位浮点值
        string  字符串类型
        boolean 布尔类型
                数组
                元组
        enum    枚举
        void    多用于表示方法返回值的类型，表示方法没有返回值
        null    表示对象值缺失
        undefined   用于初始化变量为一个未定义的值
        never   是其他类型（包括 null 和 undefined）的子类型，代表从不会出现的值

        typescript 和 javascript 没有整数类型
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
console.log('color:', Color);

let color1: Color = Color.Red;
console.log('color1:', color1);
console.log('Color[color1]:', Color[color1]);
let color2: Color = Color.Green;
console.log('color2:', color2);
console.log('Color[color2]:', Color[color2]);
let color3: Color = Color.Blue;
console.log('color3:', color3);
console.log('Color[color3]:', Color[color3]);
// 不能使用未枚举的数据
// let color4: Color = Color.Yello;
// console.log('color4:', color4);
// console.log('Color[color4]:', Color[color4]);

// void
function fn(): void {
    console.log('void')
}

let rn: void = fn();
console.log('rn:', rn);

// null 和 undefined 可以赋值给其他类型
let num2: number | undefined = undefined;
console.log('num2:', num2);

// 空校验（strictNullChecks）下，null 和 undefined 只能赋给 void 或本身对应的类型
let vo: void = undefined;
let nul: null = null;
let und: undefined = undefined;
console.log('vo:', vo);
console.log('nul:', nul);
console.log('und:', und);
// 想要可以赋值 undefined 可以使用 |
let num3: number | undefined = undefined;

// never 是其他类型（包括 null 和 undefined）的子类型，代表从不会出现的值
// 意味着 never 只能被 never 类型所赋值
// 在函数中通常表现为抛出异常或无法执行到终点（例如无限循环）
let nev: never = (() => {
    throw new Error('exception')
})();
let num4: number = (() => {
    throw new Error('exception')
})();

function error(): never {
    throw new Error('exception')
}

function loop(): never {
    while (true) {
    }
}


