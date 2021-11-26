import React from 'react'
import { render } from 'react-dom'
import { Application } from './App'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/index.scss'

function renderReturnsPlugin () {
  const appRoot = document.querySelector('#rx-config')
  if (!appRoot) return
  const data = appRoot.dataset
  render(<Application {...data} />, appRoot)
}

renderReturnsPlugin()
