const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const subjects = [
    'math',
    'bulgarian',
    'english',
    'german',
    'french',
    'russian',
    'history',
    'geography',
    'biology',
    'chemistry',
    'physics',
    'informatics',
    'sports',
    'music',
    'art'
];


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

const title = (title) => {
    if (title.length >= 10 && title.length <= 50) {
        return '';
    }

    return 'Темата трябва да е между 10 и 50 символа.'
}

const subject = (subject) => {
    if (subjects.includes(subject)) {
        return '';
    }

    return 'Изберете предмет.';
}

const grade = (grade) => {
    if(grade >= 1 && grade <= 12){
        return '';
    }

    return 'Изберете клас.';
}

const description = (description) => {
    if(description.length >= 30){
        return '';
    }

    return 'Описанието трябва да е поне 30 символа.';
}

const validators = {
    email,
    password,
    repeatPassword,
    title,
    subject,
    grade,
    description

};
export default validators;