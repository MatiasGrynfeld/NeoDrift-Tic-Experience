const perfiles = document.getElementsByClassName('perfil');
for (let i = 0; i < perfiles.length; i++) {
    perfiles[i].addEventListener('click', () => cambiarPerfil(perfiles[i].id));
}
function cambiarPerfil(id){
    console.log(id);
    if (id === "1"){
        form.style.backgroundColor = "#FF0000";
    }
    else if (id === "2"){
        form.style.backgroundColor = "#00FF00";
    }
    else if (id === "3"){
        form.style.backgroundColor = "#0000FF";
    }
}