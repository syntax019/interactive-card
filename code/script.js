const jsCardNameText = document.querySelector('.js-card-name-text');
const jsCardNumberText = document.querySelector('.js-card-number-text');
const jsCardNumber = document.querySelector('.js-card-number');
const jsDetailsName = document.querySelector('.js-details-name');
const jsDetailsNumber = document.querySelector('.js-details-number');
const jsDetailsNumber2 = document.querySelector('.js-details-number2');
const jsCvcNumber = document.querySelector('.js-cvc-number');
const jsExpMonth = document.querySelector('.js-exp-month');
const jsExpYear = document.querySelector('.js-exp-year');
const jscvcInput = document.querySelector('.js-cvc-input');
const jsFormat = document.querySelector('.js-format');
const jsNameFormat = document.querySelector('.js-name-format')
let jsCardNumberValue = jsCardNumberText.value

jsCardNumberText.addEventListener('input', (e) => {
    jsCardNumber.textContent = e.target.value
    // console.log(e.target.value)
    e.target.value = e.target.value.replace(/[\s]/g, "").replace(/(.{4})/g, "$1 ").trim()
    if(jsCardNumberText.value === ""){
        jsCardNumber.textContent = "0000 0000 0000 0000"
    }
    if(jsCardNumberText.value.length === 0){
        jsFormat.textContent = 'This field cannot be blank'
    }else if(!/([0-9]{4}\s?){4}/.test(jsCardNumberText.value)) {
    jsFormat.textContent = "Invalid credit card number";
    } else {
    jsFormat.textContent = "";
    }
    // if(e.target.value = )
})

jsCardNameText.addEventListener('input', (e) => {
    jsDetailsName.textContent = e.target.value;
    e.preventDefault()
    jsCardNameText.value = jsCardNameText.value.toUpperCase();
    if(jsCardNameText.value === ""){
    jsDetailsName.textContent = "JANE APPLESEED"     
    }
    if (jsCardNameText.value.length === 0) {
    jsNameFormat.textContent = "This field cannot be blank";
  } else if (jsCardNameText.value.length > 30) {
    jsNameFormat.textContent = "This field cannot contain more than 30 characters";
  } else if (!/^[ a-z]+$/i.test(jsCardNameText.value)) {
    jsNameFormat.textContent = "This field can only contain letters";
  } else {
    jsNameFormat.textContent = "";
  }
})

jsExpMonth.addEventListener('input', (e) => {
    jsDetailsNumber.textContent = e.target.value
    if(jsExpMonth.value === ""){
        jsDetailsNumber.textContent = "09"
    }
    if(jsExpMonth.value.length === 0){
        monthFormat.textContent = 'This field cannot be blank'
    }else if(!/^0[0-9]|1[0-2]$/.test(jsExpMonth.value)){
        monthFormat.textContent = 'Invalid Month'
    } else{
        monthFormat.textContent = ''
    }
})
jsExpYear.addEventListener('input', (e) => {
    jsDetailsNumber2.textContent = e.target.value
    if(jsExpYear.value === ""){
        jsDetailsNumber2.textContent = "00"
    }
    if(jsExpYear.value.length === 0){
        yearFormat.textContent = 'This field cannot be blank'
    }else if(!/^[0-9][0-9]$/.test(jsExpYear.value)){
        yearFormat.textContent = 'Invalid Year'
    } else{
        yearFormat.textContent = ''
    }
})
// jsExpYear.addEventListener('input', (e) => {
//     jsDetailsNumber2.textContent = e.target.value
// })
jscvcInput.addEventListener('input', (e) => {
    jsCvcNumber.textContent = e.target.value
    if(jscvcInput.value === ""){
        jsCvcNumber.textContent = "000"
    }
    if(jscvcInput.value.length === 0){
        cvcFormat.textContent = 'This field cannot be blank'
    }else if (!/^[0-9][0-9][0-9]$/.test(jscvcInput.value)) {
    cvcFormat.textContent = "Invalid CVC format";
  } else{
    cvcFormat.textContent = ""
  }
})



const btn = document.querySelector('.btn')
const cvcFormat = document.querySelector('.cvc-format')
const monthFormat = document.querySelector('.month-format')
const yearFormat = document.querySelector('.year-format')
btn.addEventListener('click', () =>{
    if(jscvcInput.value === ""){
        cvcFormat.textContent = "Can't be Blank"
    }
    if((jsExpMonth.value === "" && jsExpYear === "")){
        dateFormat.textContent = "Can't be Blank"
    }
})