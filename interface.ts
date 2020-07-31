/*
    接口
    接口不会转为 javascript，接口是 typescript 的一部分
        interface interface_name {
        }
    声明
    let inf: interface_name = {}
    let inf = <interface_name>{}
    继承
        child_interface_name extends super_interface_name
        child_interface_name extends super_interface1_name, super_interface2_name, super_interface3_name, ..., super_interfaceN_name
 */

interface IPersion {
    firstName: string,
    lastName: string,
    sayHi: () => string,
    sayHi2(),
    sayHi3(): void
}
let customer: IPersion = {
    firstName: 'Tom',
    lastName: 'Hanks',
    sayHi: (): string => 'hi there',
    sayHi2() {},
    sayHi3() {}
}
console.log('customer:', customer);

// 接口和数组
// 在接口中可以设置索引和元素的类型
interface nameList {
    [index: number]: string
}
interface ages {
    [index: string]: number
}
let list1:nameList = ['a', 'b'];
console.log('list1:', list1);
list1 = ['q', 'w'];
console.log('list1:', list1);
list1 = {1: 'f', '3': 'g'};
console.log('list1:', list1);
let ageList: ages = {'asd': 12, 'qwe': 34};
console.log('ageList:', ageList);

// 接口继承
interface Person {
    age: number
}
interface Musician extends Person {
    instrument: string
}

let drummer = <Musician>{};
drummer.age = 27;
drummer.instrument = 'Drums';
console.log('drummer:', drummer);

// 多继承
interface Person2 {
    name: string
}
interface Person3 extends Person, Person2 {
    sex: string
}

let xiaoming: Person3 = {
    age: 18,
    name: 'xiaoming',
    sex: 'man'
}
console.log('xiaoming:', xiaoming);

