// Get the modal
var modal = document.getElementById('id01');


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
const usuariosValidos = {
    "admin": "admin123",
    "joao": "senha123",
    "maria": "maria2014"
};


var loginForm = document.querySelector('#id01 form');
var modal = document.querySelector('#id01');


loginForm.addEventListener('submit', function(event) {
    event.preventDefault();


   
    var usuario = loginForm.usuario.value.trim();
    var senha = loginForm.senha.value;


   
    if (usuariosValidos.hasOwnProperty(usuario) && usuariosValidos[usuario] === senha) {
        alert("Sucesso!!!");
       
       
        if (modal) modal.style.display = "none";
        loginForm.reset();
    } else {
        alert("Usuário ou senha incorretos :(");
    }
});


