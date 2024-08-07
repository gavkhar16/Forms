function sum(){
let number1 =document.getElementsByName("x")[0].value
let number2 =document.getElementsByName("y")[0].value
let total = document.getElementsByName('total')[0]
let result = Number(number1) + Number(number2)
total.innerHTML=result
}
function room(){
    let number1 =document.getElementsByName("x")[0].value
    let number2 =document.getElementsByName("y")[0].value
    let total = document.getElementsByName('total')[0]
    let result = Number(number1) - Number(number2)
    total.innerHTML=result
    }
    function led(){
        let number1 =document.getElementsByName("x")[0].value
        let number2 =document.getElementsByName("y")[0].value
        let total = document.getElementsByName('total')[0]
        let result = Number(number1) * Number(number2)
        total.innerHTML=result  
    }
    function winx(){
        let number1 =document.getElementsByName("x")[0].value
        let number2 =document.getElementsByName("y")[0].value
        let total = document.getElementsByName('total')[0]
        let result = Number(number1) / Number(number2)
        total.innerHTML=result
    }


    function codeCountry(){
        const country = document.getElementsByName("country")[0].value
        let phone = document.getElementsByName("phone")[0]

        if (country == "none"){
            phone.value="Выберите страну"
        }else if (country == "uz"){
             phone.value="+998"
        }else if (country == "ru"){
            phone.value="+7"
       }else if (country == "usa"){
        phone.value="+1"
   }
    }
    function activeButton(){
        let check = document.getElementsByName("check")[0].checked;
        let activeBtn = document.getElementsByName("btn")[0];
        if (check == true) {
            activeBtn.disabled = false;
        } else {
           activeBtn.disabled = true; 
        }
    }
    function corseForm(){
        let course = document.querySelector("#courseSelect").value;
        let totalPrice= document.getElementById("totalPrice")
        let FRONTENT_PRICE = 14000000;
        let PYTON_PRICE = 120000000;
        let DATA = 1600000;
        let price = 0;
        if (course == "none") {
            price = 0;
        }else if (course == "Frontent") {
            price = FRONTENT_PRICE;
        }
        else if (course == "Pyton") {
            price =  PYTON_PRICE;
        }else if (course == "Data") {
            price = DATA;
        }
        totalPrice.value = price
    }
    function check() {
        let sale = document.getElementsByName(`sale`)[0]
    
        let span = document.getElementById(`SaleRate`)
        span.innerHTML = sale.value
        }

        function onlyNumber() {
            let input = document.get
        }