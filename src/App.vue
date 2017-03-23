<template>
  <div id="app">
    <p>pros: <span v-text="pros"></span> <span class="vs">vs</span> cons: <span v-text="cons"></span></p>
    <img src="./assets/logo.png" ref=vimg>
    <div class="thrower">

      <button @click="throws($event.target)" v-for="b in bbs" ref=bb>throw</button>
    </div>
    <div>
      <button @click="throwThrowAll">throw all</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import JumpCoin from './components/coin/index.js'

// import JumpCoin from 'dist/vue-jump-coin.min.js'

Vue.use(JumpCoin)

export default {
  name: 'app',
  data () {
    return {
      bbs: new Array(10),
      pros: 0,
      cons: 0
    }
  },
  methods: {
    throws (origin) {
      let opts = [{
        animate: 'jello',
        function: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
        quietUrl: require('./assets/coin.png'),
        url: require('./assets/axe.png'),
        duration: 500
      }, {
        animate: 'tada',
        quietUrl: require('./assets/coin.png'),
        url: require('./assets/coin.gif'),
        duration: 500
      }]
      let newCoin = this.$jumpcoin.create(origin, opts[Math.round(Math.random())])
      setTimeout(() => {
        newCoin.go(this.$refs.vimg, (animate) => {
          if (animate === 'tada') {
            this.pros +=1
          }
          if (animate === 'jello') {
            this.cons +=1
          }
        })
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
.vs {
  color: red;
}
</style>
