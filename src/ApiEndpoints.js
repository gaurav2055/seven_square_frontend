import axios from "axios";

const localBaseUrl = "http://localhost:8080/";
const devBaseUrl = "https://sevensquarerealtors.up.railway.app/";

// export const getAllProperties = `${localBaseUrl}api/property/getProperties`

//Get All Properties
export const getAllPlpProperties = async () => {
	// const apiEndpoint = `${devBaseUrl}api/property/getProperties`
	// return apiEndpoint
	const response = await axios.get(`${devBaseUrl}api/property/getPlpProperties`);
	return response.data.message;
};

//Get Filtered Properties
export const getFiltredProperties = async (actionType, type) => {
	const response = await axios.get(`${devBaseUrl}api/property/getProperties?propertyActionType=${actionType}?propertyType=${type}`);
	console.log(response.data.message);
	return response.data.message;
};

//Get Single Properties
export const getSingleProperties = async (propertyId) => {
	const response = await axios.get(`${devBaseUrl}api/property/getProperties?id=${propertyId}`);
	return response.data.message;
};
