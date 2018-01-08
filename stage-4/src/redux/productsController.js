import axios from 'axios';

// must export the getAllProducts function
export const getAllProducts = function() {
    return axios.get("https://practiceapi.devmountain.com/products/")
    .then(response => response.data);
}