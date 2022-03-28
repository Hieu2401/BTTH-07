const submitBtn = document.querySelector('#btnRegister')
const nameInput = document.querySelector('#txtName')
const statusOfName = document.querySelector('#statusOfName')
const selectInput = document.querySelector('#txtSelect')
const statusOfSelect = document.querySelector('#statusOfSelect')
const zidCodeInput = document.querySelector('#txtId')
const statusOfId = document.querySelector('#statusOfId')
const emailInput = document.querySelector('#txtEmail')
const statusOfEmail = document.querySelector("#statusOfEmail")
const gendersInput = document.querySelectorAll('#txtGender')
const statusOfGender = document.querySelector('#statusOfGender')
const checkboxsInput = document.querySelectorAll('#txtCheckbox')
const statusOfCheckbox = document.querySelector('#statusOfCheckbox')


function checkName() {
    const regrex = /^[a-z ,.'-]+$/i
    if (regrex.test(nameInput.value)) {
        statusOfName.innerText = 'Name is invalid'
        statusOfName.style.color = 'blue'
    } else {
        statusOfName.innerText = 'Name is not invalid'
        statusOfName.style.color = 'red'
    }
}

function checkCountry() {
    if (selectInput.value != 'Choose country') {
        statusOfSelect.innerText = 'choose a successful country'
        statusOfSelect.style.color = 'blue'
    } else {
        statusOfSelect.innerText = 'Please select a country'
        statusOfSelect.style.color = 'red'
    }
}

function checkZipCode() {
    const numericRegrex = /^[0-9]/
    if (numericRegrex.test(zidCodeInput.value)) {
        statusOfId.innerText = 'Zid code is correct'
        statusOfId.style.color = 'blue'
    } else {
        statusOfId.innerText = 'Zid code is  not invalid'
        statusOfId.style.color = 'red'
    }

}

function checkEmail() {
    const emailRegrex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (emailRegrex.test(emailInput.value)) {
        statusOfEmail.innerText = 'Email is correct'
        statusOfEmail.style.color = 'blue'
    } else {
        statusOfEmail.innerText = 'Email is incorrect'
        statusOfEmail.style.color = 'red'
    }
}

function checkGender() {
    if (gendersInput[0].checked === true || gendersInput[1].checked === true) {
        statusOfGender.innerText = 'Successfully selected gender'
        statusOfGender.style.color = 'blue'
    } else {
        statusOfGender.innerText = 'Please select your gender'
        statusOfGender.style.color = 'red'
    }
}

function checkLanguage() {
    if (checkboxsInput[0].checked === true && checkboxsInput[1].checked === true) {
        statusOfCheckbox.innerText = 'Please select a language'
        statusOfCheckbox.style.color = 'red'
    } else if (checkboxsInput[0].checked === true || checkboxsInput[1].checked === true) {
        statusOfCheckbox.innerText = 'Successful language selection'
        statusOfCheckbox.style.color = 'blue'
    } else {
        statusOfCheckbox.innerText = 'Please select language'
        statusOfCheckbox.style.color = 'red'
    }
}

submitBtn.addEventListener('click', function(e) {
    e.preventDefault()
    checkName()
    checkCountry()
    checkZipCode()
    checkEmail()
    checkGender()
    checkLanguage()
})