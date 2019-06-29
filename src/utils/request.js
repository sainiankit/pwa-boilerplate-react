import axios from 'axios';

const request = axios.create({
        timeout: 0,
        headers: {'X-Custom-Header': 'foobar'}
});

export default request;