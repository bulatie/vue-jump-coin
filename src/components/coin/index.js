import coin from './coin.vue'

const JumpCoin = {
  install (Vue) {
    const Constructor = Vue.extend(coin)
    const create = (subject, opt = {}) => { // subject is start element
      let options = Object.assign({
        type: 'coin', // go and clear methods will return this type to distinguish instance
        size: 30, // image width and height size (px unit)
        duration: 300, // duration to arrive (ms unit)
        function: 'ease-out', // the time funciton for moving element
        animate: '', // the animate.css animation for target element when element arrived
        url: '', // dynamic image url (.gif) for something you want to move
        quietUrl: '' // static image url to prevent dynamic image can't render out in duration time
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