// Дизайн паттерн, создается отдельный общий класс, который меняет внутренние состоянии
// других классов, вся логика находится на верхнеуровневым классе

class Light {
  constructor(light) {
    this.light = light
  }
}

class RedLight extends Light {
  constructor() {
    super('red')
  }

  sign() {
    return 'STOP'
  }
}

class YellowLight extends Light {
  constructor() {
    super('yellow')
  }

  sign() {
    return 'BE CAREFULL'
  }
}

class GreenLight extends Light {
  constructor() {
    super('green')
  }

  sign() {
    return 'RIDE'
  }
}

class TrafficLight {
  constructor() {
    this.states = [
      new GreenLight(),
      new YellowLight(),
      new RedLight()
    ]
    this.current = this.states[0]
  }

  change() {
    const total = this.states.length
    let index = this.states.findIndex(light => light === this.current)
    if (index + 1 < total) {
      this.current = this.states[index + 1]
    } else {
      this.current = this.states[0]
    }
  }

  sign() {
    return this.current.sign()
  }
}

const traffic = new TrafficLight()
console.log(traffic.sign());
traffic.change()
console.log(traffic.sign());
traffic.change()
console.log(traffic.sign());
traffic.change()
console.log(traffic.sign());
traffic.change()
console.log(traffic.sign());
traffic.change()
console.log(traffic.sign());
