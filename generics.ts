class ArrayOfNumber {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

/**
 * Generic class generalized from the classes above.
 * The <T> generic name is by convention.
 * Think of it as an argument to the class.
 */
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

// const strArray = new ArrayOfAnything<string>(['a', 'b', 'c']);

/**
 * Typescript infers the generic of <string> from the argument to the class.
 * Mouse over of the classname will show it knows what kind of array is being passed in.
 */
const strArray = new ArrayOfAnything(['a', 'b', 'c']);
console.log(strArray.get(1));  // b

/** Example of generics with functions */
function printStrings(arr: string[]): void {
  for (let i = 0; arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['a', 'b', 'c']);

/** Generic constraints */
class Car {
  print() {
    console.log('I am a car');
  }
}

class House  {
  print()  {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

/**
 * The argument array of type T extends Printable so all it's elements must have all the
 * properties and function required by the Printable interface.  
 */
function printHouseOrCars<T extends Printable> (arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHouseOrCars([new Car, new House]);