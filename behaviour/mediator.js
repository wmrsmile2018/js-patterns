class User {
  constructor(name) {
    this.name = name
    this.room = null
  }

  send(message, to) {
    this.room.send(message, this, to)
  }

  recieve(message, from) {
    console.log(`${from.name} => ${this.name}: ${message}`);
  }
}

class ChatRoom {
  constructor() {
    this.users = {}
  }

  register(user) {
    this.users[user.name] = user
    user.room = this // mediator
    return this
  }

  send(message, from, to) {
    if (to) {
      to.recieve(message, from)
    } else {
      console.log(this.users);
      console.log(Object.keys(this.users));
      Object.keys(this.users).forEach(key => {
        if (this.users[key] !== from) {
          this.users[key].recieve(message, from)
        }
      });

    }
  }
}

const u1 = new User('User1')
const u2 = new User('User2')
const u3 = new User('User3')

const u11 = new User('User11')
const u21 = new User('User21')
const u31 = new User('User31')

const room = new ChatRoom()

// register(u2).register(u3)
room.register(u11).register(u21).register(u31)
room.register(u2)
room.register(u3)
room.register(u1)

u1.send('Hello1', u2)
u1.send('Hello everyone')
u2.send('hello', u1)
