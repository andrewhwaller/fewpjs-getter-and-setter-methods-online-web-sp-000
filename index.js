// Add your Circle class here

class Cirle {
  constructor(radius) {
    this.radius = radius;
  }

  const pi = Math.PI

  get diameter() {
    return this.radius * 2
  }

  get circumference() {
    return (this.radius * 2) * pi
  }

  get area() {

  }
}
