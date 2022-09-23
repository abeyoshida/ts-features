const profile = {
  name: 'abe',
  age: 70,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
}

/**
 * In order to destructure an object you have to mirror the object structure
 * when you add the type definition.
 */
const { age }: {age: number} = profile;
const { coords: { lat, lng}}: {coords: {lat: number, lng: number}} = profile;