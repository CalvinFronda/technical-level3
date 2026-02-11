import axios from "axios";

const API_URL = "https://api.escuelajs.co/api/v1/products";

export const fetchProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response;
    } catch (err) {
        console.log('err', err);
    }
};

export const fetchProduct = async (id: string) => {
    try {
        const response = await axios.get(API_URL + `/${id}`);
        return response;
    } catch (err) {
        console.log('err', err);
    }
};
