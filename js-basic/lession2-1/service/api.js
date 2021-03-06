//https://api.themoviedb.org/3/search/movie?query={$movieName}&api_key=cfe422613b250f702980a3bbf9e90716&page=1

const axios = require('axios');
const getApiMovies = async (movieName = 'bat man') => {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=cfe422613b250f702980a3bbf9e90716&page=1`);
    const data = await response.status === 200 ? response.data : [];
    return data;
}

export const api = {
    getApiMovies
}