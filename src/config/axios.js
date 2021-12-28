import axios from 'axios';

const client = axios.create({
    baseURL: 'https://trabajo-mcga-server-marc.herokuapp.com/api'
}) 

//http://localhost:4000/api

export default client;