import axios from "axios"

export const api = axios.create({
    headers: {
        'Content-type': 'application/json'
    },
    baseURL: 'https://back-poster.admlr.lipetsk.ru/',

    responseType: 'json'
})
