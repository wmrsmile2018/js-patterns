//позволяет создавать оболочку для различных интерфейсов чтобы использовать
// разные интерфейсы и алгоритмы в конкретной задаче

class Vehicle {
  whatVehicle() {
    return this.vehicle
  }
  travelTime() {
   return this.timeTaken
  }
}


class Bus extends Vehicle {
  constructor() {
    super()
    this.timeTaken = 10
    this.vehicle = 'bux'
  }
}

class Taxi extends Vehicle {
  constructor() {
    super()
    this.timeTaken = 5
    this.vehicle = 'taxi'
  }
}

class Car extends Vehicle {
  constructor() {
    super()
    this.timeTaken = 3
    this.vehicle = 'car'
  }
}

class Commute {
  travel(transport) {
    return transport.travelTime()
  }

  vehicle(transport) {
    return transport.whatVehicle()
  }
}

const commute = new Commute()

console.log(commute.travel(new Taxi()));
console.log(commute.travel(new Bus()));
console.log(commute.travel(new Car()));


console.log((new Taxi()).travelTime());
