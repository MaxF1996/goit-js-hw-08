// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryItemsHtml = galleryItems
  .map(
    imageItem =>
      `<a class="gallery__item" href="${imageItem.original}"><img class="gallery__image" src="${imageItem.preview}" alt="${imageItem.description}" /></a>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', galleryItemsHtml);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
