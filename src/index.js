import 'react-app-polyfill/ie11'
import React from 'react'
import ReactDOM from 'react-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'normalize.css'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
