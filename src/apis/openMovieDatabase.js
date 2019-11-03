import axios from 'axios';

export default axios.create({
  baseURL: 'http://www.omdbapi.com',
});

//http://www.omdbapi.com/?apikey=320de091/&s=superman
