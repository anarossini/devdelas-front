$(document).ready(() => {
  fetch('https://devdelas-back.herokuapp.com/alunas/')
    .then((response) => {
      return response.json()
    }).then((alunas) => {
      alunas.forEach((element) => {
        $('.listagem').append(`<div class='aluna'><p>${element.nome}</p><p>${element.whatsapp}</p><p>${element.email}</p><br /></div>`)
      });
    });
});
