import axios from 'axios';

export const getCategoryById = async (id) => {
    try {
        const response = await axios.get(`https://lazy-shorts-fish.cyclic.app/categories/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};
