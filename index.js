const instance = null;
//Singleton
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

class CarFactory {
  createCar(type){
switch (type) {
  case "civic":
    return new Car(4,"V6","grey");
    case "honda":
      return new Car(2,"v8","red");
}
  }
}


class Suv {
  constructor(doors, engine, color) {
    
      this.doors = doors;
      this.engine = engine;
      this.color = color;
     
    }
   
  }
class SuvFactory{
  createCar(type){
switch (type) {
  case "cx5":
    return new Suv(4,"V6 =cx5","grey");
    case "sante fa":
      return new Suv(2,"v8","red");
}
  }
}
const carFactory = new CarFactory();
const suvFactory = new SuvFactory();

//abstract factory
const autoManufacture = (type,model)=>{

  switch (type) {
      case 'car':
      return carFactory.createCar(model);

      case 'suv':
      return suvFactory.createCar(model);
          
          
  }
};

const cvx =  autoManufacture('suv','cx5');
console.log(cvx);