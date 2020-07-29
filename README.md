# TypeScript

> javascript 的超集

## 区别

1. typescript 通过类型注释提供编译时的静态类型检查

2. typescript 可处理已有的 javascript 代码，并只对其中的 typescript 代码进行编译

## 注释

* 单行注释（//）

* 多行注释（/* */）

## tsc

> 使用 tsc 命令将 .ts 文件转为 .js 文件

1. 安装 npm install -g typescript

2. 监测转换 tsc dataType.ts --sourcemap --watch

    * --sourcemap 编译参数生成 .map 文件
    
    * --watch 监视模式

## deno

> deno 是 node 的替代品，支持 Typescript，会使用 tsc 引擎转为 js，再使用 v8 引擎运行 js

1. 运行
    
    * deno run xxx.ts

## 注意点

* 类型注释使用的是小写，避免使用大写，造成报错
