function validateNationalId(nationalId) {
    // Ensure the input is a 10-digit number
    if (!/^\d{10}$/.test(nationalId)) {
        return false;
    }

    const digits = nationalId.split("").map(Number);
    const controlDigit = digits[9];
    let sum = 0;

    for (let i = 0; i < 9; i++) {
        sum += digits[i] * (10 - i);
    }

    const remainder = sum % 11;

    // Check if the remainder matches the control digit
    if (remainder < 2) {
        return controlDigit === remainder;
    } else {
        return controlDigit === (11 - remainder);
    }
}

function validate() {
    const nationalId = document.getElementById('nationalId').value.trim();
    const resultDiv = document.getElementById('result');

    if (!/^\d+$/.test(nationalId)) {
        resultDiv.textContent = "Please enter a valid 10-digit numeric national ID.";
        resultDiv.className = "result invalid";
        return;
    }

    const isValid = validateNationalId(nationalId);
    if (isValid) {
        resultDiv.textContent = "✅ This national ID is valid!";
        resultDiv.className = "result valid";
    } else {
        resultDiv.textContent = "❌ This national ID is invalid.";
        resultDiv.className = "result invalid";
    }
}