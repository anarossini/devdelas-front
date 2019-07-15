$('#lets-code').click((event) => {
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#mail').value;
  const whatsapp = document.querySelector('#wpp').value;
  const tipo = $('.tipo :selected').val();

  const payload = { nome: name, email: email, whatsapp: whatsapp, tipo: tipo }

  // fetch('http://localhost:3000/users/', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(payload)}).then(response => console.log(response.json()));

  fetch('https://devdelas-back.herokuapp.com/users/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)}).then(response => console.log(response.json()));
});
