/**
 * commonJS规范写法，reaquire用于加载模块，而imoprt引入模块中的部分，需与声明一一对应，
 * react通常使用commonJS规范，使用import是在编译时解构效率高，require是在运行时执时，但import最后会被转换为require，如果新标准被统一后还是优先使用import
 */
// var React = require('react')
// var ReactDOM = require('react-dom')
// var AppComponent = require('./components/productBox.js')
// ReactDOM.render(<ProductBox />, document.getElementById('content'))

/**
 *es2015规范写法
 */
import React from 'react'
import ProductBox from './components/productBox.js'
var ReactDOM = require('react-dom')
ReactDOM.render(<ProductBox />, document.getElementById('content'))
