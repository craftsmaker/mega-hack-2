import axios from "axios";

export default axios.create({
	baseURL: "", //url do backend ou ipv4 se for local + porta
	timeout: 500
})