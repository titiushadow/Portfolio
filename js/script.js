// Mascara
function format(mascara, documento){
  var i = documento.value.length;
  var saida = mascara.substring(0,1);
  var texto = mascara.substring(i)
  
  if (texto.substring(0,1) != saida){
            documento.value += texto.substring(0,1);
  }
}

// Botão enviar
function send() {
  swal({
    title: "Enviado com sucesso",
    text: "Obrigado por entrar em contato",
    icon: "success",
  });
}
