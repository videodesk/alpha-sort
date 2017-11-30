'use strict';

const collator = new Intl.Collator();
const intlCompare = (a, b) => a === b ? 0 : collator.compare(a, b);
const localCompare = (a, b) => a > b ? 1 : a < b ? -1 : 0;
const brokenLocaleCompare = collator.compare('b', 'å') > -1;

const compare = brokenLocaleCompare ? localCompare : intlCompare;

exports.asc = (a, b) => compare(a, b);
exports.desc = (a, b) => compare(b, a);
