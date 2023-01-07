import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userApi } from "../../../axios";
import { auth } from "../../../Firebase/FBInit";
import Alert from "../../Alert/alert";

import NavBar from "../Navbar/NavBar";

function Users() {
	const [users, setUsers] = useState([]);
	const [loader, setLoader] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		const getUsers = async () => {
			setLoader(true);
			onAuthStateChanged(auth, async (user) => {
				if (user && user?.email) {
					try {
						const response = await userApi.get("/getUser");
						setUsers(response.data.message);
					} catch (error) {
						setLoader(false);
						// console.log(error.response.data.message);
						alert(error.response.data.message);
					}
				} else {
					navigate("/admin");
				}
			});

			setLoader(false);
		};
		getUsers();
	}, []);
	return (
		<>
			<NavBar />
			{loader && <Alert />}
			<div className=' headings container mt-5'>
				<p className='heading-1 mb-1'>Users</p>
				<p className='body-1 text-muted'>View Users here</p>
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
