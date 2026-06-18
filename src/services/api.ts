import axios from "axios";

const API_URL = "https://api.escuelajs.co/api/v1/products";
const SINGLE_PRODUCT_API_URL = "https://api.escuelajs.co/api/v1/products/:id"

export const fetchProducts = async () => {
    try {
        const response = await fetch(API_URL);
        if(!response.ok) {
            return [];
        }
        const data = response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const fetchProduct = async (id: string) => {
    try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
        if(!response.ok) {
            return [];
        }
        const data = response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}


