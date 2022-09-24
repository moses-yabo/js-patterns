const instance = null;

class Car {
  constructor(doors, engine, color) {
    if (!instance) {
      this.doors = doors;
      this.engine = engine;
      this.color = color;
      instance = this;
    } else {
      return instance;
    }
   
  }
}
let cvx = new Car(4,"bmw","grey");
console.log(cvx);