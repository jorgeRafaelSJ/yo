import axios from 'axios';

const getCatPosts = () => {
    return axios.get('https://www.reddit.com/r/cats/top/.json?limit=20');
}

export default {
    getCatPosts,
}