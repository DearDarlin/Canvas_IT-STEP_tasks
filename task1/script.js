const input = document.getElementById("username");

input.addEventListener('input', () => {
    input.value = input.value.replace(/[0-9]/g, '')
})