import { request } from '../utils';
import { apiEndpoints } from '../constants'

const getAsyncExampleData = () => {
        request.get(apiEndpoints.exampleApiURL)
                .then(response => {
                        console.log(response);
                })
                .catch(error => {
                        console.log(error);
                });
}

export default {
        getAsyncExampleData
}