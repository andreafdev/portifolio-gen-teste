const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const mensagem = document.querySelector("#mensagem");

let nomeOk = false;  // boolean false controla se os campos foram validados com sucesso ou n
let emailOk = false; // quando a usu. preenche certo, o valor da variável correspondente
let mensagemOk = false; // é alterado para "true"
let cepOk = false;

// função p nome 
function validarNome() {
  let txtNome = document.querySelector("#txtNome");

  if (nome.value.length < 3) {
    txtNome.innerHTML = "Nome muito curto.";  // vai retornar essa mensagem
    txtNome.style.color = "red"; 
    nomeOk = false; // quando nomeOK for falso
  } else {
    txtNome.innerHTML = "Nome válido!"; // vai retornar essa mensagem 
    txtNome.style.color = "green";
    nomeOk = true; //quando o nomeOK for verdadeiro
  }
}

// função p email
function validarEmail() {
  let txtEmail = document.querySelector("#txtEmail");

  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txtEmail.innerHTML = "E-mail inválido";
    txtEmail.style.color = "red";
    emailOk = false;
  } else {
    txtEmail.innerHTML = "Email válido!";
    txtEmail.style.color = "green";
    emailOk = true;
  }
}

function validarEmail2() {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //expressão para validar um email
  let txtEmail = document.querySelector("#txtEmail");

  if (email.value.match(regex)) {
    txtEmail.innerHTML = "Email válido!";
    txtEmail.style.color = "green";
    emailOk = true;
  } else {
    txtEmail.innerHTML = "E-mail inválido";
    txtEmail.style.color = "red";
    emailOk = false;
  }
}

function validarMensagem() {
  let txtMensagem = document.querySelector("#txtMensagem");

  if (mensagem.value.length >= 50) {
    txtMensagem.innerHTML = "Sua mensagem ultrapassa o limite de caracteres!";
    txtMensagem.style.color = "red";
    mensagemOk = false;
  } else {
    txtMensagem.innerHTML = "✔";
    txtMensagem.style.color = "green";
    mensagemOk = true;
  }
}

function enviarForm() {
  if (nomeOk === true && emailOk === true && mensagemOk === true) {
    alert(nome.value + ", obrigado pelo contato, aguarde nosso retorno.");
  } else {
    alert("Por favor, preencha todos os campos corretamente.");
  }
}

const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);

function validarCep() {
  const cep = document.getElementById("cep").value.replace("-", "");

  if (cepValido(cep)) {
    txtCep.innerHTML = "✔";
    txtCep.style.color = "green";
    cepOk = true;
  } else {
    txtCep.innerHTML = "CEP Inválido";
    txtCep.style.color = "red";
    cepOK = false;
  }
}

function consultarCep() {
  document.getElementById("dados").innerHTML = "";
console.log(cepOk);
const cep = document.getElementById("cep").value.replace("-", "");
const url = `https://viacep.com.br/ws/${cep}/json/`; 

if (cepOk === true || cepValido(cep)) {
   
    fetch(url)
      .then((response) => response.json())
      .then((jsonBody) => {
        if (jsonBody.erro === true || jsonBody.logradouro === undefined) {
          alert("CEP nao encontrado!");
        } else {
          document.getElementById("dados").innerHTML =
            jsonBody.logradouro +
            "\n" +
            jsonBody.bairro +
            "\n" +
            jsonBody.localidade +
            "\n" +
            jsonBody.uf;
        }
      })
      .catch((error) => {
        alert("CEP não encontrado!");
      });
  }
}


