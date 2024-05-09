import axios from 'axios';

export const baseURL = 'https://dummyjson.com';

export const fetchProducts = async () => {
  const response = await axios.get(`${baseURL}/products`);
  return response.data;
};
