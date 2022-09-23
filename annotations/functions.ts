/**
 * Function annotation with arguments a and b of type number.
 * Following the arguments is an annotation starting with the colon
 * that says the function will return a number.
 */
const add = (a: number, b: number): number => {
  return a + b;
};

const substract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
};

const multiply = function(a: number, b: number): number {
  return a * b;
};

/** A function that has an output of void means it will not return any value. */
const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
}


/**
 * You can destructure an object variable in the argument by replacing the variable with
 * the destructured object.  Then add the colon and an object literal to define the types
 * of the object properties.
 * @param forecast 
 */
 const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}

// const logWeather = (forecast: {date: Date, weather: string}) => {
const logWeather = ({date, weather}: {date: Date, weather: string}) => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);