'use strict';
const R = require('ramda');

// 练习 1
//==============
// 重构使之成为一个 curry 函数

//var words = function(str) {
//  return split(' ', str);
//};

//answer 1
exports.split = R.curry(function(what, x){
  return x.split(what);
});

// 练习 1a
//==============
// 使用 `map` 创建一个新函数，使之能够操作字符串数组
exports.map = R.curry((what, x) => x.map(what));
//var sentences = R.curry(map);


// 练习 2
//==============
// 重构使之成为一个 curry 函数
exports.match = R.curry((what, x) => x.match(what));
exports.filter = R.curry((what, x) => x.filter(what));
/*
var filterQs = function(xs) {
  return filter(function(x){ return match(/q/i, x);  }, xs);
};
*/


// 练习 3
//==============
// 使用帮助函数 `_keepHighest` 重构 `max` 使之成为 curry 函数
exports.reduce = R.curry((what, initialValue, x) => x.reduce(what, initialValue));


// 无须改动:
exports._keepHighest = function(x,y){ return x >= y ? x : y; };

// 重构这段代码:
var max = function(xs) {
  return reduce(function(acc, x){
    return _keepHighest(acc, x);
  }, -Infinity, xs);
};


// 彩蛋 1:
// ============
// wrap array's slice to be functional and curried.
// 包裹数组的 `slice` 函数使之成为 curry 函数
// //[1,2,3].slice(0, 2)
exports.slice = R.curry((begin, end, x) => x.slice(begin, end));
var slice = undefined;


// 彩蛋 2:
// ============
// 借助 `slice` 定义一个 `take` curry 函数，接受 n 个元素为参数。
var take = undefined;
