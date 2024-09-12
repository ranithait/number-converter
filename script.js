function convertNumber() {
    const inputType = document.getElementById("input-type").value;
    const outputType = document.getElementById("output-type").value;
    const inputValue = document.getElementById("input-number").value.trim();

    let decimalValue;

    // Convert input to decimal first
    switch (inputType) {
        case 'binary':
            decimalValue = parseInt(inputValue, 2);
            break;
        case 'octal':
            decimalValue = parseInt(inputValue, 8);
            break;
        case 'decimal':
            decimalValue = parseInt(inputValue, 10);
            break;
        case 'hexadecimal':
            decimalValue = parseInt(inputValue, 16);
            break;
        default:
            decimalValue = NaN;
    }

    if (isNaN(decimalValue)) {
        document.getElementById("result").textContent = "Invalid Input!";
        return;
    }

    // Convert decimal to output type
    let result;
    switch (outputType) {
        case 'binary':
            result = decimalValue.toString(2);
            break;
        case 'octal':
            result = decimalValue.toString(8);
            break;
        case 'decimal':
            result = decimalValue.toString(10);
            break;
        case 'hexadecimal':
            result = decimalValue.toString(16).toUpperCase();
            break;
    }

    document.getElementById("result").textContent = result;
}

function clearFields() {
    document.getElementById("input-type").value = "binary";
    document.getElementById("input-number").value = "";
    document.getElementById("output-type").value = "binary";
    document.getElementById("result").textContent = "";
}
