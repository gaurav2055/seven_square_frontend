import axios from "axios";
import { propApi } from "./axios";

const localBaseUrl = "http://localhost:8080/";
const devBaseUrl = "https://sevensquarerealtors.up.railway.app/";

// export const getAllProperties = `${localBaseUrl}api/property/getProperties`

//Get All Properties
export const getAllProperties = async () => {
	// const apiEndpoint = `${devBaseUrl}api/property/getProperties`
	// return apiEndpoint
	const response = await propApi(`/getProperties`);
	return response.data.message;
};

//Get Filtered Properties
export const getFiltredProperties = async (actionType, type) => {
	const response = await axios.get(`${devBaseUrl}api/property/getProperties?propertyActionType=${actionType}?propertyType=${type}`);
	return response.data.message;
};

//Get Single Properties
export const getSingleProperties = async (propertyId) => {
	const response = await axios.get(`${devBaseUrl}api/property/getProperties?id=${propertyId}`);
	return response.data.message;
};
