const title = document.getElementById('title');
title.addEventListener('click', () => {
    location.reload();
});

let perfil = "1";
let listeners = {};
cambiarPerfil(perfil);

function cambiarPerfil(id) {
    console.log(id);
    perfil = parseInt(id);
    activateLabel(perfil);
    const leds = document.getElementsByClassName('led');
    
    for (let i = 0; i < leds.length; i++) {
        leds[i].style.backgroundColor = colores[perfil][leds[i].id];
    }
}

function activateLabel(perfilActual) {
    const perfiles = document.getElementsByClassName('perfil');
    for (let i = 0; i < perfiles.length; i++) {
        const id = perfiles[i].id;
        if (listeners[id]) {
            perfiles[i].removeEventListener('click', listeners[id]);
        }
        listeners[id] = () => cambiarPerfil(id);
        if (id != perfilActual) {
            perfiles[i].addEventListener('click', listeners[id]);
            perfiles[i].style.textDecoration = "#FFF underline 2px solid";
            perfiles[i].style.color = "#FFF";
            perfiles[i].style.fontWeight = "normal";
            perfiles[i].style.cursor = "pointer";
        }
        else {
            perfiles[i].style.textDecoration = "none";
            perfiles[i].style.color = "#789";
            perfiles[i].style.fontWeight = "bold";
            perfiles[i].style.cursor = "default";
        }
    }
}