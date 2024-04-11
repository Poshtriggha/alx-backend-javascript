const CAR_CLASS = Symbol('CarClass');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const CarClass = this.constructor[CAR_CLASS];
    return new CarClass(this._brand, this._motor, this._color);
  }

  static setCarClass(CarClass) {
    this[CAR_CLASS] = CarClass;
  }
}

export default Car;
