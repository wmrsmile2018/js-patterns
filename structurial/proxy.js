function netWorkFetch(url) {
  return `${url} - Ответ с сервера`
}

const cache = new Set()
const proxiedFetch = new Proxy(netWorkFetch, {
  apply(target, thisArg, args) {
    const url = args[0]
    if (cache.has(url)) {
      return `${url} - Ответ из кэша`
    } else {
      cache.add(url)
      return Reflect.apply(target, thisArg, args)
    }
  }
})

console.log(proxiedFetch('angular.io'));
console.log(proxiedFetch('react.io'));
console.log(proxiedFetch('angular.io'));



////////////////////////////////////////////////////////////////////////////////

const validator = {
  get(target, prop) {
    return prop in target ? target[prop] : `Поля ${prop} в объекте нет`
  },

  set(target, prop, value) {
    if (value.length > 2) {
      Reflect.set(target, prop, value)
    } else {
      console.log(`Длинна должна быть больше 2 символов, Сейчас ${value.length}`);
    }
  }
}

const form = {
  login: 'tester',
  password: '12345'
}

const formProxy = new Proxy(form, validator)
console.log(formProxy.password = '1');
console.log(formProxy);


function log(message) {
  console.log('Log: ', message);
}

const proxy = new Proxy(log, {
  apply(target, thisArg, argArray) {
    if (argArray.length === 1) {
      Reflect.apply(target, thisArg, argArray)
    } else {
      console.log('Количество аргументов не совпадает');
    }
  }
})

proxy('Custome message')
proxy('Custome message', 'Custome message')
proxy()
