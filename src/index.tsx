import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import 'jquery'
import 'bootstrap'
import './assets/styles/global.scss'

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
)
