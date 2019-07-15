$(document).ready(() => {
  fetch('https://devdelas-back.herokuapp.com/alunas/')
    .then((response) => {
      return response.json()
    }).then((alunas) => {
      alunas.forEach((element) => {
        $('.listagem').append(`<div class='aluna'><p>${element.nome}</p><p>${element.whatsapp}</p><p>${element.email}</p><p>${element.linguagem}</p><br /></div>`)
      });
    });
});

// $(document).ready(() => {
//   fetch('http://localhost:3000/alunas/')
//     .then((response) => {
//       return response.json()
//     }).then((alunas) => {
//       alunas.forEach((element) => {
//         $('.listagem').append(`<div class='aluna'><p>${element.nome}</p><p>${element.whatsapp}</p><p>${element.email}</p><p>${element.linguagem}</p><br /></div>`)
//       });
//     });
// });
