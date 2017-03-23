# vue-jump-coin
a plugin that moving a element to a sepcify position with animation for vue.js 2+

[demo](https://bulatie.github.io/vue-jump-coin/)

## Usage
#### install
`npm install vue-jump-coin --save`
#### Quickstart
```javascript
// before start
import JumpCoin from 'vue-jump-coin'
Vue.use(JumpCoin)
```
```javascript
// in your code

let opts = {
  quietUrl: require('path/to/coin.png'),
  url: require('path/to/coin.gif')
}
// the start and target element you need to define
let originElm,
    targetElm
let newCoin = this.$jumpcoin.create(originElm, opts)
setTimeout(() => {
  newCoin.go(targetElm, () => {})
}, 100)
```

#### More
Use animate.css to keep the target element alive
```html
<link rel="stylesheet" href="path/to/animate.css">
```

##### Options

Parameter | Type |Default| Description
--------- | ---- | ------|-----------
size | `number` | `30` | image width and height size (px unit)
duration | `number`| `300` | duration to arrive (ms unit)
function | `string` | `ease-out` | the time funciton for moving element
animate | `string` |  | the `animate.css` animation for target element when element arrived
quietUrl | `string` |  | dynamic image url (.gif) for something you want to move
url | `string` |  | static image url to prevent dynamic image can't render out in duration time

##### Methods

```javascript
/*
* params
*   element<node> create the jumpCoin in a element's center
*   options<object> config for jumpCoin
* return a vue component instance
**/
Vue.jumpcoin.create(element, options)
```

```javascript
/*
* params
*   element<node> move to this element
*   callback<function> apply this callback when jumpCoin arrived target element
**/
jumpCoinInstance.go(element, callback)
```
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# make UMD file for npm package
npm run make
```

## License
MIT