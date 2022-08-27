const countryInput = document.querySelectorAll(".country-input");
const main = document.querySelector(".main");
const countrySelect = main.querySelector(".country-select");







    let arr = [];
    let subArr = [];
    let superArr = [];
    let listData;
    let countryList;

        // let countrys = "<li>" + countryList + "</li>";
        // subArr.push(countrys)
        // listData = subArr.join("");
        // countrySelect.innerHTML = listData;

countryInput.forEach(item => {
    item.onkeyup = (e) => {
        let countryData = e.target.value;

        for (i = 0; i < countryCodes.length; i++) {
            countryList = countryCodes[i].country;
        
            arr.push(countryList);
              
            if (countryData) {
                main.classList.add("active");
                subArr = arr.filter((data) => {
                    return data.toLowerCase().startsWith(countryData.toLowerCase());
                })

                superArr = subArr.map((data) => {
                    return data = "<li>" + data + "</li>";
                });

                
                console.log(superArr)

                countryList = superArr.join("");

                return countrySelect.innerHTML = countryList;


            } else {
                main.classList.remove("active")
            };

        }      
           console.log(countryList)         
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
