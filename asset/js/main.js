/*
Consegna:
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.

Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

*/


// array immagini
// let imagesold = [
//   './asset/img/01.webp',
//   './asset/img/02.webp',
//   './asset/img/03.webp',
//   './asset/img/04.webp',
//   './asset/img/05.webp',
// ]





//incremento
// next.addEventListener('click', function(){

//   //uso l'indice array per l'attributo src
//   img.setAttribute('src', imagesold[index]);
//   index++;

//   //setto l'indice a 0 quando finisce l'array
//   if (index >= imagesold.length) {
//       index = 0;
//   }

// });

//decremento
// prev.addEventListener('click', function(){

//   //uso l'indice array per l'attributo src
//   img.setAttribute('src', imagesold[index]);
//   index--;

//   //setto l'indice a 0 quando finisce l'array
//   if (index < 0) {
//       index = imagesold.length - 1;
//   }

// });



/* NUOVA LOGICA ----------------------------------------------*/


const images = [
  {
      image: './asset/img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
      image: './asset/img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
      image: './asset/img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
      image: './asset/img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
      image: './asset/img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];


// dichiaro variabili che puntano alle freccie
// freccia sopra e sotto
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');




//dichiaro variabile per l'index
let index = 1;


// punto all'immagine in html
let img = document.querySelector(".image");


// assegno le keys nell'array a una variabile
let keys = Object.keys(images[index]);

//inizializzo immagine testo e titolo
img.setAttribute('src', images[0][keys[0]]);
document.getElementById('titolo').innerHTML = `${images[0][keys[1]]}`
document.getElementById('testo').innerHTML = `${images[0][keys[2]]}`



// let actualImgThumb = document.getElementById(`1`);
// actualImgThumb.classList.add('actual');
// let prevIndex = index - 1;
// let actualImgThumb = document.getElementById(`${index}`);
// let prevImgThumb = document.getElementById(`${prevIndex}`);
//actualImgThumb.classList.add('actual');
//prevImgThumb.classList.remove('actual');
//console.log(actualImgThumb);
// console.log(index);
// console.log(prevIndex);



//incremento
next.addEventListener('click', function(){


  // document.getElementById(`${index + 1}`).classList.add('actual');
  // document.getElementById(`${index - 1}`).classList.remove('actual');


  //uso l'indice array ed argomento oggetto per l'attributo src
  img.setAttribute('src', images[index][keys[0]]);

  //uso l'indice array ed argomento oggetto per il titolo dell'immagine
  document.getElementById('titolo').innerHTML = `${images[index][keys[1]]}`

  //uso l'indice array ed argomento oggetto per il titolo dell'immagine
  document.getElementById('testo').innerHTML = `${images[index][keys[2]]}`

  
  //incremento indice
  index++;



  //setto l'indice a 0 quando finisce l'array
  if (index >= images.length) {
      index = 0;
  }

});


//decremento
prev.addEventListener('click', function(){

  //uso l'indice array per l'attributo src
  img.setAttribute('src', images[index][keys[0]]);

  //uso l'indice array ed argomento oggetto per il titolo dell'immagine
  document.getElementById('titolo').innerHTML = `${images[index][keys[1]]}`

  //uso l'indice array ed argomento oggetto per il titolo dell'immagine
  document.getElementById('testo').innerHTML = `${images[index][keys[2]]}`

  //decremento indice
  index--;

  //setto l'indice a 0 quando finisce l'array
  if (index < 0) {
      index = images.length - 1;
  }

});


