/*
    类
    类描述了对象所共同的属性和方法
        class class_name {
            // 类作用域
        }
    类中包含 字段、构造函数、方法
    字段放在类的最顶层
        class class_name {
            prop_name: string;
            prop_name: string = 'qwe';
            constructor () {}
            getValue () {}
        }
    this 表示当前类实例化的对象
    类的继承
        子类不能继承父类的私有成员（属性和方法）和构造函数
        只能继承一个父类，不支持多个继承，但支持多重继承
    继承类的方法重写
        constructor 重写需要调用父类构造函数
        super 指向父类
        static 关键字
            static 关键字，用于定义类的数据成员（属性和方法）为静态的，静态成员可以通过类名调用
            在声明类之后，单独设置静态属性初始值
            静态属性不是常量，可以被多次修改
            静态成员无法通过实例对象调用,this 指向类
    instanceof
        判断对象是否是由对应 class 实例化得到的
    访问控制修饰符
        可以使用访问控制修饰符保护对类、属性、方法和构造方法的访问
            public (默认) 公有，可以被任意访问
            protected 受保护，可以被其自身，以及其子类和父类访问
            private 私有，只能被其定义所在的类访问
    类和接口
        类可以实现接口，使用关键字 implements
 */

// 实例
class Persion {}
let per1: Persion = new Persion();
console.log('per1:', per1);

// 字段、构造函数、方法
class Car {
    // 字段
    engine: string;
    // 构造函数
    constructor (engine: string) {
        this.engine = engine
    }
    // 方法
    disp(): void {
        console.log('engine is:', this.engine)
    }
}
let car1: Car = new Car('engine 1');
car1.disp();

// 类的继承
// 子类不能继承父类的私有成员（属性和方法）和构造函数
// 只能继承一个父类，不支持多个继承，但支持多重继承
class A {
    name: string;
    constructor (name: string) {
        this.name = name
    }
}
class B {}
class A2 extends A {
    disp(): void {
        console.log('this.name:', this.name)
    }
}
// class A2 extends B {}       // TS2300 [ERROR]: Duplicate identifier 'A2'.
// 实例化调用了父类的构造函数
let a2: A2 = new A2('join');
a2.disp();

// 继承类的方法重写
// constructor 重写需要调用父类构造函数
// super 指向父类
class A3 extends A2 {
    constructor (name: string) {
        super(name);
        console.log('A3 constructor')
    }
    disp(): void {
        // super.disp();
        console.log('A3 disp');
    }
}
let a3: A3 = new A3('glk');
a3.disp();

/*
    static 关键字
        static 关键字，用于定义类的数据成员（属性和方法）为静态的，静态成员可以通过类名调用
        在声明类之后，单独设置静态属性初始值
        静态属性不是常量，可以被多次修改
        静态成员无法通过实例对象调用,this 指向类
 */
class StaticMem {
    static num: number;
    constructor () {
    }
    static disp(): void {
        console.log('this.num:', this.num);
        console.log('num:', StaticMem.num);
    }
}
// 设置初始值
StaticMem.num = 12;
StaticMem.disp();
StaticMem.num = 13;
StaticMem.disp();
let mem: StaticMem = new StaticMem();
// console.log(mem.num);        // error: TS2576 [ERROR]: Property 'num' is a static member of type 'StaticMem'
// mem.disp();      // error: TS2576 [ERROR]: Property 'disp' is a static member of type'StaticMem'

/*
    instanceof
    判断对象是否是由对应 class 实例化得到的
 */
console.log('mem instanceof StaticMem:', mem instanceof StaticMem);

/*
    访问控制修饰符
    可以使用访问控制修饰符保护对类、属性、方法和构造方法的访问
        public (默认) 公有，可以被任意访问
        protected 受保护，可以被其自身，以及其子类和父类访问
        private 私有，只能被其定义所在的类访问
 */
class Encapsulate {
    str1: string = 'hello';
    private str2: string = 'world'
}
let encap: Encapsulate = new Encapsulate();
console.log('encap.str1:', encap.str1);
// console.log('encap.str2:', encap.str2);      // error: TS2341 [ERROR]: Property 'str2' is private and only accessible within class 'Encapsulate'.
class Animal {
    protected name: string;
    constructor (name: string) {
        this.name = name
    }
}
class Rhino extends Animal {
    constructor (name: string) {
        super(name);
        console.log('this.name:', this.name)
    }
    disp () {
        console.log('this.name:', this.name)
    }
    disp2 (name: string = this.name) {
        console.log('name:', name)
    }
}
let rhino: Rhino = new Rhino('rhino');
rhino.disp();
rhino.disp2();
// console.log('rhino.name:', rhino.name);      // error: TS2445 [ERROR]: Property 'name' is protected and only accessible within class 'Animal' and its subclasses.

/*
    类和接口
        类可以实现接口，使用关键字 implements
 */
interface ILoan {
    interest: number
}

class AgriLoan implements ILoan {
    interest: number;
    rebate: number;
    constructor (interest: number, rebate: number) {
        this.interest = interest;
        this.rebate = rebate
    }
    disp (): void {
        console.log('interest is ', this.interest, ', rebate is ', this.rebate);
    }
}
let agr: AgriLoan = new AgriLoan(10, 1);
agr.disp();
