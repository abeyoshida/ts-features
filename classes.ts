/** Capitalized class names by convention. */
class Vehicle {
  // color: string;

  /** 
   * The constructor gets called when the instance of this class is created.
   * The argument passed into the parent class upon creating the instance is
   * passed into the constructor and can be used to initialize a class property.
   */
  // constructor(color: string) {
  //   this.color = color;
  // }

  /**
   * This is equivalent to the above when initializing a class variable.
   */
  constructor(public color: string) {
  }

  // public drive(): void {
  //   console.log('chugga');
  // }

  protected honk(): void {
    console.log('beep');
  }
}

/** 
 * Kar inherits the methods that are in Vehicle.
 * Parent class methods can be overwritten.
 */
class Kar extends Vehicle {
  /**
   * Because this class extends Vehicle and Vehicle requires a string argument to be passed in
   * we use the "super()" method to call Vehicle and pass in what is required.  
   * @param wheels 
   * @param color 
   */
  constructor(public wheels: number, color: string) {
    super(color);
  }

   private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const kar = new Kar(4, 'blue');
console.log(kar.startDrivingProcess());
// console.log(kar.honk());  // Because honk() is protected you cannot call it from outside the child class.

/** Lower case instance name of a class by convention. */
const vehicle = new Vehicle('green');
console.log(vehicle.color);
// vehicle.drive();  // drive() no longer exists in Vehicle.
// vehicle.honk();   // honk() is protected and cannot be called here.