const cardHolder = document.querySelector(".cardHolder");
const cardNumber = document.querySelector(".cardNumber");
const expirationDate = document.querySelector (".expirationDate");
const cvc = document.querySelector(".cvc");

const cardHolderName = document.querySelector("#card_holder_name");
const cardOwnerNumber =document.querySelector("#card_number");
const ownerExpirationdate = document.querySelector ("#expiration_date");
const ownerExpirationYear = document.querySelector("#expiration_year");
const ownerCvc = document.querySelector("#cvc_number");
const thankYou = document.querySelector (".thankyou");
const type_form = document.querySelector(".type_form")

const submission = document.querySelector(".submitButton");
const continuebutton = document.querySelector (".continueButton")
const invalidFeedBack1 = document.querySelector("#invalid-feedback1")
const invalidFeedBack2 = document.querySelector("#invalid-feedback2")
const invalidFeedBack3 = document.querySelector("#invalid-feedback3")
const invalidFeedBack4 = document.querySelector("#invalid-feedback4")
const invalidFeedBack5 = document.querySelector("#invalid-feedback5")

var maskOptions = {
  mask: '0000 0000 0000 0000'
};
var mask = IMask(cardOwnerNumber, maskOptions);



submission.addEventListener("click", function(){
    let fullOwnerName = cardHolderName.value;
    let fullOwnerNumber = cardOwnerNumber.value
    let fullExpDate = ownerExpirationdate.value
    let fullExpYear = ownerExpirationYear.value
    let fullCvc = ownerCvc.value
    var cardForm = document.querySelector(".cardForm")
    
    if (fullOwnerName && fullOwnerNumber && fullExpDate && fullExpYear && fullCvc){
        cardHolder.innerText = fullOwnerName;
        cardNumber.innerText = fullOwnerNumber;
        expirationDate.innerText = fullExpDate + "/" + fullExpYear;
        cvc.innerText = fullCvc;
        cardForm.reset();
        thankYou.style.display = "block";
        type_form.style.display = "none";
    }else {
        invalidFeedBack1.style.display = "block"
        invalidFeedBack2.style.display = "block"
        invalidFeedBack3.style.display = "block"
        invalidFeedBack4.style.display = "block"
        invalidFeedBack5.style.display = "block"
    }
        
});

continuebutton.addEventListener("click", function(){
    cardHolder.innerText = "YOUR NAME";
    cardNumber.innerText = "0000 0000 0000 0000";
    expirationDate.innerText = "00/00";
    cvc.innerText = "000";

    thankYou.style.display = "none";
    type_form.style.display = "block";

})

cardHolderName.addEventListener ("click", function(){
    invalidFeedBack1.style.display = "none"
})

cardOwnerNumber.addEventListener("click", function(){
    invalidFeedBack2.style.display = "none"
})

ownerExpirationdate.addEventListener("click", function(){
    invalidFeedBack3.style.display = "none"
})

ownerExpirationYear.addEventListener("click", function(){
    invalidFeedBack4.style.display = "none"
})
ownerCvc.addEventListener("click", function(){
    invalidFeedBack5.style.display = "none"
})