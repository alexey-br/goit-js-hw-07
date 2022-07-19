import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryRef.innerHTML = galleryMarkup;

galleryRef.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') return;

  const originalUrl = getOriginalUrl(e.target);

  openOriginalImg(originalUrl);
}

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
    )
    .join('');
}

function getOriginalUrl(elem) {
  return elem.dataset.source;
}

function openOriginalImg(originalUrl) {
  const originalImg = basicLightbox.create(`<img src="${originalUrl}">`, {
    onShow: () => document.addEventListener('keydown', modalCloseWithEsc),
    onClose: () => document.removeEventListener('keydown', modalCloseWithEsc),
  });
  originalImg.show();
  document.openedModal = originalImg;
}

function modalCloseWithEsc(e) {
  if (e.code === 'Escape') {
    document.openedModal.close();
    delete document.openedModal;
  }
}
