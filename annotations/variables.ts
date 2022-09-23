let apples: number = 5;  /** number annotation */
let oranges = 4;  /** number type inferred by Typescript */
let speed: string = 'fast';  /** string annotation */
let hasName: boolean = true;  /** boolean annotation */
let nothingMuch: null = null;  /** null annotation  */
let nothing: undefined = undefined; /** undefined annotation */

let now: Date = new Date();  /** Date annotation of built in date object. */

let colors: string[] = ['red', 'yellow', 'blue'];  /** Array of strings annotation. */
let myNumbers: number[] = [1,2,3];  /** Array of numbers annotation. */
let truths: boolean[] = [true, true, false];  /** Array of booleans annotation. */

class Car {

}
/** class annotation of type Car */
let car: Car = new Car();

/** object literal annotation */ {}
let point: {x: number; y: number} = {
  x: 10,
  y: 20
}

/** 
 * Function annotation to variable.
 * This function will contain an argument of i which is of type number and 
 * will not return anything which is indicated by void.
 * The whole function annotation is what is on the left side of the = sign.
 * The actual implentation of the function is on the right side of the = sign.
 * 
 */
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
};

/** 
 * When to use annotations. 
 * 1) Function that returns the 'any' type.
 */
const json = '{"x": 10, "y": 20}';
/** This will return a type of any. */
const coordinates = JSON.parse(json);
/** To avoid returning a type of any we add the object literal syntax to the variable declaration. */
const coordinates2: {x: number; y: number} = JSON.parse(json);
console.log(coordinates);  // {x: 10, y: 20};

/** 2) When we declare a variable without assigning it a value. */
let words = ['red', 'green', 'blue'];
// let foundWord; // This will produce a type of any.
let foundWord: boolean;  // Use an annotation to avoid the type inference assignment of any.

for (let i=0; i<words.length; i++ ) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

/** 3) Variable whose type cannot be inferred correctly. */
let numbers = [-10, -1, 10];
let numberAboveZero: boolean | number = false; /** boolean or number annotation */

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}