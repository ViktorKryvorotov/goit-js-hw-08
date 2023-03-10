// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);



const setGallery = document.querySelector('.gallery');
const galleryMarkup = creatGalleryElMarkup(galleryItems);
setGallery.insertAdjacentHTML('beforeend', galleryMarkup);
setGallery.addEventListener('click', onSetGalleryClick);
var lightbox = new SimpleLightbox('.gallery a', {captionsData:'alt', captionDelay:250,});


function creatGalleryElMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
      return`
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
        />
        </a>`
    }).join('');
  
}

function onSetGalleryClick(event) {
     if (event.target.nodeName !== "IMG") {
    return;
  }
    event.preventDefault();
   
}