/*
    声明文件
    typescript 是 javascript 的超集，实际开发过程中不可避免引用第三方 javascript 插件，虽然可以直接引用，却无法使用类型检查
    为了解决这个问题，需要将这些库里的函数和方法体去掉，只保留导出类型声明，而产生了一个描述 javascript 库和模块信息的声明文件
    通过引用这个声明文件，就可以借用 typescript 的各种特性来使用各种库文件了
    使用 declare 关键字定义类型，帮助判断传入的参数对不对
        declare var jQuery: (selector: string) => any;
    declare 定义的类型只用于编译时的检查，编译结果终会被删除
    声明文件以 .d.ts 为后缀
    声明文件或模块的语法格式如下
        declare module Module_name {}
    引入声明文件语法格式
        ///<reference path= "declare_name.d.ts"/>
 */
