import { onPreviewClick } from './full-photo.js';
import { getTemplate } from './util.js';
// import { getData } from './api.js';

// const filter = document.querySelector('.img-filters');

/** @type {HTMLElement} куда будем вставлять шаблон */
const picturesContainer = document.querySelector('.pictures');

/** @type {HTMLAnchorElement} шаблон */
const templatePicture = getTemplate('picture');

const renderThumbnail = ({ url, likes, comments, id, description }) => {
	const pictureElement = templatePicture.cloneNode(true);
	const image = pictureElement.querySelector('.picture__img');
	image.src = url;
	image.alt = description;

	pictureElement.querySelector('.picture__likes').textContent = likes;
	pictureElement.querySelector('.picture__comments').textContent = comments.length;

	pictureElement.dataset.id = id;

	return pictureElement;
};

const removePhotos = () => picturesContainer.querySelectorAll('.picture').forEach((element) => element.remove());

const renderThumbnails = (photos) => {
	removePhotos();
	/** коробочка */
	const photosFragment = document.createDocumentFragment();

	for (const photo of photos) {
		const thumbnail = renderThumbnail(photo);
		thumbnail.addEventListener('click', onPreviewClick);
		photosFragment.appendChild(thumbnail);
	}

	picturesContainer.appendChild(photosFragment);
};

export {renderThumbnails};
