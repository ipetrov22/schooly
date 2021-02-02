const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const email = (email) => {
    if (email.match(emailRegEx)) {
        return '';
    }

    return 'Моля въведете валиден имейл.';
}

const password = (password) => {
    if (password.match(passwordRegEx)) {
        return '';
    }

    return 'Паролата трябва да е поне 8 знака и да съдържа малка буква, главна буква и цифра.';
}

const repeatPassword = (repeatPassword, password) => {
    if (repeatPassword === password) {
        return '';
    }

    return 'Паролите не съвпадат.';
}

const validators = {
    email,
    password,
    repeatPassword
};
export default validators;