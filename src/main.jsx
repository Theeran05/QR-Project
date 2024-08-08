import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './MainComponent/App.jsx'
import './index.css'
import './MainComponent-Css/qrcode.css'
import { QRcode } from './MainComponent/QRcode'
// import { User } from './MainComponent/User.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <User /> */}
    <QRcode />
  
  </React.StrictMode>,
)
