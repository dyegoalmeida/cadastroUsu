document.addEventListener('DOMContentLoaded', () => {

    let btnSalvarUsuarios = document.getElementById("salvarUsuarios");
    let btnEnableComplement = document.getElementById("btnComplement");
    
    btnSalvarUsuarios.addEventListener('click', saveUser);
    btnEnableComplement.addEventListener('click', enableBtnComplement);

    document.getElementById("complemento").style.display = 'none';

});

var arrayObj = [];

function enableBtnComplement(){
    
    let field = document.getElementById("complemento");

    field.style.display == 'block' ? field.style.display = 'none' : field.style.display = 'block'; 

}

function saveUser() {

    let msgValidacao = validationFields();
    if (msgValidacao !== ""){
        alert(msgValidacao);
        msgValidacao = "";
        return false;
    }
 
    var newUsuario = createUser();

    addUserArray(newUsuario);

    addUserTable(newUsuario);

    showTotalUsers();

    clearFields();

}

function validationFields(){
    
    let message = "";

    const ElementoInput = document.querySelectorAll('input');
    for (var input of ElementoInput.values()) {
        if (input.value == "") {
            if (input.style.display == 'block' || input.style.display == ''){
                message += input.name + "\n";
            };
        };
    };

    if (message !== ""){
        let messageTopo = "Esses campos são obrigatórios, precisam ser preenchidos\n";
        messageTopo += message;
        return messageTopo   
    }

    return message;
    
}

function clearFields() {

    const ElementoInput = document.querySelectorAll('input');
    for (var input of ElementoInput.values()) {
        input.value = "";
    }

    const ElementoSelect = document.querySelectorAll('select');
    for (var select of ElementoSelect.values()) {
        select.value = "";
    }

}

function createUser() {

    const date = new Date();
    var usuario = new Object;

    usuario.nome = document.getElementById("nome").value;
    usuario.email = document.getElementById("email").value;
    usuario.fone = document.getElementById("fone").value;
    usuario.cep = document.getElementById("cep").value;
    usuario.rua = document.getElementById("rua").value;
    usuario.numResidencia = document.getElementById("numResidencia").value;
    usuario.complemento = document.getElementById("complemento").value;
    usuario.bairro = document.getElementById("bairro").value;
    usuario.cidade = document.getElementById("cidade").value;
    usuario.estado = document.getElementById("estado").value;
    usuario.dtCadastro = ((date.getDate()) + '/' + (date.getMonth() + 1) + '/' + (date.getFullYear()));

    return usuario;

}

function addUserArray(usuario) {

    arrayObj.push(usuario);

}

function removerUsuario(id) {

    arrayObj.splice(id, 1);
    document.getElementById("tbody").deleteRow(id);

    showTotalUsers();

}

function addUserTable(usuario){

    let table = document.getElementById("tbody");
    let td = table.insertRow();

    let tdNome          = td.insertCell();
    let tdEmail         = td.insertCell();
    let tdFone          = td.insertCell();
    let tdCep           = td.insertCell();
    let tdRua           = td.insertCell();
    let tdNumResidencia = td.insertCell();
    let tdComplemento   = td.insertCell();
    let tdBairro        = td.insertCell();
    let tdCidade        = td.insertCell();
    let tdEstado        = td.insertCell();
    let tdDtCadastro    = td.insertCell();
    let tdDelete        = td.insertCell();

    tdNome.innerText          = usuario.nome;
    tdEmail.innerText         = usuario.email;
    tdFone.innerText          = usuario.fone;
    tdCep.innerText           = usuario.cep;
    tdRua.innerText           = usuario.rua;
    tdNumResidencia.innerText = usuario.numResidencia;
    tdComplemento.innerText   = usuario.complemento;
    tdBairro.innerText        = usuario.bairro;
    tdCidade.innerText        = usuario.cidade;
    tdEstado.innerText        = usuario.estado;
    tdDtCadastro.innerText    = usuario.dtCadastro;

    let divImg = document.createElement("div");
    divImg.id = "divImg";

    let imgDelete = document.createElement("img");
    imgDelete.src = 'img/trash.svg';
    imgDelete.width="30";
    imgDelete.height="30";
    imgDelete.setAttribute("onclick", "removerUsuario(" + table.index + ")");

    tdDelete.appendChild(divImg);
    divImg.appendChild(imgDelete);

}

function showTotalUsers() {

    document.getElementById("totalUsuario").innerText = arrayObj.length;

}



