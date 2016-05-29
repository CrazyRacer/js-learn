/**
 * Created by yupeng on 16/4/4.
 */

//数据类型

/*
 123; // 整数123
 0.456; // 浮点数0.456
 1.2345e3; // 科学计数法表示1.2345x1000，等同于1234.5
 -99; // 负数
 NaN; // NaN表示Not a Number，当无法计算结果时用NaN表示
 Infinity; // Infinity表示无限大，当数值超过了JavaScript的Number所能表示的最大值时，就表示为Infinity
 */

/*
 1 + 2; // 3
 (1 + 2) * 5 / 2; // 7.5
 2 / 0; // Infinity
 0 / 0; // NaN
 10 % 3; // 1
 10.5 % 3; // 1.5
 */

//%是求余数计算


//javascript中 要使用===比较

console.log(NaN === NaN);
var a = isNaN(NaN);
console.log(a);


// []
a = [1, 2, 3.14, 'Hello', null, true];
console.log(typeof a)
a = new Array(1, 2, 3);
console.log(typeof a)
console.log(a[0])


// object

var person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'Beijing',
    hasCar: true,
    zipcode: null
};

console.log(person.name)

var a = 1
console.log(a)



