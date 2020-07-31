/*
    命名空间
    命名空间的目的是解决重名问题
    命名空间定义了标识符的可见范围，一个标识符可在多个命名空间中定义，在不同的命名空间中互不相关
    在一个新的命名空间中可定义任何标识符，不会与任何已有的标识符发生冲突
    namespace 定义命名空间，将内部变量输出至外部，使用 export
        namespace SomeNameSpaceName {
            export interface SomeInterfaceName {}
            export class SomeClassName {}
        }
        SomeNameSpaceName.SomeClassName
    嵌套命名空间
        namespace namespaceName1 {
            export namespace namespaceName2 {
                export class className {
                }
            }
        }
 */

namespace SomeNameSpaceName {
    export interface SomeInterfaceName {}
    export class SomeClassName {}
    let a: string = 'hello'
    export function disp (): void {
        console.log('a:', a)
    }
}
SomeNameSpaceName.disp();

namespace Runoob {
    export namespace InvoiceApp {
        export class Invoice {
            public calculateDiscount(price: number) {
                return price * .40;
            }
        }
    }
}

let invoice: Runoob.InvoiceApp.Invoice = new Runoob.InvoiceApp.Invoice();
console.log('invoice.calculateDiscount(10):', invoice.calculateDiscount(10));
