// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line


const ulEl = document.querySelector('.gallery');

galleryItems.forEach(el => {
ulEl.insertAdjacentHTML(
    'beforeEnd',
    `<li class="gallery__item">
        <a class="gallery__link" href="${el.original}">
        <img
            class="gallery__image"
            src="${el.preview}"
            alt="${el.description}"
            
        />
        </a>
    </li>`
);
});

const lightbox = new SimpleLightbox('.gallery a', {
captionsData: 'alt',
captionDelay: 250,
});

