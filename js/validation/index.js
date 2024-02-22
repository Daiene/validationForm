import { app } from '../variables.js';
import { idChoice } from './idChoice.js';
import { invalidCPF, emptyCPF } from './cpfValidation.js';
import { invalidCNPJ, emptyCNPJ } from './cnpjValidation.js';
import { invalidName, emptyName } from './nameValidation.js';
import { dataError } from './dateOfBirthValidation.js';
import { invalidEmail, emptyEmail } from './emailValidation.js';
import { invalidCell, emptyCell } from './cellPhoneValidation.js';

const {
    inputRadio,
    inputCPF,
    inputCNPJ,
    inputName,
    date,
    inputEmail,
    inputCell,
    error,
    formGroup
} = app;

idChoice(
    document.getElementById(inputRadio.cpfInput),
    document.getElementById(inputRadio.inputCNPJ),
    document.getElementById(inputRadio.cpfRadio),
    document.getElementById(inputRadio.cnpjRadio)
);

invalidCPF(
    document.getElementById(inputCPF),
    document.getElementById(inputCPF).parentElement.querySelector('.' + error.emptyInput),
    document.getElementById(inputCPF).parentElement.querySelector('.' + error.invalidInput)
);

emptyCPF(
    document.getElementById(inputCPF),
    document.getElementById(inputCPF).parentElement.querySelector('.' + error.invalidInput),
    document.getElementById(inputCPF).parentElement.querySelector('.' + error.emptyInput)
);

invalidCNPJ(
    document.getElementById(inputCNPJ),
    document.getElementById(inputCNPJ).parentElement.querySelector('.' + error.emptyInput),
    document.getElementById(inputCNPJ).parentElement.querySelector('.' + error.invalidInput)
);

emptyCNPJ(
    document.getElementById(inputCNPJ),
    document.getElementById(inputCNPJ).parentElement.querySelector('.' + error.invalidInput),
    document.getElementById(inputCNPJ).parentElement.querySelector('.' + error.emptyInput)
);

invalidName(
    document.getElementById(inputName),
    document.getElementById(inputName).parentElement.querySelector('.' + error.invalidInput),
    document.getElementById(inputName).parentElement.querySelector('.' + error.emptyInput)
);

emptyName(
    document.getElementById(inputName),
    document.getElementById(inputName).parentElement.querySelector('.' + error.emptyInput),
    document.getElementById(inputName).parentElement.querySelector('.' + error.invalidInput)
);

dataError (
    Array.from(document.getElementById(date.inputData).getElementsByTagName('input')),
    '.' + formGroup,
    document.getElementById(date.inputData).querySelector('#' + date.day),
    document.getElementById(date.inputData).querySelector('#' + date.month),
    document.getElementById(date.inputData).querySelector('#' + date.year),
    '.' + error.emptyInput,
    '.' + error.invalidInput
);

invalidEmail(
    document.querySelector('.' + inputEmail),
    document.querySelector('.' + inputEmail).parentElement.querySelector('.' + error.emptyInput),
    document.querySelector('.' + inputEmail).parentElement.querySelector('.' + error.invalidInput)
);

emptyEmail(
    document.querySelector('.' + inputEmail),
    document.querySelector('.' + inputEmail).parentElement.querySelector('.' + error.emptyInput),
    document.querySelector('.' + inputEmail).parentElement.querySelector('.' + error.invalidInput)
);

invalidCell (
    document.getElementById(inputCell),
    document.getElementById(inputCell).parentElement.querySelector('.' + error.emptyInput),
    document.getElementById(inputCell).parentElement.querySelector('.' + error.invalidInput)
);

emptyCell (
    document.getElementById(inputCell),
    document.getElementById(inputCell).parentElement.querySelector('.' + error.emptyInput)
);
