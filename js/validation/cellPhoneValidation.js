function validateCell(cellphone) {
    const regex = /^[1-9]{2}9[0-9]{8}$/;
    return regex.test(cellphone);
}

export function invalidCell (inputCell, emptyInputCell, invalidInputCell) {
    inputCell.addEventListener('input', function() {
        let inputValue = inputCell.value.replace(/\D/g, '');

        if (inputValue !== '') {
            emptyInputCell.classList.add('d-none');
        }

        if (validateCell(inputValue)) {
            invalidInputCell.classList.add('d-none');
        } else {
            invalidInputCell.classList.remove('d-none');
        }

        let formattedValue = inputValue.replace(/^(\d{0,2})(\d{0,5})(\d{0,4})$/, '($1)$2-$3');
        inputCell.value = formattedValue.trim();
    });
}

export function emptyCell (inputCell, emptyInputCell) {
    inputCell.addEventListener('focusout', function() {
        let inputValue = inputCell.value.trim();
        
        if (inputValue === '') {
            emptyInputCell.classList.remove('d-none');
        }
    });
}
