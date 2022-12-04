import axios from "axios";

const propApi = axios.create({
	baseURL: "https://sevensquarerealtors.up.railway.app/api/property",
});

const userApi = axios.create({
	baseURL: "https://sevensquarerealtors.up.railway.app/api/user",
});

const testApi = axios.create({
	baseURL: "https://sevensquarerealtors.up.railway.app/api/testimonial",
});
export { propApi, userApi, testApi };
