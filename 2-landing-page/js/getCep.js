$('#cep').keyup(function(){
  var cep = $(this).val();

  if(cep === '') {
    document.querySelector('.error').innerHTML = "";
  }
  
  async function getAddress(cep) {
    try {
      let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      let data = await response.json();

      if (!("erro" in data)) {
        document.querySelector('.endereco').value = data.logradouro;
        document.querySelector('.cidade').value = data.localidade;
        document.querySelector('.complemento').value = data.complemento;
        document.querySelector('.bairro').value = data.bairro;
      } 
      else {
        document.querySelector('.error').innerHTML = "*Cep invalido";
        limpa_formulário_cep();
      }

    } catch (error) {
      throw new Error('Algo deu errado na requisição');
    }
  }

  getAddress(cep);

  function limpa_formulário_cep() {
    document.querySelector('.endereco').value=("");
    document.querySelector('.cidade').value=("");
    document.querySelector('.complemento').value=("");
    document.querySelector('.bairro').value=("");
  }
});