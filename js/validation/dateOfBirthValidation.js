function validateBirthDate(dataString) {
    let [day, month, year] = dataString.split('/');
    day = parseInt(day, 10);
    month = parseInt(month, 10);
    year = parseInt(year, 10);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return false;
    }

    const validDate = new Date(year, month - 1, day);
    const validDay = validDate.getDate() === day;
    const validMonth = validDate.getMonth() === month - 1;
    const validYear = validDate.getFullYear() === year;

    const currentDate = new Date();
    const previousDate = validDate < currentDate;

    return validDay && validMonth && validYear && previousDate;
}

function validateInput(day, month, year, parentElement, emptyInputSelector, invalidInputSelector) {
    let emptyInput = parentElement.querySelector(emptyInputSelector);
    let invalidInput = parentElement.querySelector(invalidInputSelector);

    if (day && month && year) {
        let dataString = `${day}/${month}/${year}`;
        if (validateBirthDate(dataString)) {
            invalidInput.classList.add('d-none');
            emptyInput.classList.add('d-none');
        } else {
            invalidInput.classList.remove('d-none');
            emptyInput.classList.add('d-none');
        }
    }
}

export function dataError (inputData, formGroup, day, month, year, emptyInput, invalidInput) {
    inputData.forEach(function (input) {
        input.addEventListener('input', function () {
            let dayValue = day.value.trim();
            let monthValue = month.value.trim();
            let yearValue = year.value.trim();
            let parentElement = input.closest(formGroup);
            validateInput(dayValue, monthValue, yearValue, parentElement, emptyInput, invalidInput);
        });

        input.addEventListener('focusout', function () {
            let dayValue = day.value.trim();
            let monthValue = month.value.trim();
            let yearValue = year.value.trim();
            let emptyInputSelector = input.closest(formGroup).querySelector(emptyInput);

            if (dayValue === '' && monthValue === '' && yearValue === '') {
                emptyInputSelector.classList.remove('d-none');
            } else {
                emptyInputSelector.classList.add('d-none');
            }
        });

    });
}
