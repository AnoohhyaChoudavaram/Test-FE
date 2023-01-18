

import axios from 'axios'
    let base_url = 'http://10.192.100.128:5000/profile';
    export let getData = () => {
         return axios.get(base_url);
    }
    