document.getElementById('encryptBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = btoa(inputText); // Encrypt the text using Base64
    document.getElementById('outputText').value = encryptedText;
});

document.getElementById('decryptBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    try {
        const decryptedText = atob(inputText); // Decrypt the text using Base64
        document.getElementById('outputText').value = decryptedText;
    } catch (e) {
        alert('Invalid text for decryption.');
    }
});