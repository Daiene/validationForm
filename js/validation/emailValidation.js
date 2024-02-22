export function invalidEmail(inputEmail, emptyInputEmail, invalidInputEmail) {
    inputEmail.addEventListener('input', function() {
        let inputValue = inputEmail.value;

        if (inputValue !== '') {
            emptyInputEmail.classList.add('d-none');
        }

        let user = inputValue.substring(0, inputValue.indexOf("@"));
        let domain = inputValue.substring(inputValue.indexOf("@") + 1, inputValue.length);

        if (!inputValue.includes('@') ||
            inputValue.indexOf('@') !== inputValue.lastIndexOf('@') ||
            user.length === 0 ||
            domain.length === 0 ||
            !domain.includes('.') ||
            domain.indexOf('.') === 0 ||
            domain.lastIndexOf('.') === domain.length - 1 ||
            domain.substring(domain.indexOf('.') + 1).length === 0)
        {
            invalidInputEmail.classList.remove('d-none');
        } else {
            invalidInputEmail.classList.add('d-none');
        }
    })
}

export function emptyEmail(inputEmail, emptyInputEmail, invalidInputEmail) {
    inputEmail.addEventListener('focusout', function() {
        let inputValue = inputEmail.value;
        let formattedValue = inputValue.replace(/\s/g, '');
        inputEmail.value = formattedValue;

        if (inputValue === '') {
            invalidInputEmail.classList.add('d-none');
            emptyInputEmail.classList.remove('d-none');
        } else {
            emptyInputEmail.classList.add('d-none');
        }
    });
}
