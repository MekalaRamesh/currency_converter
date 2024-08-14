const BASE_URL ="https://v6.exchangerate-api.com/v6/78bc999cc8a96a1fa6c3bc38/pair";

// https://v6.exchangerate-api.com/v6/78bc999cc8a96a1fa6c3bc38/pair/USD/INR

const dropDown = document.querySelectorAll(".dropdown select");
const bttn = document.querySelector("form button");
const fromCurr =document.querySelector(".from select");
const toCurr =document.querySelector(".to select");
const msg =document.querySelector(".msg");

// for(code in countryList){
//     console.log(code,countryList[code]);
// }       

for( let select of dropDown){
    for(code in countryList ){
     let newOption = document.createElement("option");
      newOption.innerText = code;
      newOption.value = code;
      if(select.name === "from" && code ==="USD"){
        newOption.selected ="selected";
       
      }
      else if(select.name ==="to" && code === "INR"){
        newOption.selected="selected";
      }
       select.append(newOption);
      

    }
    select.addEventListener("change" ,(evt)=>{
      updateFlag(evt.target);
    });

}

const updateFlag = (element)=>{
  let code = element.value;
  let countryCode = countryList[code];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
  
}

bttn.addEventListener("click" , async(evt)=>{
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
 let amtVal = amount.value;


const url=`${BASE_URL}/${fromCurr.value}/${toCurr.value}`
let response = await fetch(url);
let data = await response.json();
let rate = data["conversion_rate"]

let finalAmount = amtVal * rate;
msg.innerText =`${amtVal} ${fromCurr.value} = ${finalAmount}${toCurr.value}`



});





