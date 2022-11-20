import React from 'react'
import LandingPage from './Components/LandingPage/LandingPage'

import PropertyListingPage from './Components/PropertyListingPage'
import OnClickProperty from './Components/OnClickProperty/index'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Services from './Components/ServicesComponent/Services'
import Logo from './Components/Logo'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          {/* <Route path='/home' element={<LandingPage />} />
          <Route path='/properties' element={<PropertyListingPage />} />
          <Route path='/services1' element={<Services />} />
          <Route path='/property-details' element={<OnClickProperty />} /> */}
        </Routes>
      </Router>

    </div>
  )
}

export default App