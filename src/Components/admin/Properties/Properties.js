import React from "react";
import { useEffect, useState } from "react";
import NavBar from "../Navbar/NavBar";
import { db } from "../../../Firebase/FBInit";
import { collection, getDocs } from "firebase/firestore";

function Properties() {
	// var properties = [];
	const [properties, setProperties] = useState([]);
	useEffect(() => {
		const getProps = async () => {
			const data = await getDocs(collection(db, "properties"));
			setProperties(
				data.docs.map((doc) => ({
					...doc.data(),
				}))
			);
			// console.log(properties);
			// console.log(properties[0].title);
		};
		getProps();
	}, []);

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
			<div className='container pt-4'>
				<table className='table'>
					<thead className='table-dark'>
						<tr>
							<th scope='col'>#</th>
							<th scope='col'>Title</th>
							<th scope='col'>Address</th>
							<th scope='col'>Listing Price</th>
							<th scope='col'>Types</th>
							<th scope='col'>Display</th>
							<th scope='col'>Edit</th>
							<th scope='col'>Delete</th>
						</tr>
					</thead>
					<tbody>
						{properties.map((prop, index) => {
							let check = prop?.display ? "checked" : "";
							return (
								<tr>
									<th scope='row'>{index + 1}</th>
									<td>{prop.title}</td>
									<td>{prop.address}</td>
									<td>{prop.price}</td>
									<td>{prop.type}</td>
									<td>
										<input class='form-check-input' type='checkbox' value='' id='flexCheckChecked' defaultChecked={check} />
									</td>
									<td>
										<button className='btn btn-primary btn-sm'>Edit</button>
									</td>
									<td>
										<button className='btn btn-danger btn-sm'>Delete</button>
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

export default Properties;
