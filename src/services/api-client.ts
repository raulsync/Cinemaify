import axios from 'axios';

//create instances of axios

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '3208edf5a5d8ace2fc7136ce685bfad6',
  },
});
