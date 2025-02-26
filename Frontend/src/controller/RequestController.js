import axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const api = axios.create({
    baseURL: backendUrl || 'http://localhost:5000',  // API base URL from environment variable
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',  // Default Content-Type
    },
});

// Request Controller Class
class RequestController {
    static async TestAPI() {
        try {
            const response = await api.get("/api/test");
            return response; // Return the full response with status code
        } catch (error) {
            return { status: error.response ? error.response.status : 500, data: "Error" };
        }
    }

    static async TestProtected() {
        try {
            const response = await api.get("/api/protected");
            return response; // Return the full response with status code
        } catch (error) {
            return { status: error.response ? error.response.status : 500, data: "Error" }; // Handle error gracefully
        }
    }

    static async CreateUser(data, config = {}) {
        try {
            const response = await api.post("/api/users/create", data, config);
            return response.data;
        } catch (error) {
            console.error('POST Request Error: ', error);
            // throw error;
        }
    }

    static async LoginUser(data, config = {}) {
        try {
            const response = await api.post("/api/users/login", data, config);
            return response; // Return full response including status and data
        } catch (error) {
            console.error('POST Request Error', error);
            return { status: error.response ? error.response.status : 500, data: "Error" };
        }
    }
}

export default RequestController;