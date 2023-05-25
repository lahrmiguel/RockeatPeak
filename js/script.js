function validarFormulario() {
  var nome = document.getElementById("nome").value;
  var telefone = document.getElementById("telefone").value;
  var email = document.getElementById("email").value;

  if (nome === "" || telefone === "" || email === "") {
    alert("Por favor, preencha todos os campos.");
    return false;
  }

  // Validar o formato do telefone usando uma expressão regular
  var telefoneRegex = /^\d{10}$/; // Número de telefone com 10 dígitos
  if (!telefone.match(telefoneRegex)) {
    alert("Por favor, insira um número de telefone válido com 10 dígitos.");
    return false;
  }

  // Validar o formato do e-mail usando uma expressão regular
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailRegex)) {
    alert("Por favor, insira um endereço de e-mail válido.");
    return false;
  }

  // Se todas as validações passaram, o formulário é válido
  return true;
}
function enviarDados() {
  if (validarFormulario()) {
    alert("Dados enviados com sucesso!");
  }
}