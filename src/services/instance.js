import axios from "axios";

// set the base url for axios
const baseURL = 'https://67f3ed22cbef97f40d2cb280.mockapi.io';

// create an axios instance
const instance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

// export the axios instance
export default instance;