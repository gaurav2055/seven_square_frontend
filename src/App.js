import React from "react";
import LandingPage from "./Components/LandingPage/LandingPage";

import PropertyListingPage from "./Components/PropertyListingPage";
import OnClickProperty from "./Components/OnClickProperty/index";
import Login from "./Components/admin/Login/login";
import Properties from "./Components/admin/Properties/Properties";
import Users from "./Components/admin/Users/Users";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./Components/ServicesComponent/Services";

const App = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='/home' element={<LandingPage />} />
					<Route path='/properties' element={<PropertyListingPage />} />
					<Route path='/services1' element={<Services />} />
					<Route path='/property-details' element={<OnClickProperty />} />
					<Route path='/admin-login' element={<Login />} />
					<Route path='/admin-properties' element={<Properties />} />
          <Route path='/admin-users' element={<Users />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
