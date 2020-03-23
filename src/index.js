import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/Layout'

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  ReactDOM.render( < App / > , container)
}

"undefined" != typeof wx && wx.getSystemInfoSync || createApp()
window.onload = function () {
  if (document.documentElement.getBoundingClientRect().width > 750) {
    document.documentElement.style.fontSize = "200px"
  }else{
    document.documentElement.style.fontSize = 13.333333333333334 * 2 + "vw";//设置适配1rem等于100px
  }
  
}