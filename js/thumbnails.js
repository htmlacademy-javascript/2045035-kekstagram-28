import { mockedPhotos as photos } from './mocks.js';
import { onPreviwClick } from './full-photo.js';
import { getTemplate } from './util.js';

/** @type {HTMLElement} куда будем вставлять шаблон */
const picturesContainer = document.querySelector('.pictures');

/** @type {HTMLAnchorElement} шаблон */
const templatePicture = getTemplate('picture');

/** коробочка */
const photosFragment = document.createDocumentFragment();

const renderThumbnail = ({ url, likes, comments, id, description }, pictureElement) => {
	const image = pictureElement.querySelector('.picture__img');
	image.src = url;
	image.alt = description;

	pictureElement.querySelector('.picture__likes').textContent = likes;
	pictureElement.querySelector('.picture__comments').textContent = comments.length;

	pictureElement.dataset.id = id;
};

for (const photo of photos) {
	const pictureElement = templatePicture.cloneNode(true);

	renderThumbnail(photo, pictureElement);
	pictureElement.addEventListener('click', onPreviwClick);

	photosFragment.appendChild(pictureElement);
}

picturesContainer.appendChild(photosFragment);//достаём из коробочки

// export {picturesContainer};
