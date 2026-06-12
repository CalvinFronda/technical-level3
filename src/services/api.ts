import axios from "axios";

const API_URL = "https://api.escuelajs.co/api/v1/products";

export const fetchProducts = async () => {
  const response = await axios.get(API_URL);

  if (!response) {
    console.error("Failed to Fetch products");
  }
  console.log(response);
  return response;
};

export const fetchProduct = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);

  if (!response) {
    console.error("Failed to fetch product");
  }
  return response;
};
