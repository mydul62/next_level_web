"use strict";
var firstname = "mahim";
var role = 62;
var isAdmin = false;
var y = undefined;
var z = null;
// Array
var numbers = [1, 2, 3, 4, 5];
// Tuple
var person = ["John", 30, true];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var color = Color.Green;
// Function
function greet(name) {
    return "Hello, ".concat(name, "!");
}
// Object
var user = { name: "John", age: 30 };
// Any
var anyValue = "Hello";
