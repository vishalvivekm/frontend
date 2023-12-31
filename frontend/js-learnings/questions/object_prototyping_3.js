const shape = {
    height: 5,
    width: 4,
    calculateArea() {
        return 0;
    }
};

const rectangle = Object.create(shape)
rectangle.calculateArea = function () {
    return this.height * this.width;
}

const triangle = Object.create(shape)
triangle.calculateArea = function() {
    return 0.5 * this.height * this.width;
};

console.log(rectangle.calculateArea());
console.log(triangle.calculateArea());

/*
*
* const shape = {
  height: 5,
  width: 4,
  calculateArea() {
  return 0;
  }
};

const rectangle = Object.create(shape)
  rectangle.calculateArea = function () {
    return this.height * this.width;
  }

const triangle = Object.create(shape)
  triangle.calculateArea = function() {
    return 0.5 * this.height * this.width;
  };

console.log(rectangle.calculateArea());
console.log(triangle.calculateArea());

* */