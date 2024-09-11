const form = document.getElementById('enviar-config');
const config = {
    led_color: "#000"
}
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log("a");
    await fetch("url"), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(config)
    }
});