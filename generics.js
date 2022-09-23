var ArrayOfNumber = /** @class */ (function () {
    function ArrayOfNumber(collection) {
        this.collection = collection;
    }
    ArrayOfNumber.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfNumber;
}());
var ArrayOfStrings = /** @class */ (function () {
    function ArrayOfStrings(collection) {
        this.collection = collection;
    }
    ArrayOfStrings.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfStrings;
}());
/**
 * Generic class generalized from the classes above.
 * The <T> generic name is by convention.
 * Think of it as an argument to the class.
 */
var ArrayOfAnything = /** @class */ (function () {
    function ArrayOfAnything(collection) {
        this.collection = collection;
    }
    ArrayOfAnything.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfAnything;
}());
// const strArray = new ArrayOfAnything<string>(['a', 'b', 'c']);
/**
 * Typescript infers the generic of <string> from the argument to the class.
 * Mouse over of the classname will show it knows what kind of array is being passed in.
 */
var strArray = new ArrayOfAnything(['a', 'b', 'c']);
console.log(strArray.get(1)); // b
/** Example of generics with functions */
function printStrings(arr) {
    for (var i = 0; arr.length; i++) {
        console.log(arr[i]);
    }
}
function printNumbers(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function printAnything(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printAnything(['a', 'b', 'c']);
