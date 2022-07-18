import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

galleryRef.addEventListener('click', onGalleryItemClick);

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
  })
  .join('');

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

function onGalleryItemClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') return;

  const originalUrl = getOriginalUrl(e.target);

  openOriginalImg(originalUrl);
}

function getOriginalUrl(elem) {
  return elem.dataset.source;
}

function openOriginalImg(originalUrl) {
  const originalImg = basicLightbox.create(`<img src="${originalUrl}">`);
  originalImg.show();

  closeModalWithEscape(originalImg);
}

function closeModalWithEscape(openedModal) {
  document.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      openedModal.close();
    }
  });
}
