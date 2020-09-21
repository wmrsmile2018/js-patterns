class Complaints {
  constructor() {
    this.complaints = []
  }

  reply(complaint) {}

  add(complaint) {
    this.complaints.push(complaint)
    return this.reply(complaint)
  }
}

class ProductComplaints extends Complaints {
  reply({id, custromer, details}) {
    return `Product: ${id}: ${custromer} (${details})`
  }
}

class ServiceComplaints extends Complaints {
  reply({id, custromer, details}) {
    return `Service: ${id}: ${custromer} (${details})`
  }
}

class ComplaintRegistry {
  register(custromer, type, details) {
    const id = Date.now()
    let complaint

    if (type = 'service') {
      complaint = new ServiceComplaints()
    } else {
      complaint = new ProductComplaints()
    }

    return complaint.add({id, custromer, details})
  }
}

const registry = new ComplaintRegistry()

console.log(registry.register('1', 'service', 'pew pew'));
console.log(registry.register('2', 'product', 'pew pew'));
