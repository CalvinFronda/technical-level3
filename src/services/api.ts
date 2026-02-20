import axios from "axios";

 const API_URL = "https://api.escuelajs.co/api/v1/products";

export const fetchProducts = async () => {
    try{
   const response = await axios.get(API_URL);

    console.log(response);
    return response;
    }catch(e){
    
    console.log(e);
    }

   };


