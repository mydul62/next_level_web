"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
{
    // spread operator
    // Rest operator
    // destructuring
    var bros1 = ["mir", "rahard", "nahid"];
    var bros2 = ["mira", "raharda", "nahida"];
    // 
    var allbros1 = __spreadArray(__spreadArray([], bros1, true), bros2, true);
    console.log(allbros1);
}
