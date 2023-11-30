import axios from 'axios';

export const getProducts = async () => {
    try {
        const response = await axios.get(`https://lazy-shorts-fish.cyclic.app/products`);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

export const getProductDetail = async (id) => {
    try {
        const response = await axios.get(`https://lazy-shorts-fish.cyclic.app/products/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};
