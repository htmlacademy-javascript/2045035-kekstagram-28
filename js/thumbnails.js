import { onPreviewClick } from './full-photo.js';
import { getTemplate } from './util.js';


/** @type {HTMLElement} */
const picturesContainer = document.querySelector('.pictures');

/** @type {HTMLAnchorElement} */
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

	const photosFragment = document.createDocumentFragment();

	for (const photo of photos) {
		const thumbnail = renderThumbnail(photo);
		thumbnail.addEventListener('click', onPreviewClick);
		photosFragment.appendChild(thumbnail);
	}

	picturesContainer.appendChild(photosFragment);
};

export {renderThumbnails};
