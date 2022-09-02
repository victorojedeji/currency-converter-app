const countryInput = document.querySelectorAll(".country-input");

const inputOne = document.querySelector("#input-one");
const inputTwo = document.querySelector("#input-two");
const errorTxt = document.querySelector(".error");

const main = document.querySelector(".main");
const countrySelect = main.querySelector(".country-select");

countryList = countryCodes.map((obj) => obj.country);
codeArr = countryCodes.map((obj) => obj.code);
currencyArr = countryCodes.map((obj) => obj.currency);

countryInput.forEach(item => {
    item.onkeyup = e => {
        let userData = e.target.value;

        if (userData !== null) {
            main.classList.add("active");
            arr = countryList.filter((data) => {
                return data.toLowerCase().startsWith(userData.toLowerCase());
            });
            superArr = arr.map((data) => {
                return data = `<li title='${data}'> ${data} </li>`;
            });
            let list = superArr.join("");
            
            countrySelect.innerHTML = list;
            
            clickable()
        } else {
            main.classList.remove("active")
        };
    };
})


 function clickable() {
     let lines = document.querySelectorAll("li");
    lines.forEach((li) => {
        li.setAttribute("onclick", "clicked(this)");
    })
     
}

function clicked(ele) {
   let name = ele.textContent;
    
    if ((inputOne.value !== "") && (inputTwo.value === "")){
        inputOne.value = name;
        }
    
    
    if((inputOne.value.length > 1) && (inputTwo.value.length >= 1)) {
        inputTwo.value = name;
    }
    
    
    if((inputTwo.value !== "") && (inputOne.value === "")){
        errorTxt.textContent = "Input the name of the country you want to change from first!"
        inputTwo.value = "";
        setTimeout(clearErrorMsg, 7000);
    }

    
    let attr = this.event.target.getAttribute("title")
    let objINeed = null;
    countryCodes.map((obj) => {
        if(obj.country === attr) {
            objINeed = obj;
            return objINeed;
        }
    })

    
    

    
    main.classList.remove("active")
};

function clearErrorMsg() {
    errorTxt.textContent = "";
}




// let url = 'https://v6.exchangerate-api.com/v6/bea4b32831177324429bcd29/latest/USD';

// fetch(url).then(res => res.json()).then(result => {
  //  console.log(result);
 // })

// let countryId = countryCodes;
// console.log(countryId)

// for(i = 0; i < countryId.length; i++) {
  //  console.log(countryId[i].code)
// }
