function validateCPF(cpf) {
    if (cpf === '') {
        return false;
    }

    if (cpf.length !== 11 ||
        cpf === '00000000000' ||
        cpf === '11111111111' ||
        cpf === '22222222222' ||
        cpf === '33333333333' ||
        cpf === '44444444444' ||
        cpf === '55555555555' ||
        cpf === '66666666666' ||
        cpf === '77777777777' ||
        cpf === '88888888888' ||
        cpf === '99999999999') {
        return false;
    }

    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    
    let rest = 11 - (sum % 11);
    let digitVerifier1 = rest === 10 || rest === 11 ? 0 : rest;
    if (digitVerifier1 !== parseInt(cpf.charAt(9))) {
        return false;
    }

    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    
    rest = 11 - (sum % 11);
    let digitVerifier2 = rest === 10 || rest === 11 ? 0 : rest;
    if (digitVerifier2 !== parseInt(cpf.charAt(10))) {
        return false;
    }

    return true;
}

export function invalidCPF(inputCPF, emptyInputCPF, invalidInputCPF) {
    inputCPF.addEventListener('input', function() {
        let inputValueCPF = inputCPF.value;
        let formattedValue = inputValueCPF.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
        inputCPF.value = formattedValue;
        
        if (inputValueCPF !== '') {
            emptyInputCPF.classList.add('d-none');
        }
        
        if (validateCPF(inputValueCPF)) {
            invalidInputCPF.classList.add('d-none');
        } else {
            invalidInputCPF.classList.remove('d-none');
        }
    });
}

export function emptyCPF(inputCPF, invalidInputCPF, emptyInputCPF) {
    inputCPF.addEventListener('focusout', function() {
        let inputValueCPF = inputCPF.value;
        if (inputValueCPF === '') {
            invalidInputCPF.classList.add('d-none');
            emptyInputCPF.classList.remove('d-none');
        } else {
            emptyInputCPF.classList.add('d-none');
        }
    });
}
