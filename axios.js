import axios from 'axios'

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
    config.headers = { 'Authorization': 'Bearer 9182739812739812738'};

    console.log('req intercepted!')

    return config;
});

axiosInstance.interceptors.response.use(config => config, error => {
    console.log('intercepted!');
})

export default axiosInstance;
