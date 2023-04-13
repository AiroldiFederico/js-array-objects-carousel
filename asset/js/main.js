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
let images = [
  './asset/img/01.webp',
  './asset/img/02.webp',
  './asset/img/03.webp',
  './asset/img/04.webp',
  './asset/img/05.webp',
]

// dichiaro variabili che puntano alle freccie
// freccia sopra e sotto
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

//dichiaro variabile per l'index
let index = 0;

let img = document.querySelector(".image");

//incremento
next.addEventListener('click', function(){

  //uso l'indice array per l'attributo src
  img.setAttribute('src', images[index]);
  index++;

  //setto l'indice a 0 quando finisce l'array
  if (index >= images.length) {
      index = 0;
  }

});

//decremento
prev.addEventListener('click', function(){

  //uso l'indice array per l'attributo src
  img.setAttribute('src', images[index]);
  index--;

  //setto l'indice a 0 quando finisce l'array
  if (index < 0) {
      index = images.length - 1;
  }

});