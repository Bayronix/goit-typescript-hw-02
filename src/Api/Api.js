import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

const API_KEY = "I2D2c16iwwIjCTAyZyBcnyzgq5aZ7OGHfcmvU91Ezhk";

export const Api = async (query, page = 1) => {
  try {
    const response = await axios.get(`/search/photos`, {
      params: {
        client_id: API_KEY,
        query: query,
        page: page,
        per_page: 12,
        limit: 50,
        orientation: "landscape",
        width: 400,
        height: 300,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching data from Unsplash API", error);
    throw error;
  }
};
