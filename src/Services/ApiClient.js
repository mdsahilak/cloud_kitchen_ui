import axios from "axios";

// const API_BASE_URL = "http://localhost:5197"
const API_BASE_URL = 'https://w2000528-api.azurewebsites.net/api/'

const token = localStorage.getItem('token');

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: { Authorization: `Bearer ${token}` },
});

apiClient.interceptors.response.use((response) => response, (error) => {
    if (error.response.status === 401) {
        window.location = '/login';
    }
});

export default apiClient