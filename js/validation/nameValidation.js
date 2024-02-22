function capitalizeWords(str) {
    return str.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}

function validateName(name) {
    let hasSpace = /\s/.test(name);
    return /^[A-Za-zÀ-ú\s]+$/.test(name) && hasSpace;
}

export function emptyName(inputName, emptyInputName, invalidInputName) {
    inputName.addEventListener('focusout', function() {
        let inputValue = inputName.value.trim();

        if (inputValue === '') {
            invalidInputName.classList.add('d-none');
            emptyInputName.classList.remove('d-none');
        } else {
            emptyInputName.classList.add('d-none');
        }

        inputName.value = capitalizeWords(inputValue.toLowerCase());
    });

    inputName.addEventListener('input', function() {
        let inputValue = inputName.value.trim();

        if (inputValue === '') {
            emptyInputName.classList.remove('d-none');
        } else {
            emptyInputName.classList.add('d-none');
        }
    });
}

export function invalidName(inputName, invalidInputName, emptyInputName) {
    inputName.addEventListener('input', function() {
        let inputValue = inputName.value.trim();

        if (inputValue === '') {
            invalidInputName.classList.add('d-none');
            emptyInputName.classList.remove('d-none');
        } else if (validateName(inputValue)) {
            invalidInputName.classList.add('d-none');
            emptyInputName.classList.add('d-none');
        } else {
            invalidInputName.classList.remove('d-none');
            emptyInputName.classList.add('d-none');
        }
    });
}
