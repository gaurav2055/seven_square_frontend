import React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { testApi } from "../../../axios";

import "./Testimonials.css";
import NavBar from "../Navbar/NavBar";
import Alert from "../../Alert/alert";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../Firebase/FBInit";
import { useNavigate } from "react-router-dom";

function Testimonials() {
	const [testimonials, setTestimonials] = useState([]);
	const [reload, setReload] = useState(true);
	const [isSubmitSuccessful, setIsSubmitSuccessful] = useState({});
	const [loader, setLoader] = useState(false);
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	useEffect(() => {
		const getTestimonials = async () => {
			setLoader(true);
			onAuthStateChanged(auth, async (user) => {
				if (user && user?.email) {
					try {
						const response = await testApi.get("/getTestimonials");
						setTestimonials(response.data.message);
					} catch (error) {
						// console.log(error.response.data.message);
						setLoader(false);
						alert(error.response.data.message);
					}
				} else {
					navigate("/admin");
				}
			});

			setLoader(false);
		};
		getTestimonials();
	}, [reload]);

	useEffect(() => {
		reset();
	}, [isSubmitSuccessful]);

	const deleteTestimonial = async (id) => {
		setLoader(true);
		try {
			const response = await testApi.delete(`/deleteTestimonial?id=${id}`);
			// console.log(response);
			setLoader(false);
			setReload(!reload);
		} catch (error) {
			setLoader(false);
			// console.log(error.response.data.message);
			alert(error.response.data.message);
		}
	};

	const addTestimonial = async (data) => {
		// console.log(data);
		setLoader(true);
		try {
			// console.log(data);
			const response = await testApi.post("/addTestimonial", data);
			// console.log(response);
			setReload(!reload);
			setLoader(false);
			setIsSubmitSuccessful(data);
		} catch (error) {
			setLoader(false);
			// console.log(error.response.data.message);
			alert(error.response.data.message);
		}
	};

	return (
		<>
			<NavBar />
			{loader && <Alert />}
			<div className=' headings container mt-5'>
				<h1>Testimonials</h1>
				<h5 className='text-muted' style={{ fontWeight: "normal" }}>
					View, Add & delete Testimonials here
				</h5>
				<hr />
			</div>
			<div className='container py-2'>
				<h4>Add Testimonial</h4>
				<div className=' mb-3'>
					<form onSubmit={handleSubmit(addTestimonial)}>
						<input type='text' className='form-control my-3' placeholder='Name' {...register("name", { required: "Required" })} />
						{errors.name && <p className='validation'>{errors.name.message}</p>}
						<textarea type='text' className='form-control my-3' placeholder='Review' {...register("testimonial", { required: "Required" })} />
						{errors.testimonial && <p className='validation'>{errors.testimonial.message}</p>}
						<button className='btn btn-primary'>Submit</button>
					</form>
				</div>
			</div>
			<div className='container pt-4'>
				<h4>View & delete Testimonials here</h4>
				<hr />
				<table className='table'>
					<thead className='table-dark'>
						<tr>
							<th scope='col'>#</th>
							<th scope='col'>Name</th>
							<th scope='col'>Review</th>
							<th scope='col'>Delete</th>
						</tr>
					</thead>
					<tbody>
						{testimonials.map((test, index) => {
							return (
								<tr key={index}>
									<th scope='row'>{index + 1}</th>
									<td>{test.name}</td>
									<td>{test.testimonial}</td>
									<td>
										<button className='btn btn-danger btn-sm' onClick={() => deleteTestimonial(test.id)}>
											Delete
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
}

export default Testimonials;
