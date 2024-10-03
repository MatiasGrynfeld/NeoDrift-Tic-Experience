let ws;

window.onload = function() {
    ws = new WebSocket("wss://example.com/ws");
    ws.onopen = function() {
        console.log("Connected to WebSocket");
    };
    ws.onmessage = function(event) {
        console.log(event.data);
    };
    ws.onclose = function() {
        console.log("WebSocket connection closed");
    };
    ws.onerror = function(error) {
        console.log("WebSocket error: " + error);
    };
};

const btn_enviar = document.getElementById('boton-enviar');
btn_enviar.addEventListener('click', sendMessage);

function sendMessage(event) {
    event.preventDefault();
    let input = colores[perfil];
    if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify(input));
    } else {
        console.log("WebSocket is not connected.");
    }
}
