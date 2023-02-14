import { galleryItems } from "./gallery-items.js";
// Change code below this line

function createGalleryCollection(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
           <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
            </a>
        </li>`;
    })
    .join("");
}
const container = document.querySelector(".gallery");
const img = createGalleryCollection(galleryItems);
container.insertAdjacentHTML("beforeend", img);
container.addEventListener("click", nameImages);

function nameImages(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
  }
}
const lightbox = new SimpleLightbox(".gallery a", {
  scrollZoom: true,
  captionDelay: 250,
  captionsData: "alt",
  doubleTapZoom: 2,
});

console.log(galleryItems);
