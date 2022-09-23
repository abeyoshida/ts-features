
/**
 * Creating an interface will create a new type.
 * Properties can be of any type.
 * Capitalize interfaces by convention.
 */
// interface Vehicle {
//   name: string,
//   year: number,
//   broken: boolean,
//   summary(): string  // Property named summary that is a function that returns a string.
// }

/** Simplifying and generalizing the interface. */
interface Reportable {
  summary(): string
}

/** This qualifies as a Reportable type because it has the minimum requirement
 *  of having a summary() function that returns a string.
 */
const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  } 
};

/** Both jrink and oldCivic qualify as Reportable types since they
 *  have summary function that returns a string even though they
 *  represent very different things.
  */
const jrink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar.`
  }
}

// const printVehicle = (vehicle: Vehicle) => {
const printSummary = (item: Reportable) => {
  // console.log(`Name: ${vehicle.name}`);
  // console.log(`Year: ${vehicle.year}`);
  // console.log(`Broken? ${vehicle.broken}`);
  console.log(item.summary());
};

/** When calling printVehicle the object passed in as an argument 
 * must have the properties defined in the Vehicle interface. */
// printVehicle(oldCivic);

/** The refactored printVehicle to printSummary function can still use the
 *  oldCivic data object as an argument without any errors.
 */
printSummary(oldCivic);
printSummary(jrink);