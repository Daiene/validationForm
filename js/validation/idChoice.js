export function idChoice(cpfInput, cnpjInput, cpfRadio, cnpjRadio) {
    cpfRadio.addEventListener('change', function () {
        if (cpfRadio.checked) {
            cpfInput.style.display = 'block';
            cnpjInput.style.display = 'none';
        }
    });

    cnpjRadio.addEventListener('change', function () {
        if (cnpjRadio.checked) {
            cpfInput.style.display = 'none';
            cnpjInput.style.display = 'block';
        }
    });
}
