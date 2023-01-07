import axios from "axios";

const propApi = axios.create({
	baseURL: "https://asia-south1-square-realtors.cloudfunctions.net/app/api/property",
});

const userApi = axios.create({
	baseURL: "https://asia-south1-square-realtors.cloudfunctions.net/app/api/user",
});

const testApi = axios.create({
	baseURL: "https://asia-south1-square-realtors.cloudfunctions.net/app/api/testimonial",
});

const detailsApi = axios.create({
	baseURL: "https://asia-south1-square-realtors.cloudfunctions.net/app/api/details",
});
export { propApi, userApi, testApi, detailsApi };
