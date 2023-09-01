import axios from 'axios';

const clienteAxios = axios.create({
    baseURL : 'https://back.traveleroweddings.com/api'
});

export default clienteAxios;