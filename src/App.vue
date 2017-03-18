<template>
  <div id="app">
    <img src="./assets/logo.png" class="animated" ref=vimg>
    <div class="thrower">

      <button @click="throws($event.target)" v-for="b in bbs" ref=bb>throw</button>
    </div>
    <div>
      <button @click="throwThrowAll">throw all</button>
    </div>
  </div>
</template>

<script>
import Coin from './components/coin/index.js'
let coin = new Coin({
  duration: 500, // ms time to arrive
  url: require('./assets/coin.gif')
})

export default {
  name: 'app',
  data () {
    return {
      bbs: new Array(10)
    }
  },
  methods: {
    throws (origin) {
      let newCoin = coin.create(origin)
      setTimeout(() => {
        newCoin.go(this.$refs.vimg)
      }, 100)
    },
    throwThrowAll () {
      for (let i = 0; i < this.bbs.length; i++) {
        setTimeout(() => {
          this.throws(this.$refs.bb[i])
        }, (Math.random() * 1000 + 100).toFixed(0))
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.thrower {
  margin-top: 200px;
}
</style>
