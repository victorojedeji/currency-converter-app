
let url = 'https://v6.exchangerate-api.com/v6/bea4b32831177324429bcd29/latest/USD';

fetch(url).then(res => res.json()).then(result => {
    console.log(result);
})