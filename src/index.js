import React from 'react'
import { render } from 'react-dom'
import { Application } from './App'
import 'bootstrap'
import './assets/styles/index.scss'

class RxConfig extends HTMLElement {
  constructor () {
    super()
    this.mountPoint = document.createElement('div')
    this.attachShadow({ mode: 'open' }).appendChild(this.mountPoint)
  }

  static get observedAttributes () {
    return ['lang', 'country', 'user']
  }

  attributeChangedCallback (attrName, oldVal, newVal) {
    if (oldVal !== newVal) {
      this[attrName] = newVal
      this.update()
    }
  }

  connectedCallback () {
    this.lang = this.getAttribute('lang') || ''
    this.country = this.getAttribute('country') || ''
    this.user = this.getAttribute('user') || ''
    this.update()
  }

  update () {
    render(
      <Application lang={this.lang} user={this.user} country={this.country} />,
      this.mountPoint
    )
  }
}

window.customElements.define('rx-config', RxConfig)
