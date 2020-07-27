/*
    循环语句
    允许多次执行一个语句（或语句组）
    break
    continue
 */

// brack 可以停止循环
// for
for (let i: number = 0, l: number = 10; i < l; i++) {
    console.log('i:', i);
    if (i > 3) break
}

// while
let num :number = 0;
while (num < 10) {
    console.log('num:', num);
    if (num > 3) break;
    num++;
}

// switch
num = 5;
switch (num) {
    case 1:
        console.log('num 1:', num);
        break;
    case 5:
        console.log('num 5:', num);
        break;
    default:
        console.log('num default:', num);
}
num = 6;
// 没有 brack 会执行完 case 后，继续执行 default
switch (num) {
    case 1:
        console.log('num 1:', num);
        break;
    case 6:
        console.log('num 6:', num);
    default:
        console.log('num default:', num);
}

// continue 可以跳至下一轮循环
// for
for (let i: number = 0, l: number = 10; i < l; i++) {
    if (i > 3) continue;
    console.log('i:', i);
}

// while
num = 0;
while (num < 10) {
    num++;
    if (num > 3) continue;
    console.log('num:', num)
}

