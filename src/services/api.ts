import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3000/api'
})

//uso do axios para simular requisiçoes http
//utilizando chamadas por exemplo get
//permite utilizar headers, response, etc
