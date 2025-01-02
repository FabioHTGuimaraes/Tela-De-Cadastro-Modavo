//Inicio da função para puxar endereço pelo cep
function limpa_formulário_cep() {
  document.getElementById('rua').value=("");
  document.getElementById('bairro').value=("");
  document.getElementById('cidade').value=("");
  document.getElementById('uf').value=("");
  document.getElementById('ibge').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
  document.getElementById('rua').value=(conteudo.logradouro);
  document.getElementById('bairro').value=(conteudo.bairro);
  document.getElementById('cidade').value=(conteudo.localidade);
  document.getElementById('uf').value=(conteudo.uf);
  document.getElementById('ibge').value=(conteudo.ibge);
}
else {
  limpa_formulário_cep();
  alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {

var cep = valor.replace(/\D/g, '');

if (cep != "") {

  var validacep = /^[0-9]{8}$/;

  if(validacep.test(cep)) {

      document.getElementById('rua').value="...";
      document.getElementById('bairro').value="...";
      document.getElementById('cidade').value="...";
      document.getElementById('uf').value="...";

      var script = document.createElement('script');

      script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

      document.body.appendChild(script);

  }
  else {
      limpa_formulário_cep();
      alert("Formato de CEP inválido.");
  }
}
else {
  limpa_formulário_cep();
}
};

function limpa_formulário_cep() {
  document.getElementById('rua').value=("");
  document.getElementById('bairro').value=("");
  document.getElementById('cidade').value=("");
  document.getElementById('uf').value=("");
  document.getElementById('ibge').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
  document.getElementById('rua').value=(conteudo.logradouro);
  document.getElementById('bairro').value=(conteudo.bairro);
  document.getElementById('cidade').value=(conteudo.localidade);
  document.getElementById('uf').value=(conteudo.uf);
  document.getElementById('ibge').value=(conteudo.ibge);
}
else {
  limpa_formulário_cep();
  alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {

var cep = valor.replace(/\D/g, '');

if (cep != "") {

  var validacep = /^[0-9]{8}$/;

  if(validacep.test(cep)) {

      document.getElementById('rua').value="...";
      document.getElementById('bairro').value="...";
      document.getElementById('cidade').value="...";
      document.getElementById('uf').value="...";

      var script = document.createElement('script');

      script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

      document.body.appendChild(script);

  }
  else {
      limpa_formulário_cep();
      alert("Formato de CEP inválido.");
  }
}
else {
  limpa_formulário_cep();
}
};
//fim da função para puxar endereço pelo cep




//Inicio da função para bloquar caracteres
function bloquearCaracteres(event) {
  var tecla = event.which || event.keyCode;
  var teclaCaracter = String.fromCharCode(tecla);
  
  var regex = /^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+$/;
  
  if (!regex.test(teclaCaracter)) {
    event.preventDefault();
  }
}
// Fim da função para bloquear caracteres




//Inicio da função para limpar formulario
function limparFormulario() {
  document.getElementById("cadastroForm").reset();
}
//Fim da função para limpar formulario




//Inicio da função para mostrar e não mostrar senha
function togglePasswordVisibility() {
  var senhaInput = document.getElementById("senha");
  var eyeIcon = document.getElementById("eyeIcon");
  
  if (senhaInput.type === "password") {
    senhaInput.type = "text";
    eyeIcon.classList.remove("bi-eye");
    eyeIcon.classList.add("bi-eye-slash");
  } else {
    senhaInput.type = "password";
    eyeIcon.classList.remove("bi-eye-slash");
    eyeIcon.classList.add("bi-eye");
  }
}

function togglePasswordVisibility(fieldId) {
  var field = document.getElementById(fieldId);
  var eyeIcon = document.getElementById("eyeIcon" + fieldId.charAt(0).toUpperCase() + fieldId.slice(1));
  if (field.type === "password") {
    field.type = "text";
    eyeIcon.classList.remove("bi-eye");
    eyeIcon.classList.add("bi-eye-slash");
  } else {
    field.type = "password";
    eyeIcon.classList.remove("bi-eye-slash");
    eyeIcon.classList.add("bi-eye");
  }
}
//Fim da função para mostrar e não mostrar senha




// Início da função para salvar no LocalStorage
function salvarCredenciais(nomeCompleto, dataNascimento, sexo, nomeMaterno, cpf, email, celular, telefoneFixo, cep, rua, numero, bairro, complete, cidade, uf, usuario, senha) {

  var usuariosSalvos = JSON.parse(localStorage.getItem('Usuarios')) || [];

  // Crie um objeto para representar os dados do usuário
  var usuarioData = {
    'Nome Completo': nomeCompleto,
    'Data De Nascimento': dataNascimento,
    'Sexo': sexo,
    'Nome Materno': nomeMaterno,
    'CPF': cpf,
    'Email': email, 
    'Telefone Celular': celular,
    'Telefone Fixo': telefoneFixo,
    'CEP': cep,
    'Rua': rua,
    'Número': numero,
    'Bairro': bairro,
    'Complemento': complete,
    'Cidade': cidade,
    'Estado': uf,
    'Login': usuario,
    'Senha': senha
  };

  // Adicionar o novo usuário ao array
  usuariosSalvos.push(usuarioData);

  // Salvar o array de usuários no localStorage
  localStorage.setItem('Usuarios', JSON.stringify(usuariosSalvos));
}
//Fim da função para salvar no LocalStorage




// Inicio da função para validar CPF
function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf === '') return false;

  // Eliminar CPFs inválidos conhecidos
  if (
    cpf.length !== 11 ||
    cpf === '00000000000' ||
    cpf === '11111111111' ||
    cpf === '22222222222' ||
    cpf === '33333333333' ||
    cpf === '44444444444' ||
    cpf === '55555555555' ||
    cpf === '66666666666' ||
    cpf === '77777777777' ||
    cpf === '88888888888' ||
    cpf === '99999999999'
  ) {
    return false;
  }

  // Validar 1º dígito
  var add = 0;
  for (var i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
  var rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf.charAt(9))) return false;

  // Validar 2º dígito
  add = 0;
  for (var i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
  rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf.charAt(10))) return false;

  return true;
}
// Fim da função para validar CPF




// Inicio da Função para exibir as mensagens de erro
function exibirMensagemErro(campo, mensagem) {
  var divErro = document.getElementById('error-' + campo.id);
  divErro.innerHTML = mensagem;
}
// Fim da Função para exibir as mensagens de erro




// Inicio da Função para limpar todas as mensagens de erro
function limparMensagensErro() {
  var errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(function(error) {
    error.innerHTML = '';
  });
}
// Fim da Função para exibir e limpar a mensagem de erro




// Função para validar o formulário
function validarFormulario() {
  // Obtenha referências para os elementos do formulário
  var campos = document.querySelectorAll('input, select');
  
  // Limpe as mensagens de erro anteriores
  limparMensagensErro();

  // Variáveis para verificar se houve algum erro de validação
  var erroEncontrado = false;
  var mensagemErro = "";

  // Verifique cada campo individualmente está preenchido
  campos.forEach(function(campo) {
    if (campo.value === "") {
      exibirMensagemErro(campo, "Por favor, preencha este campo.");
      erroEncontrado = true;
    }

    // Verifique outros critérios de validação, como CPF, senha, etc.
    if (campo.id === 'cpf') {
      if (!validarCPF(campo.value)) {
        exibirMensagemErro(campo, "CPF inválido.");
        erroEncontrado = true;
      }
    }

    // Verifique se a senha e a confirmação de senha coincidem
    if (campo.id === 'confirmarSenha') {
      var senha = document.getElementById('senha');
      if (senha.value !== campo.value) {
        exibirMensagemErro(campo, "As senhas não coincidem.");
        erroEncontrado = true;
      }
    }
  });

  // Se não houver erros, envie o formulário
  if (!erroEncontrado) {
    // Salvar os dados no localStorage
    salvarCredenciais(
      nomeCompleto.value,
      dataNascimento.value,
      sexo.value,
      nomeMaterno.value,
      cpf.value,
      email.value,
      celular.value,
      telefoneFixo.value,
      cep.value,
      rua.value,
      numero.value,
      bairro.value,
      complete.value,
      cidade.value,
      uf.value,
      usuario.value,
      senha.value
    );

    // Redirecionar para a página de login
    window.location.href = "login.html";
  }

  // Impedir o envio do formulário
  return false;
}
// Fim da função para validar o formulário




