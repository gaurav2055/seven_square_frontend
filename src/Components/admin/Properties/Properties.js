import React from "react";
import { useEffect, useState } from "react";
import NavBar from "../Navbar/NavBar";
import { propApi } from "../../../axios";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../Firebase/FBInit";

function Properties() {
	const [properties, setProperties] = useState([]);
	const [reload, setReload] = useState(true);
	let navigate = useNavigate();
	useEffect(() => {
		const getProps = async () => {
			auth.onAuthStateChanged(async (user) => {
				if (user) {
					try {
						const response = await propApi.get("/getProperties");
						console.log(response.data.message);
						setProperties(response.data.message);
					} catch (error) {
						console.log(error.response.data.message);
					}
				} else {
					navigate("/admin");
				}
			});
		};
		getProps();
	}, [reload]);

	const deleteProp = async (id) => {
		try {
			const response = await propApi.delete(`/deleteProperty?id=${id}`);
			console.log(response);
			setReload(!reload);
		} catch (error) {
			console.log(error.response.data.message);
			alert(error.response.data.message);
		}
	};

	const checkbox = async (box, value, id) => {
		const data = {};
		data[box] = value;
		console.log(data);
		console.log(id);
		try {
			const response = await propApi.put(`/updateProperty?id=${id}`, data);
			alert(response.data.message);
		} catch (error) {
			console.log(error.response.data.message);
			alert(error.response.data.message);
		}
	};

	const editProp = (id) => {
		navigate("/admin-EditProperties", {
			state: id,
		});
	};

	return (
		<>
			<NavBar />
			<div className=' headings container mt-5'>
				<h1>Properties</h1>
				<h5 className='text-muted' style={{ fontWeight: "normal" }}>
					View, delete, edit and add Properties
				</h5>
				<hr />
			</div>
			<div className='subHeader container'></div>
			<div className='container pt-4'>
				<div className='table-responsive'>
					<table className='table'>
						<thead className='table-dark'>
							<tr>
								<th scope='col'>#</th>
								<th scope='col'>Title</th>
								<th scope='col'>Address</th>
								<th scope='col'>Listing Price</th>
								<th scope='col'>Types</th>
								<th scope='col'>Display</th>
								<th scope='col'>Feature</th>
								<th scope='col'>Edit</th>
								<th scope='col'>Delete</th>
							</tr>
						</thead>
						<tbody>
							{properties.map((prop, index) => {
								let check = prop?.display ? "checked" : "";
								let check1 = prop.feature ? "checked" : "";
								return (
									<tr key={index}>
										<th scope='row'>{index + 1}</th>
										<td key={index}>{prop.title}</td>
										<td>{prop.address}</td>
										<td>{prop.price}</td>
										<td>{prop.type}</td>
										<td>
											<input className='form-check-input' type='checkbox' id='plp' defaultChecked={check} onClick={(e) => checkbox("display", e.target.checked, prop.id)} />
										</td>
										<td>
											<input type='checkbox' className='form-check-input' id='feature' defaultChecked={check1} onClick={(e) => checkbox("feature", e.target.checked, prop.id)} />
										</td>
										<td>
											<button className='btn btn-primary btn-sm' onClick={() => editProp(prop.id)}>
												Edit
											</button>
										</td>
										<td>
											<button className='btn btn-danger btn-sm' onClick={() => deleteProp(prop.id)}>
												Delete
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}

export default Properties;
