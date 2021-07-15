
const getID = id => document.getElementById(id);

let inputArray = [
    {
        inputId: 'firstName',
        regExp: /^[a-zA-Z]{1,20}$/,
        isValid: false
    },
    {
        inputId: 'lastName',
        regExp: /^[a-zA-Z]{1,20}$/,
        isValid: false
    },
    {
        inputId: 'email',
        regExp: /^[\w\.\-]+@[\w\.]+$/,
        isValid: false
    },
    {
        inputId: 'password',
        regExp: /^\w{8,15}$/,
        isValid: false
    }];


setValidation(inputArray);

getID('agreement').addEventListener('change', () => {
    checkValidation(inputArray);
});

getID('signUp').addEventListener('click', () => {
    document.querySelector('.modalContainer').classList.remove('hidden');
});

getID('startExploring').addEventListener('click', () => clearForm(inputArray));


function setValidation(inputInformation) {
    inputInformation.forEach(elem => {
        getID(elem.inputId).addEventListener('input', () => {

            if (elem.regExp.test(getID(elem.inputId).value)) {
                getID(elem.inputId).classList.add('is-valid');
                getID(elem.inputId).classList.remove('is-invalid');
                elem.isValid = true;
            } else {
                getID(elem.inputId).classList.add('is-invalid');
                getID(elem.inputId).classList.remove('is-valid');
                elem.isValid = false;
            }
            checkValidation(inputArray);
        })
    });
}

function checkValidation(validInformation) {
    let isValid = validInformation.every(({ isValid }) => isValid) && getID('agreement').checked;

    getID('signUp').disabled = !isValid;
};
function clearForm(inputArray) {
    document.querySelector('.modalContainer').classList.add('hidden');
    getID('form').reset();
    getID('signUp').disabled = true;
    inputArray.forEach(elem => {
        elem.isValid = false;
        getID(elem.inputId).classList.remove('is-valid');
    });
}