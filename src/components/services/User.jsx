import axios from 'axios';
import Cookies from 'js-cookie';

export class User {
    getUser(promise) {
        axios.post(`https://api.tjedankarijera.info:443/api/login`, {
            email: Cookies.get('email'),
            zaporka: Cookies.get('password')
        }).then(function (response) {
            promise(response.data);
        })
    }
    getRang(promise) {
        axios.get(`https://api.tjedankarijera.info:443/api/leaderboard`).then(function (response) {
            promise(response.data);
        })
    }
}