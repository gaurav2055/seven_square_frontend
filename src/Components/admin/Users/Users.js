import React from "react";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../Firebase/FBInit";

import NavBar from "../Navbar/NavBar";

function Users() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		const getUsers = async () => {
			const data = await getDocs(collection(db, "user"));
			setUsers(
				data.docs.map((doc) => ({
					...doc.data(),
				}))
			);
		};
		getUsers();
	}, []);
	return (
		<>
			<NavBar />
			<div className=' headings container mt-5'>
				<h1>Users</h1>
				<h5 className='text-muted' style={{ fontWeight: "normal" }}>
					View Users here
				</h5>
				<hr />
			</div>
			<div className='container pt-4'>
				<table className='table'>
					<thead className='table-dark'>
						<tr>
							<th scope='col'>#</th>
							<th scope='col'>Name</th>
							<th scope='col'>phone No</th>
							<th scope='col'>Address</th>
							<th scope='col'>Intention</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => {
							return (
								<tr>
									<th scope='row'>{index + 1}</th>
									<td>{user.name}</td>
									<td>{user.phoneNo}</td>
									<td>{user.address}</td>
									<td>{user.intention}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
}

export default Users;
