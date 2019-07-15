$('#lets-code').click((event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#mail').value;
  const whatsapp = document.querySelector('#wpp').value;
  const tipo = $('.tipo :selected').val();
  const linguagem = $('.linguagens :selected').val();

  const payload = { nome: name, email: email, whatsapp: whatsapp, tipo: tipo, linguagem: linguagem }

  fetch('https://devdelas-back.herokuapp.com/users/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)});

  // fetch('http://localhost:3000/users/', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(payload)}).then( response => console.log(response));

});
