import axios from "axios";

// const API_URL = "https://api.escuelajs.co/api/v1/products";

export const fetchProducts = async () => {
    const response = await axios.get("https://api.escuelajs.co/api/v1/products")
    return response
};

export const fetchProduct = async (id: string) => {
    const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
    return response
};
