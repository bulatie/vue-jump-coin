import coin from './coin.vue'

const JumpCoin = {
  install (Vue) {
    const Constructor = Vue.extend(coin)
    const create = (subject, opt = {}) => { // subject is start element
      let options = Object.assign({
        size: 30, // image width
        duration: 300, // ms time to arrive
        function: 'ease-out', // the time funciton for something you throw
        animate: '', // the default animate.css animation for target element, default no animation
        quietUrl: '', // png image for something you throw
        url: '', // gif image for something you throw
      }, opt)
      let instance = new Constructor({
        el: document.createElement('div'),
        data: {
          options: options,
          sujInfo: subject.getBoundingClientRect()
        }
      })
      document.body.appendChild(instance.$el)
      return instance
    }
    let exportObj = {
      create: create
    }
    Vue.jumpcoin = Vue.prototype.$jumpcoin = exportObj
  }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(JumpCoin);
}

export default JumpCoin