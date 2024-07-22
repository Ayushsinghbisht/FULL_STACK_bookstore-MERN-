import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router} from 'react-router-dom'
import AuthProvider from './Context/AuthProvider.jsx'
import { store } from './store/index.js'
import {Provider} from "react-redux"
// import { Router } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
 <Router>
  <Provider store={store} > 
     <AuthProvider> 
   <div className='dark:bg-slate-900 dark:text-white'>
    <App />
    </div>
      </AuthProvider>
      </Provider> 
 </Router>
</React.StrictMode>
)
