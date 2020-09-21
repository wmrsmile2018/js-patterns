class Server {
  constructor(ip, port) {
    this.ip = ip
    this.port = port
  }

  get url() {
    return `https://${this.ip}:${this.port}`
  }
}

function aws(server) {
  server.isAws = true
  server.awsInfo = function() {
    return server.url
  }

  return server
}

function azure(server) {
  server.isAzure = true
  server.port += 500
  return server
}

const s1 = aws(new Server('127.0.0.1', 8080))
console.log(s1.isAws);
console.log(s1.awsInfo());

const s2 = azure(new Server('127.0.0.1', 8080))
console.log(s2.url);
console.log(s2.isAzure);
