import axios from "axios";

const API_URL = "https://api.escuelajs.co/api/v1/products";

export const fetchProducts = async () => {
    try {
        const { data } = await axios.get(API_URL)
        return data;
    } catch (err) {
        console.error("Failed to fetch products: ", err)
        alert("Something went wrong")
    }
};

export const fetchSingleProducts = async (id: any) => {
    try {
        const { data } = await axios.get(`${API_URL}/${id}`);
        return data;
    } catch (err) {
        console.error("Failed to fetch product: ", err)
        alert("Something went wrong")
    }
}