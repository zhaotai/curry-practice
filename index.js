'use strict';

const support = require('./support');
const split = support.split;
const map = support.map;
const filter = support.filter;
const match = support.match;
const reduce = support.reduce;
const _keepHighest = support._keepHighest;
const slice = support.slice;

const words = split(" ");
const sentence = map(words);
const matchQs = match(/q/i);
const filterQs = filter(matchQs);
const max = reduce(_keepHighest, -Infinity);
const take = slice(0);

console.log(words("a b c"));
console.log(sentence(["a bc d e", "e d s l"]));
console.log(filterQs(['quick', 'query', 'quit', 'over']));
console.log(max([-3,2,5,3,4,87,12,58,3,2]));
console.log(slice(1)(3)([1,2,3,4,5]));
console.log(take(2)([1,2,3,4,5]));
