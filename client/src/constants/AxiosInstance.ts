import axios from "axios";
import { BASE_URL } from "./ApiConstants";

const AxiosInstance = axios.create({
	baseURL: BASE_URL,
	timeout: 10 * 1000,
});

export default AxiosInstance;
