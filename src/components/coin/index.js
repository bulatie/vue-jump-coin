import Vue from 'vue'
import coin from './coin.vue'
const Constructor = Vue.extend(coin)

export default class {
  constructor (opt) {
    this.options = Object.assign({
      size: 30, // image width
      duration: 300, // ms time to arrive
      url: require('../../assets/coin.png') // something you throw
    }, opt)
  }
  create (subject) { // subject is start element
    let instance = new Constructor({
      el: document.createElement('div'),
      data: {
        options: this.options,
        sujInfo: subject.getBoundingClientRect()
      }
    })
    document.body.appendChild(instance.$el)
    return instance
  }
}
