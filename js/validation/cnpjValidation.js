function validateCNPJ(cnpj) {
    if (cnpj === '') {
        return false;
    }

    if (cnpj.length !== 14 ||
        cnpj.length !== 14 ||
        cnpj === '00000000000000' ||
        cnpj === '11111111111111' ||
        cnpj === '22222222222222' ||
        cnpj === '33333333333333' ||
        cnpj === '44444444444444' ||
        cnpj === '55555555555555' ||
        cnpj === '66666666666666' ||
        cnpj === '77777777777777' ||
        cnpj === '88888888888888' ||
        cnpj === '99999999999999') {
        return false;
    }

    let size = cnpj.length - 2;
    let numbers = cnpj.substring(0, size);
    let digits = cnpj.substring(size);
    let sum = 0;
    let after = size - 7;
    for (let i = size; i >= 1; i--) {
        sum += parseInt(numbers.charAt(size - i)) * after--;
        if (after < 2) after = 9;
    }
    let resultado = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (resultado !== parseInt(digits.charAt(0))) {
        return false;
    }

    size = size + 1;
    numbers = cnpj.substring(0, size);
    sum = 0;
    after = size - 7;
    for (let i = size; i >= 1; i--) {
        sum += parseInt(numbers.charAt(size - i)) * after--;
        if (after < 2) after = 9;
    }
    resultado = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (resultado !== parseInt(digits.charAt(1))) {
        return false;
    }

    return true;
}

export function invalidCNPJ(inputCNPJ, emptyInputCNPJ, invalidInputCNPJ) {
    inputCNPJ.addEventListener('input', function() {
        let inputValue = inputCNPJ.value;
        let formattedValue = inputValue.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
        inputCNPJ.value = formattedValue;

        if (inputValue !== '') {
            emptyInputCNPJ.classList.add('d-none');
        }

        if (validateCNPJ(inputValue)) {
            invalidInputCNPJ.classList.add('d-none');
        } else {
            invalidInputCNPJ.classList.remove('d-none');
        }
    });
}

export function emptyCNPJ(inputCNPJ, invalidInputCNPJ, emptyInputCNPJ) {
    inputCNPJ.addEventListener('focusout', function() {
        let inputValue = inputCNPJ.value;
        if (inputValue === '') {
            invalidInputCNPJ.classList.add('d-none');
            emptyInputCNPJ.classList.remove('d-none');
        } else {
            emptyInputCNPJ.classList.add('d-none');
        }
    });
}

