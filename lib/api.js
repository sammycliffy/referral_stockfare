import axios from 'axios';
import { base_url } from '../lib/constants';
import user from "../lib/helpers/user_model";

const http = () => axios.create({
    baseURL: base_url,
});

export const auth = () => axios.create({
    baseURL: base_url,
    headers: {
        Authorization: "Bearer " + user.userData().token
    },
});
export default {
    http,
    async apiCalling(url, data) {
        return http().post(url, data).then((response) => {
            if (response.status === 200) {
                return response;
            }
        }).catch(error => {
            return error.response;
        })
    },
    async register(data) {
        return http().post('api/v1/referral/signup/', data).then((response) => {

            if (response.status === 200) {
                return response;
            }
        }).catch((error) => {
            return error.response
        })
    },

    async apiGetting(url, data) {
        return auth().get(url + data).then((response) => {

            if (response.status === 200) {
                return response;
            }
        }).catch(error => {
            console.log(error.response);
            return error.response;
        })
    },



}