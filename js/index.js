const countryInput = document.querySelectorAll(".country-input");

const amount = document.querySelector("#input-field")
const inputOne = document.querySelector("#input-one");
const inputTwo = document.querySelector("#input-two");
const selectedCurrencyOne = document.querySelector("#currency-one");
const selectedCurrencyTwo = document.querySelector("#currency-two");
const selectedCodeOne = document.querySelector("#code-one");
const selectedCodeTwo = document.querySelector("#code-two");

const flagOne = document.querySelector("#flag-one");
const flagTwo = document.querySelector("#flag-two");

const errorTxt = document.querySelector(".error");

const main = document.querySelector(".main");
const countrySelect = main.querySelector(".country-select");
const convertBtn = document.querySelector(".convert-btn");





countryList = countryCodes.map((obj) => obj.country);


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
    let attr = this.event.target.getAttribute("title");
    let objINeed = null;
    countryCodes.map( obj => {
        if(obj.country === attr) {
            objINeed = obj;
            return objINeed;
        }
    });
    
    
    if (((inputOne.value !== "") && (inputTwo.value === ""))) {
        inputOne.value = attr;
        selectedCurrencyOne.textContent = objINeed.currency;
        selectedCodeOne.textContent = objINeed.code; 
        selectedCodeOne.setAttribute('title', `${objINeed.code}`)

        if(inputOne.value === "") {
            flagOne.style.display = "none";
        }else flagOne.setAttribute("src", `https://countryflagsapi.com/svg/${objINeed.flag}`);

        errorTxt.textContent = "";
        }
    
    
    if((inputOne.value.length > 1) && (inputTwo.value.length >= 1)) {
        inputTwo.value = attr;
        selectedCurrencyTwo.textContent = objINeed.currency;
        selectedCodeTwo.textContent = objINeed.code;

        if(inputTwo.value === "") {
            flagTwo.style.display = "none";
        }else flagTwo.setAttribute("src", `https://countryflagsapi.com/svg/${objINeed.flag}`)


    }
    
    
    if((inputTwo.value !== "") && (inputOne.value === "")){
        errorTxt.textContent = "Input the name of the country you want to change from first!"
        inputTwo.value = "";
        setTimeout(clearErrorMsg, 7000);
    }
    main.classList.remove("active")
};

function clearErrorMsg() {
    errorTxt.textContent = "";
};

convertBtn.addEventListener("click", convertion);
function convertion() {

    if((amount.value == "") || (amount.value == 0)){
        amount.value = 1
    }

    let toCur = selectedCodeOne.getAttribute("title");
    let toUrl = 'https://v6.exchangerate-api.com/v6/bea4b32831177324429bcd29/latest/' + toCur;
    fetch(toUrl).then(res => res.json()).then(result => {
        console.log(result);
    })
     

    
};


