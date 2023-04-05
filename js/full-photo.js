import { getPhotoByID } from './data.js';
import { isEscapeKey, toggleModalClasses } from './util.js';
import { renderPhotoComments, clearComments } from './comment.js';

const bigPhotoWrapper = document.querySelector('.big-picture');
const bigPicture = bigPhotoWrapper.querySelector('.big-picture__img img');
const bigPhotoDescription = bigPhotoWrapper.querySelector('.social__caption');
const likesCount = bigPhotoWrapper.querySelector('.likes-count');
const bigPhotoClose = bigPhotoWrapper.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
	if (isEscapeKey(evt)) {
		evt.preventDefault();
		closeBigPhoto();
	}
};

const renderPhotoDate = (photo) => {
	bigPicture.src = photo.url;
	likesCount.textContent = photo.likes;
	bigPhotoDescription.textContent = photo.description;

	renderPhotoComments(photo.comments);
};

/**
 * @param {Event} evt
 */
const onPreviewClick = async (evt) => {
	evt.preventDefault();

	const id = parseInt(evt.currentTarget.dataset.id, 10);
	const photo = await getPhotoByID(id);

	renderPhotoDate(photo);
	toggleModalClasses(bigPhotoWrapper);
	document.addEventListener('keydown', onDocumentKeydown);
};

function closeBigPhoto() {
	toggleModalClasses(bigPhotoWrapper, false);
	document.removeEventListener('keydown', onDocumentKeydown);
	clearComments();
}

bigPhotoClose.addEventListener('click', closeBigPhoto);

export { onPreviewClick, onDocumentKeydown };
