import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import NavBar from "../Navbar/NavBar";
import "./EditProperty.css";
import { propApi } from "../../../axios";

import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { auth, storage } from "../../../Firebase/FBInit";
import { useLocation, useNavigate } from "react-router-dom";
import Alert from "../../Alert/alert";
import { onAuthStateChanged } from "firebase/auth";

function EditProperty() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
		resetField,
		setValue,
		reset,
	} = useForm();

	const [show, setShow] = useState(false);
	const [urlArray, setUrlArray] = useState([]);
	const [url, setUrl] = useState("");
	const [mainImgRef, setMainImgRef] = useState("");
	const [imgRef, setImgRef] = useState([]);
	const [mImgVal, setMImgVal] = useState(false);
	const [imgVal, setImgVal] = useState(false);
	const [loader, setLoader] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		const setData = async () => {
			setLoader(true);
			onAuthStateChanged(auth, async (user) => {
				if (user && user?.email) {
					if (location.state) {
						// console.log(location.state);
						try {
							const response = await propApi.get(`/getProperty?id=${location.state}`);
							// console.log(response.data.message);
							reset(response.data.message);
							setUrl(response.data.message.mainImg);
							setMainImgRef(response.data.message.mainImgRef);
							setUrlArray(response.data.message.imgArra);
							setImgRef(response.data.message.ImgRef);
						} catch (error) {
							// console.log(error);
						}
					}
				} else {
					// console.log("no user");
					navigate("/admin");
				}
			});
			setLoader(false);
		};
		setData();
		// console.log();
	}, []);

	useEffect(() => {
		if (urlArray.length === 0) {
			setImgVal(true);
		} else {
			setImgVal(false);
		}
	}, [urlArray]);

	const upload = (refer) => {
		// event.preventDefault();
		setLoader(true);
		// console.log(getValues(refer));
		var propImg = getValues(refer);
		propImg = Object.values(propImg);
		// propImg.forEach((img) => {
		// 	uploadBytes(imagesRef, img.file);
		// });
		for (const property in propImg) {
			setShow(true);
			const path = "images/" + propImg[property].name;
			const imagesRef = ref(storage, path);
			const uploadTask = uploadBytesResumable(imagesRef, propImg[property]);

			uploadTask.on(
				"state_changed",
				(snapshot) => {
					const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					// console.log(progress);
					// console.log(typeof progress);
					if (progress === 100) {
						setShow(false);
					}
				},
				(error) => {
					// console.log(error.code);
					setShow(false);
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
						// console.log("File available at", downloadURL);
						if (refer === "mImages") {
							if (downloadURL !== url) {
								await deleteMImg();
								setUrl(downloadURL);
								setMainImgRef(path);
								setMImgVal(false);
								let data = {
									mainImg: downloadURL,
									mainImgRef: path,
								};
								try {
									let response = await propApi.put(`/updateProperty?id=${location.state}`, data);
									// console.log(response.data.message);
								} catch (error) {
									// console.log(error.response.data.message);
								}
							}
						} else {
							setUrlArray((arr) => [...arr, downloadURL]);
							setImgRef((arr) => [...arr, path]);
							setImgVal(false);
						}
					});
				}
			);
			setLoader(false);
			resetField(refer);
			// console.log(typeof urlArray);
		}
	};
	const editProp = async (data) => {
		setLoader(true);
		data.imgArra = urlArray;
		data.mainImg = url;
		data.mainImgRef = mainImgRef;
		data.ImgRef = imgRef;
		delete data.mImages;
		delete data.images;
		// console.log(data);
		try {
			const response = await propApi.put(`/updateProperty?id=${encodeURI(location.state)}`, data);
			// console.log(response);
			alert("property edited");
			window.location.reload();
		} catch (error) {
			// console.log(error.message);
			setLoader(false);
			alert(error.response.data.message);
		}
	};

	const deleteMImg = () => {
		const deleteRef = ref(storage, mainImgRef);
		deleteObject(deleteRef)
			.then(() => {
				// console.log("image was deleted");
			})
			.catch((error) => {
				// console.log(error.message);
			});
	};

	const deleteImg = async (reff, url) => {
		if (urlArray.length === 1) {
			return alert("this is the last image and cannot be delete. Atleast one image required");
		}
		setLoader(true);
		const deleteRef = ref(storage, reff);
		deleteObject(deleteRef).then(() => {
			// console.log("image was deleted");
			// console.log(reff);
			// console.log(url);
			setUrlArray([...urlArray.filter((arr) => arr !== url)]);
			setImgRef([...imgRef.filter((arr) => arr !== reff)]);
			updateAfter([...urlArray.filter((arr) => arr !== url)], [...imgRef.filter((arr) => arr !== reff)]).then((res) => {
				// console.log(res);
			});
		});
	};

	const updateAfter = async (urlArr, reffArr) => {
		let data = {
			imgArra: urlArr,
			ImgRef: reffArr,
		};
		// console.log(data);
		try {
			const response = await propApi.put(`/updateProperty?id=${location.state}`, data);
			// console.log(response);
			setLoader(false);
			return "property edited";
		} catch (error) {
			// console.log(error.message);
			return error.response.data.message;
		}
	};

	return (
		<>
			<NavBar />
			{loader && <Alert />}
			<div className=' headings container mt-5'>
				<h1>Edit Property</h1>
				<h5 className='text-muted' style={{ fontWeight: "normal" }}>
					Add your new properties here
				</h5>
				<hr />
			</div>
			{show && (
				<div className='modal' data-bs-backdrop='static'>
					<div className='modal-dialog modal-dialog-centered'>
						<div className='modal-content no-border'>
							<div className='d-flex justify-content-center'>
								<div className='spinner-border m-4' role='status'>
									<span className='visually-hidden'>Loading...</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
			<div className='container'>
				<form onSubmit={handleSubmit(editProp)}>
					<div className='py-3'>
						<h4 style={{ fontWeight: "normal" }}>Basic</h4>
						{/* <hr /> */}
					</div>
					<div className='row g-3'>
						<div className='col-md'>
							<div className='row g-3'>
								<div className='col-sm'>
									<select className='form-select my-2' {...register("propertyActionType")}>
										<option defaultValue='Buy'>Buy</option>
										<option value='Rent'>Rent</option>
										<option value='New Project'>New Project</option>
									</select>
								</div>
								<div className='col-sm'>
									<select className='form-select my-2' {...register("type")}>
										<option defaultValue='Residential'>Residential</option>
										<option value='Commercial'>Commercial</option>
									</select>
								</div>
							</div>
						</div>
						<div className='col-md'>
							<div className='row g-3'>
								<div className='col-sm'>
									<div className='form-check form-check-inline my-2'>
										<input type='checkbox' className='form-check-input' id='display' {...register("display")} />
										<label className='form-check-label' htmlFor='display'>
											Display in PLP
										</label>
									</div>
								</div>
								<div className='col-sm'>
									<div className='form-check form-check-inline my-2'>
										<input type='checkbox' className='form-check-input' id='feature' {...register("feature")} />
										<label className='form-check-label' htmlFor='feature'>
											Featured Property
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='row g-3 mb-2 pt-2'>
						<div className='col-md form-floating'>
							<input type='text' className='form-control' id='title' placeholder='Title' {...register("title", { required: "Required" })} />
							<label htmlFor='titel'>Title</label>
							{errors.title && <p className='validation'>{errors.title.message}</p>}
						</div>
						<div className='col-md form-floating'>
							<textarea id='Address' className='form-control' placeholder='Address' style={{ resize: "none", height: "5.5rem" }} {...register("address", { required: "Required" })} />
							<label htmlFor='Address'>Address</label>
							{errors.address && <p className='validation'>{errors.address.message}</p>}
						</div>
						<div className='col-md form-floating'>
							<textarea id='About' className='form-control' placeholder='About' style={{ resize: "none", height: "5.5rem" }} {...register("About", { required: "Required" })} />
							<label htmlFor='About'>About</label>
							{errors.About && <p className='validation'>{errors.About.message}</p>}
						</div>
						<div className='col-md form-floating'>
							<input type='number' className='form-control' id='Price' placeholder='Price' {...register("price", { required: "Required" })} />
							<label htmlFor='Price'>Booking Amount</label>
							{errors.price && <p className='validation'>{errors.price.message}</p>}
						</div>
					</div>
					<div className='py-4'>
						<h4 style={{ fontWeight: "normal" }}>Features/Amenites</h4>
						{/* <hr /> */}
					</div>
					<div className='row g-3 mb-2'>
						<div className='col-md'>
							<div className='row g-3'>
								<div className='col-sm form-floating'>
									<input type='number' className='form-control' id='carpetArea' placeholder='carpetArea' {...register("carpetArea", { required: "Required" })} />
									<label htmlFor='carpetArea'>Carpet Area</label>
									{errors.carpetArea && <p className='validation'>{errors.carpetArea.message}</p>}
								</div>
								<div className='col-sm form-floating'>
									<input type='number' className='form-control' id='Story' placeholder='Story' {...register("Story", { required: "Required" })} />
									<label htmlFor='Story'>Story</label>
									{errors.Story && <p className='validation'>{errors.Story.message}</p>}
								</div>
							</div>
						</div>
						<div className='col-md'>
							<div className='row g-3'>
								<div className='col-sm form-floating'>
									<input type='number' className='form-control' id='washroom' placeholder='Washrooms' {...register("washroom", { required: "Required" })} />
									<label htmlFor='washroom'>Washroom</label>
									{errors.washroom && <p className='validation'>{errors.washroom.message}</p>}
								</div>
								<div className='col-sm form-floating'>
									<input type='number' className='form-control' id='bedrooms' placeholder='bedrooms' {...register("bedrooms", { required: "Required" })} />
									<label htmlFor='bedrooms'>bedrooms</label>
									{errors.bedrooms && <p className='validation'>{errors.bedrooms.message}</p>}
								</div>
							</div>
						</div>
					</div>
					<div className='row g-3 mb-2'>
						<div className='col-md'>
							<div className='row g-3'>
								<div className='col-sm form-floating'>
									<select className='form-control' id='Furnished' {...register("Furnished")}>
										<option defaultValue='Furnished'>Furnished</option>
										<option value='SemiFurnished'>Semi Furnished</option>
										<option value='UnFurnished'>Unfurnished</option>
									</select>
									{/* <input type='text' className='form-control' id='Furnished' {...register("Furnished")} /> */}
									<label htmlFor='Furnished'>Furnished Status</label>
								</div>
								<div className='col-sm form-floating'>
									{/* <select className='form-control' id='parkingArea' placeholder='parkingArea' {...register("parkingArea")}>
										<option defaultValue='yes'>Yes</option>
										<option value='no'>No</option>
									</select> */}
									<input type='text' className='form-control' id='parkingArea' placeholder='Parking area' {...register("parkingArea")} />
									<label htmlFor='parkingArea'>Parking area</label>
								</div>
							</div>
						</div>
						<div className='col-md'>
							<div className='row g-3'>
								<div className='col-sm form-floating'>
									{/* <select className='form-control' id='water' {...register("water")}>
										<option defaultValue='yes'>Yes</option>
										<option value='no'>No</option>
									</select> */}
									<input type='text' className='form-control' id='water' {...register("water")} placeholder='Water Availability' />
									<label htmlFor='water'>Water Availability</label>
								</div>
								<div className='col-sm form-floating'>
									{/* <select className='form-control' id='electricity' {...register("electricity")}>
										<option defaultValue='yes'>Yes</option>
										<option value='no'>No</option>
									</select> */}
									<input type='text' className='form-control' id='electricity' {...register("electricity")} placeholder='Electricity Availability' />
									<label htmlFor='electricity'>Electricity Availability</label>
								</div>
							</div>
						</div>
					</div>
					<div className='py-4'>
						<h4 style={{ fontWeight: "normal" }}>Pictures</h4>
						{/* <hr /> */}
					</div>
					<div className='mb-3'>
						<div className='row g-3'>
							<label htmlFor='mImages' className='form-label'>
								Main image
							</label>
							<div className='container'>
								<div className='card m-2' style={{ width: "18rem", height: "10rem" }}>
									<div
										className='btn-close1 imgDele'
										onClick={() => {
											if (window.confirm("Are you sure you want to delete it") === true) {
												setUrl("");
												setMImgVal(true);
											}
										}}></div>
									<img src={url} className='card-img' alt='' style={{ height: "9.9rem" }} />
								</div>
							</div>
							<input className='form-control form-control-lg col-9 m-2' type='file' id='mImages' {...register("mImages", { required: mImgVal })} disabled={url ? true : false} />
							{errors.mImages && <p className='validation'>Required</p>}
							<div className='btn btn-primary m-2 w-25' onClick={() => upload("mImages")}>
								Upload
							</div>
							<label htmlFor='images' className='form-label'>
								Other images
							</label>
							<div className='flex'>
								{urlArray.map((url, index) => {
									return (
										<div className='card m-2' style={{ width: "18rem", height: "10rem" }} key={index}>
											<div className='btn-close1 imgDele' onClick={() => deleteImg(imgRef[index], url)}></div>
											<img src={url} className='card-img' alt='' style={{ height: "10rem" }} />
										</div>
									);
								})}
							</div>
							<input className='form-control form-control-lg col-9 m-2' type='file' id='images' multiple {...register("images", { required: imgVal })} />
							{errors.images && <p className='validation'>Required</p>}
							<div className='btn btn-primary m-2 w-25' onClick={() => upload("images")}>
								Upload
							</div>
							<input type='url' className='form-control' id='ytLink' {...register("ytLink")} />
							<button type='submit' className='btn btn-primary mb-3'>
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}

export default EditProperty;
