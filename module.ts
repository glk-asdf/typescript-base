/*
    模块
    模块的设计理念是可以更换的代码
    模块在其自身的作用域里执行，并不是全局作用域
    两个模块的关系是在文件级别上使用 import 和 export 建立的
    模块使用模块加载器去导入其他的模块，模块加载器的作用是加载当前模块前去查找并执行这个模块的所有依赖的。
    熟知的 javascript 模块加载器有服务于 node 的 commonjs 和服务于 web 的 amd(requirejs)。此外还有 systemjs 和 webpack
 */


