// // import thư viện node-fetch phiên bản 3.x;
// import fetch from 'node-fetch';

// // url api : https://api.covid19api.com/summary

// const getApiCovid = async () => {
//     const response = await fetch('https://api.covid19api.com/summary'); // fetch là 1 promise
//     const data = await response.json();
//     return data; //trả vê 1 prommise
// }

// const showData = () => {
//     getApiCovid().then(data => console.log(data))
//                 .catch(err => console.log(err));
// } 
// showData();

// import thư viện node-fetch phiên bản 2.6.1
const fetch = require('node-fetch');

const getDataCovid2 = async () => {
    const response = await fetch(`https://api.covid19api.com/summary`);
    const data = await response.json();
    return data;
}

const showData2 = async () => {
    const data = await getDataCovid2();
    console.log(data);
} 
showData2();



