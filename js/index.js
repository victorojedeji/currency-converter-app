const countryInput = document.querySelectorAll(".country-input");
const main = document.querySelector(".main");


countryInput.forEach(item => {
    item.onkeyup = (e) => {
        let countryData = e.target.value;
        if (countryData) {
            main.classList.add("active");
        } else {
            main.classList.remove("active")
        }
        console.log(main)
    }
});













// countryInput.onkeyup = (e) => {
//     let countryData = e.target.value;

//     if (countryData) {
//         main.classList.add("active");
//     } else {
//         main.classList.remove("active")
//     }
//     console.log(main)
// }


// let url = 'https://v6.exchangerate-api.com/v6/bea4b32831177324429bcd29/latest/USD';

// fetch(url).then(res => res.json()).then(result => {
  //  console.log(result);
 // })

// let countryId = countryCodes;
// console.log(countryId)

// for(i = 0; i < countryId.length; i++) {
  //  console.log(countryId[i].code)
// }
