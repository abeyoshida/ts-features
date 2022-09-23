// const carMakers =  ['ford', 'toyota', 'chevy'];
const carMakers: string[] = [];
const dates = [new Date(), new Date()];
// const carsByMake = [
//     ['f150'],
//     ['corolla'],
//     ['camaro']
// ];
const carsByMake: string[][] = [];

/** Help with inference when extracting values. */
const car = carMakers[0];
const myCar = carMakers.pop();

/** Prevent incompatible values */
carMakers.push(100);

/** Help with map */
carMakers.map((car: string): string => {
  /** Since we annotated the return value of the function as a string we will get
   *  access to code autocomplete after placing a . after the car variable.
    */
  return car.toLowerCase();
});

/** Flexible types */
// const importantDates = [new Date(), '2030-10-10'];
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2050-10-10');
importantDates.push(new Date());