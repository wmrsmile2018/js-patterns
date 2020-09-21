// function Server(name, ip) {
//   this.name = name,
//   this.ip = ip
// }
//
// //расширяем функционал класса
// Server.prototype.getUrl = function() {
//   return `https://${this.ip}:80`
// }


class Server {
  constructor(name, ip) {
    this.name = name
    this.ip = ip
  }

  getUrl() {
      return `https://${this.ip}:80`
  }
}


const aws = new Server('AWS German', '82,21.21.32')
console.log(aws.getUrl());
console.log(aws);
console.log(Server);
