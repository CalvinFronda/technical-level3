import axios from "axios";

const API_URL = "https://api.escuelajs.co/api/v1/products";

export const fetchProducts = async () => {
   try {
    // 1. Wait for the network request to complete and get the response object
    const response = await axios.get(API_URL);
    
    // 2. Check if the HTTP status code is successful (200-299)
    // if (!response.ok) {
    //   throw new Error(`HTTP error! Status: ${response.status}`);
    // }
    
    // 3. Wait for the response body to parse into JSON
    const data = response;
    
    console.log(data);
    return data;
  } catch (error) {
    // 4. Handle network errors or parsing errors gracefully
    console.error('Fetch operation failed:', error);
  }

};


export const fetchProductById = async (id:string) => {
   try {
    // 1. Wait for the network request to complete and get the response object
    const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
   
    // 2. Check if the HTTP status code is successful (200-299)
    // if (!response.ok) {
    //   throw new Error(`HTTP error! Status: ${response.status}`);
    // }
    
    // 3. Wait for the response body to parse into JSON
    const data = response;
    
    console.log(data);
    return data;
  } catch (error) {
    // 4. Handle network errors or parsing errors gracefully
    console.error('Fetch operation failed:', error);
  }

};
