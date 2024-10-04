let ws;
const form_conectar = document.getElementById('form-conectar');

form_conectar.addEventListener('submit', (event) => {
    conectar(event);
});

function conectar(event) {
    event.preventDefault();
    ws = new WebSocket("ws://127.0.0.1:8000/ws/1");
    ws.onopen = function() {
        console.log("Connected to WebSocket");
        alert("Conexión exitosa.");
    };
    ws.onmessage = function(event) {
        console.log(event.data);
    };
    ws.onclose = function() {
        console.log("WebSocket connection closed");
        alert("Conexión cerrada o no disponible.");
    };
    ws.onerror = function(error) {
        console.log("WebSocket error: " + error);
        alert("Error en la conexión.");
    };
};

const btn_enviar = document.getElementById('boton-enviar');
btn_enviar.addEventListener('click', sendMessage);

function sendMessage(event) {
    event.preventDefault();
    let input = colores[perfil];
    if (!ws) {
        console.log("WebSocket is not connected.");
        alert("No hay conexión.");
        return;
    }
    if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify(input));
        alert("Configuración enviada correctamente.");
    } else {
        console.log("WebSocket is not connected.");
        alert("No hay conexión.");
    }
}
