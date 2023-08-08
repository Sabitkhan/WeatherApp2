import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// Load the environment variables from .env file
// import 'bootstrap/dist/css/bootstrap.css'
// import 'font-awesome/fonts/'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
