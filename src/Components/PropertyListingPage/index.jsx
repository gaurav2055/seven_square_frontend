import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import LandingPageHeader from "../Header/LandingPageHeader";
import plp_header_ic from "../../assets/plp_header_ic.png";
import downArrow_ic from "../../assets/downArrow_ic.png";

import "./index.css";
import "./PropertyListing.css";
import axios from "axios";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase/FBInit";
import LoginModal from "../LoginModal/LoginModal";
import Alert from "../Alert/alert";
import { getAllProperties, getFiltredProperties } from "../../ApiEndpoints";
import { detailsApi, propApi } from "../../axios";

const PropertyListingPage = () => {
	const [propertiesData, setPropertiesData] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [loader, setLoader] = useState(false);
	const navigate = useNavigate();
	const [details, setDetails] = useState({});
	const [alert, setAlert] = useState(false);
	const [alertMsg, setAlertMsg] = useState();

	useEffect(() => {
		const setData = async () => {
			try {
				const response = await detailsApi.get("/getDetails");
				setDetails(response.data.message);
			} catch (error) {}
		};
		setData();
	}, []);

	const localBaseUrl = "http:/localhost:8080/";
	const devBaseUrl = "https://sevensquarerealtors.up.railway.app/";

	useEffect(() => {
		const getProperties = async () => {
			setLoader(true);
			try {
				const response = await propApi.get("/getProperties");
				setPropertiesData(response.data.message);
				setAlert(false);
			} catch (error) {
				setPropertiesData([]);
				setAlert(true);
				setAlertMsg(error.response.data.message);
				setTimeout(() => {
					setAlert(false);
				}, 4000);
			}
			setLoader(false);
		};
		getProperties();
	}, []);

	const OnClickPropertyHandler = (propertyId) => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// console.log(user?.email);
				// console.log(user?.phoneNumber);
				navigate(`/property-details/${propertyId}/${details.phoneNo}`);
			} else {
				setShowModal(true);
			}
		});
	};

	const handleType = async (e, type) => {
		setLoader(true);
		try {
			const response = await propApi.get(`/getPropertiesByType?propertyActionType=${e.target.value}&type=${type}`);
			setPropertiesData(response.data.message);
			setAlert(false);
		} catch (error) {
			setPropertiesData([]);
			setAlert(true);
			setAlertMsg(error.response.data.message);
			setTimeout(() => {
				setAlert(false);
			}, 4000);
		}
		setLoader(false);
	};

	return (
		<div>
			<LandingPageHeader isdark={true} />
			{loader && <Alert />}
			{showModal && <LoginModal setState={setShowModal} />}
			{alert && (
				<div className='alert alert-primary alert-dismissible fade show' role='alert'>
					{alertMsg}
				</div>
			)}
			<div className='headings container mt-4' style={{ color: "#ec3237" }}>
				<p className='heading-1'>{details.detail13 || "You'r Dream Property"}</p>
				<p className='body-1' style={{ fontWeight: "500" }}>
					{details.detail14 || "You'r not buying a home, you'r buying a lifestyle. To buy a nice home is to choose a better way of life."}
				</p>
			</div>

			<div className='plp_menu_main container' style={{ minWidth: "fit-content" }}>
				<div className='plp_menus d-flex justify-content-between align-items-center ps-sm-3 py-3'>
					<div className='plp_ic responsive'>
						{" "}
						<img src={plp_header_ic} alt='plp Header ic' style={{ width: "24px", height: "18px" }} />{" "}
					</div>

					<div className='plp_dropdowns d-flex justify-content-between align-items-center me-auto ms-2 px-3'>
						<div className='d-flex flex-column justify-content-around align-items-start w-100 me-1'>
							<div className='lable mb-2 ps-2'>
								<label htmlFor='dog-names'>Residential</label>
							</div>
							<div className='dropdown'>
								<select
									className='form-select mx-1'
									defaultValue={""}
									onChange={(e) => {
										handleType(e, "Residential");
									}}>
									<option value='' className='dropdown-item' disabled>
										Type
									</option>
									<option className='dropdown-item' value='All'>
										All
									</option>
									<option className='dropdown-item' value='Buy'>
										Buy Property
									</option>
									<option className='dropdown-item' value='Rent'>
										Rent Property
									</option>
									<option className='dropdown-item' value='BuyNew'>
										Buy New Project
									</option>
									<option className='dropdown-item' value='RentNew'>
										Rent New Project
									</option>
								</select>
							</div>
						</div>

						<div className='d-flex flex-column justify-content-around align-items-start w-100 ms-1'>
							<div className='lable mb-2 ps-2'>
								<label htmlFor='dog-names'>Commercial</label>
							</div>
							<div className='dropdown'>
								<select
									className='form-select mx-1'
									defaultValue={""}
									onChange={(e) => {
										handleType(e, "Commercial");
									}}>
									<option value='' className='dropdown-item' disabled>
										Type
									</option>
									<option className='dropdown-item' value='All'>
										All
									</option>
									<option className='dropdown-item' value='Buy'>
										Buy Property
									</option>
									<option className='dropdown-item' value='Rent'>
										Rent Property
									</option>
									<option className='dropdown-item' value='BuyNew'>
										Buy New Project
									</option>
									<option className='dropdown-item' value='RentNew'>
										Rent New Project
									</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='container mt-4'>
				<div className='masonry'>
					{propertiesData.map((val, index) => {
						let desc = String(val.About).substring(0, String(val.About).indexOf("\n") > 0 ? String(val.About).indexOf("\n") : 70);
						// console.log(desc, "===>", val.title, "index ==>", String(val.About).indexOf("\n"));
						return (
							<div className='img-card mb-3' onClick={() => OnClickPropertyHandler(val.id)} key={index} style={{ minHeight: "10rem" }}>
								<img src={val.mainImg} alt='propertyImg' />
								<div className='overlay'>
									<p className='heading-3 px-4 pt-3 mb-0'>{val.title}</p>
									<p className='heading-3 px-4 pt-3 mb-0'> {val.carpetArea} sqft.</p>
									<p className='property body-2  px-4' style={{ maxWidth: "10" }}>
										{" "}
										{/* {String(val.About).substring(0, 200)}{" "} */}
										{desc}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default PropertyListingPage;
