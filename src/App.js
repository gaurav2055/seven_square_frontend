import React from 'react'
import LandingPage from './Components/LandingPage/LandingPage'

import PropertyListingPage from './Components/PropertyListingPage'
import OnClickProperty from './Components/OnClickProperty/index'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
// import Services from './Components/ServicesComponent/Services'
import Logo from './Components/Logo'
import LoginModal from './Components/LoginModal/LoginModal'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<LandingPage />} />
          <Route path='/properties' element={<PropertyListingPage />} />
          {/* <Route path='/services' element={<Services fromNavBar={true}/>} /> */}
          <Route path='/property-details' element={<OnClickProperty />} />
          {/* <Route path='/login' element={<LoginModal />} /> */}
        </Routes>
      </Router>

    </div>
  )
}

export default App