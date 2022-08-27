const countryInput = document.querySelectorAll(".country-input");
const main = document.querySelector(".main");
const countrySelect = main.querySelector(".country-select");

let countryList = [];

countryList = countryCodes.map((obj) => obj.country);


countryInput.forEach(item => {
    item.onkeyup = e => {
        let userData = e.target.value;

        if (userData) {
            main.classList.add("active");
            arr = countryList.filter((data) => {
                return data.toLowerCase().startsWith(userData.toLowerCase());
            });
            superArr = arr.map((data) => {
                return data = "<li>" + data + "</li>";
            });

            let list = superArr.join("");

            countrySelect.innerHTML = list;
        } else {
            main.classList.remove("active")
        };
    }
})



// let url = 'https://v6.exchangerate-api.com/v6/bea4b32831177324429bcd29/latest/USD';

// fetch(url).then(res => res.json()).then(result => {
  //  console.log(result);
 // })

// let countryId = countryCodes;
// console.log(countryId)

// for(i = 0; i < countryId.length; i++) {
  //  console.log(countryId[i].code)
// }
