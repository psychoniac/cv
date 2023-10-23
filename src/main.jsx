import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.scss'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Projets from './pages/projets'
import Contact from './pages/contact'
import Error from './pages/error'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/projets' element={<Projets />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
