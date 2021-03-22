import Axios from 'axios';

const KEY = 'AIzaSyDMzetqnQIUFWla6OUtprnV4VN7NRXpMvM';

export default Axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
