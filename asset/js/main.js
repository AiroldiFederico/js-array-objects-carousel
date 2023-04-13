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
let index = 0;


// punto all'immagine in html
let img = document.querySelector(".image");


// assegno le keys nell'array a una variabile
let keys = Object.keys(images[index]);

//inizializzo immagine testo e titolo
img.setAttribute('src', images[0][keys[0]]);
document.getElementById('titolo').innerHTML = `${images[0][keys[1]]}`
document.getElementById('testo').innerHTML = `${images[0][keys[2]]}`
updateThumbnail(index);



function updateThumbnail(index) {
  // Rimuovi la classe "actual" da tutte le immagini thumbnail
  let thumbnails = document.querySelectorAll(".thumb");
  thumbnails.forEach(function(thumbnail) {
    thumbnail.classList.remove("actual");
  });
 
  document.getElementById(`${index}`).classList.add('actual');
}




//incremento
next.addEventListener('click', function(){
  

  //incremento indice
  index++;
  
  //setto l'indice a 0 quando finisce l'array
  if (index >= images.length) {
    index = 0;
  }

  //immagine thumbnail attuale
  updateThumbnail(index);

  //uso l'indice array ed argomento oggetto per l'attributo src
  img.setAttribute('src', images[index][keys[0]]);

  //uso l'indice array ed argomento oggetto per il titolo dell'immagine
  document.getElementById('titolo').innerHTML = `${images[index][keys[1]]}`

  //uso l'indice array ed argomento oggetto per il titolo dell'immagine
  document.getElementById('testo').innerHTML = `${images[index][keys[2]]}`

  console.log(index);

});


//decremento
prev.addEventListener('click', function(){

  
  //decremento indice
  index--;
  
  //setto l'indice a 4 quando finisce l'array
  if (index < 0) {
    index = images.length - 1;
  }
  
  //immagine thumbnail attuale
  updateThumbnail(index);

  //uso l'indice array per l'attributo src
  img.setAttribute('src', images[index][keys[0]]);

  //uso l'indice array ed argomento oggetto per il titolo dell'immagine
  document.getElementById('titolo').innerHTML = `${images[index][keys[1]]}`

  //uso l'indice array ed argomento oggetto per il titolo dell'immagine
  document.getElementById('testo').innerHTML = `${images[index][keys[2]]}`


  console.log(index);

});

console.log(index);


// al click della thumbnail cambia l'immagine il titolo e il testo

let thumbnails = document.querySelectorAll(".thumb");
console.log(thumbnails);

thumbnails.forEach(function(element, index) {

  console.log(element);
  element.addEventListener("click", function() {

    // Aggiorna l'immagine principale del carosello
    img.setAttribute("src", images[index][keys[0]]);
    
    //uso l'indice array ed argomento oggetto per il titolo dell'immagine
    document.getElementById('titolo').innerHTML = `${images[index][keys[1]]}`

    //uso l'indice array ed argomento oggetto per il titolo dell'immagine
    document.getElementById('testo').innerHTML = `${images[index][keys[2]]}`

    // Aggiorna le classi delle immagini thumbnail
    updateThumbnail(index);
  });
});



setInterval(function() {
  // Incrementa l'indice dell'immagine corrente
  index = (index + 1) % images.length;

  // Aggiorna l'immagine principale del carosello
  img.setAttribute("src", images[index].image);

  // Aggiorna le classi delle immagini thumbnail
  updateThumbnail(index);
}, 3000);
