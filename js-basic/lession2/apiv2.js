// CALL DATA FROM SERVICE
// import thư viện axios
const axios = require('axios');

const getDataCovid = async (city = 'hanoi') => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f5fc29f44ffaac69c13f685362d87153&units=metric&lang=vi`);
    const data = await response.status === 200 ? response.data : [];
    return data;
}

// const showData = () => {
//     getDataCovid('ho chi minh city').then(data => console.log(data))
//                                      .catch(err => console.log(err));
// }
// showData();

const showData2 = async () => {
    const data = await getDataCovid('ho chi minh city');
    console.log(data);
}
showData2();
