import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryRef.innerHTML = galleryMarkup;

galleryRef.addEventListener('click', onGalleryItemClick);

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

function onGalleryItemClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') return;
}

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" 
          alt="${description}" />
        </a>`
    )
    .join('');
}
