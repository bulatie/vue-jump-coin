<template>
  <transition name="bounce">
    <div class="coin" :style="transformStyle" :class="{'cp_coin__hidden': hiddenCoin}" ref="coin" v-show="isShow">
      <img :src="url" alt="coin" ref="coin" @load="loadImage">
    </div>
  </transition>
</template>
<script>
export default {
  name: 'coin',
  data () {
    return {
      transformStyle: {},
      hiddenCoin: false,
      isShow: false,
      url: ''
    }
  },
  created () {
    this.url = this.options.url
  },
  mounted () {
    let size = this.options.size
    let left = this.sujInfo.left + this.sujInfo.width / 2 - size / 2
    let top = this.sujInfo.top + this.sujInfo.height / 2 - size / 2
    this.$refs.coin.setAttribute('style', `
      width: ${size}px;
      height: ${size}px;
      top: ${top}px;
      left: ${left}px;
    `)
    this.isShow = true
  },
  destroyed () {
    this.$el.remove()
  },
  methods: {
    go (object) { // object is destination
      setTimeout(() => {
        let selfInfo = this.$refs.coin.getBoundingClientRect()
        let objectInfo = object.getBoundingClientRect()
        let size = this.options.size
        let top = objectInfo.top + objectInfo.height / 2 - selfInfo.top - size / 2
        let left = objectInfo.left + objectInfo.width / 2 - selfInfo.left - size / 2
        this.$refs.coin.style.webkitTransition = `${this.options.duration}ms ease-out`
        this.$refs.coin.style.webkitTransform = `translate3d(${left}px, ${top}px, 0px)`
        setTimeout(() => {
          object.classList.remove('tada')
          setTimeout(() => {
            object.classList.add('tada')
          }, 100)
          this.$destroy()
        }, this.options.duration)
      }, 300)
    },
    loadImage () {
      this.hiddenCoin = true
    }
  }
}
</script>
<style>
.coin {
  position: fixed;
  opacity: 1;
  background-image: url('../../assets/coin.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.coin.cp_coin__hidden {
  background: none;
}

.coin img {
  width: 100%;
  height: auto;
}

.bounce-enter-active {
  animation: bounce-in .3s;
}

.bounce-leave-active {
}

@keyframes bounce-in {
  from, 20%, 40%, 60%, 80%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(.9, .9, .9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(.97, .97, .97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}
</style>