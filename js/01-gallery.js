import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup();

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
    .join('');
}

galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {
  event.preventDefault();

  galleryItems.map(({ original }) => {
    if (original === event.target.dataset.source) {
      const instance = basicLightbox.create(`<img src=${original} width="800" height="600">`);

      instance.show();

      document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
          instance.close();
        }
      });
    }
  });
}
