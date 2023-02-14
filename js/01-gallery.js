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
const imgItem = createGalleryCollection(galleryItems);
container.insertAdjacentHTML("beforeend", imgItem);
container.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  openOriginalImgModal(event);
}

function openOriginalImgModal(event) {
  const imgEl = basicLightbox.create(
    `<img width="1280" height="968" alt="${event.target.alt}" src= "${event.target.dataset.source}" ></img>`
  );
  imgEl.show();
  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      imgEl.close();
    }
  });
}

console.log(galleryItems);
