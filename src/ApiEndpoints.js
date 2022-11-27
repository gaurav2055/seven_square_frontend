import axios from 'axios'

const localBaseUrl = 'http://localhost:8080/'

// export const getAllProperties = `${localBaseUrl}api/property/getProperties`

//Get All Properties
export const getAllProperties = () => {
    const apiEndpoint = `${localBaseUrl}api/property/getProperties`
    return apiEndpoint
    // axios.get(`${localBaseUrl}api/property/getProperties`).then((response)=>{
    //     return response.data
    // })
}

//Get Filtered Properties
export const getFiltredProperties = (actionType, type) => {
    axios.get(`${localBaseUrl}api/property/getProperties?propertyActionType=${actionType}?propertyType=${type}`).then((response)=>{
        return response.data
    })
}

//Get Single Properties
export const getSingleProperties = (propertyId) => {
    axios.get(`${localBaseUrl}api/property/getProperties?id=${propertyId}`).then((response)=>{
        return response.data
    })
}