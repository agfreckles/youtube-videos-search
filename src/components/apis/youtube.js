import axios from 'axios';
const KEY = 'AIzaSyCoOLKPlGRAeDR_cRIVI1nOv8cYo7oJzT4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})