const formulario = document.getElementById('formulario-01');

if(formulario)
formulario.addEventListener('submit', function(evento) {
  
  evento.preventDefault();
  evento.stopPropagation();

  if(this.getAttribute('class').match(/erro/)) {
    return false;
  }

  let dados = new FormData(this); //para não precisar repetir a expressão "getElementById('formulario-01')" podemos utilizar o "this"

  let notas = [];

  for(let key of dados.keys()) {
    let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // é um número

    if(!isNaN(numero)) {
      notas.push(numero);
    }

    // adicionar itens no array
    notas.push( parseInt(dados.get(key)));

  }

  console.log(notas);

  console.log(objeto);

  texto = aprovacao(notas)

  document.getElementById('resultado').innerHTML = texto;

});

function validaCampo(elemento) {
 
  elemento.addEventListener('focusout', function(event) {
  
    event.preventDefault();
  
    if(this.value == "") {
      document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho!";
      this.classList.add('erro');
      this.parentNode.classList.add('erro');
      return false;
    } else {
      document.querySelector('.mensagem').innerHTML = "";
      this.classList.remove('erro');
      this.parentNode.classList.remove('erro');
    }
  
  });

}

function validaCampoNumerico(elemento) {
 
  elemento.addEventListener('focusout', function(event) {
  
    event.preventDefault();

    let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value; //valida cep
    if(numero != "" && numero.match(/[0-9]*/) && numero >= 0 && numero < 10) {
      document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho!";
      this.classList.remove('erro');
      this.parentNode.classList.remove('erro');
    } else {
      document.querySelector('.mensagem').innerHTML = "";
      this.classList.add('erro');
      this.parentNode.classList.add('erro');
      return false;
    } 
    
  });
}

function validaEmail(elemento) {
  
  elemento.addEventListener('focusout', function(event) {
  
    event.preventDefault();
    
    const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i; //regex
    if(this.value.match(emailValido) ) { //valida e-mail
      document.querySelector('.mensagem').innerHTML = "";
      this.classList.remove('erro');
      this.parentNode.classList.remove('erro');
    } else {
      document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho!";
      this.classList.add('erro');
      this.parentNode.classList.add('erro');
      return false;
    }

  });
}

function validaUf(elemento) {
  
  elemento.addEventListener('focusout', function(event) {
  
    event.preventDefault();
    
    const ufValido = /^(\s*(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)?)$/i; 
    if(this.value.match(ufValido) ) { 
      document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho!";
      this.classList.add('erro');
      this.parentNode.classList.add('erro');
    } else {
      document.querySelector('.mensagem').innerHTML = "";
      this.classList.remove('erro');
      this.parentNode.classList.remove('erro');
      return false;
    }

  });
}


let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');
let camposEmail = document.querySelectorAll('input.email');
let camposUf = document.querySelectorAll('input.uf');

for( let emFoco of camposObrigatorios) {
  validaCampo(emFoco);
}

for( let emFoco of camposNumericos) {
  validaCampoNumerico(emFoco);
}

for( let emFoco of camposEmail) {
  validaEmail(emFoco);
}

for( let emFoco of camposUf) {
  validaUf(emFoco);
}