class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance
    }
    Database.instance = this
    Database.exists = true
    this.data = data
  }

  log() {
    console.log(Database.instance);
    console.log(Database.exists);
  }

  getData() {
    return this.data
  }
}

// const db = new Database('pew pew')
// db.log()
//
// console.log(db);


const mongo = new Database('mongoDB')
console.log(mongo.getData());

const mysql = new Database('MySql')
console.log(mysql.getData());
