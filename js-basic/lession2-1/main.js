import {api} from './service/api';
 
const showData = async () => {
    const data = await api.getApiMovies('bat man');
    console.log(data);
}

showData();