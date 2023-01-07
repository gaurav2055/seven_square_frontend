import React, { useEffect, useState } from "react";

import About from "../About/About";
import Hero from "../Hero/Hero";
import Services from "../ServicesComponent/Services";
import Footer from "../Footer/Footer";
import Associates from "../Associates/Associates";
import TestimonialCard from "../Testimonials/TestimonialCard";
import FeaturedProperties from "../FeaturedProperties/fp_index";
import { detailsApi } from "../../axios";
import LandingPageHeader from "../Header/LandingPageHeader";

const LandingPage = () => {
	const [detail, setDetail] = useState({});
	useEffect(() => {
		const setData = async () => {
			try {
				const response = await detailsApi.get("/getDetails");
				setDetail(response.data.message);
			} catch (error) {}
		};
		setData();
	}, []);

	return (
		<>
			<div className='nav-bar-comp'>
				<LandingPageHeader />
			</div>
			<section className='HeroComponent'>
				<Hero details={detail} />
			</section>

			<section className='AboutComponent'>
				<About details={detail} />
			</section>

			<div className='FeaturedProperty-section'>
				<FeaturedProperties details={detail} />
			</div>

			<section className='ServicesSection my-5'>
				<Services details={detail} />
			</section>

			<section className='partners'>
				<Associates details={detail} />
			</section>

			<div className='testimonials-section'>
				<TestimonialCard details={detail} />
			</div>

			<section className='footer'>
				<Footer />
			</section>
		</>
	);
};

export default LandingPage;
