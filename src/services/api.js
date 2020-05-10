import axios from 'axios';

const api = axios.create({
    baseURL: 'https://espindolaimobiliaria.com.br/api',
    //baseURL: 'https://recketseat-node.herokuapp.com/api',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
});