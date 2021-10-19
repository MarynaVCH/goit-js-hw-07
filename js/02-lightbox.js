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
    <a class="gallery__item" href="${preview}">
  <img class="gallery__image" src="${original}" alt="${description}" />
</a>
      `;
    })
    .join('');
}
