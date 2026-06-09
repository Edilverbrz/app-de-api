import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data; // Axios guarda los datos directamente en .data
  } catch (error) {
    console.error("Error en fetchProducts con Axios:", error);
    throw error;
  }
};
