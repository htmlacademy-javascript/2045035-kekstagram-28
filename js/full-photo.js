import { getPhotoByID } from './data.js';
import { isEscapeKey } from './util.js';
import { renderPhotoComments, clearComments } from './comment.js';

const documentBody = document.body;
const bigPhotoWrapper = documentBody.querySelector('.big-picture');
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


const changeClasses = (willBeOpened = true) => {
	bigPhotoWrapper.classList.toggle('hidden', !willBeOpened);
	documentBody.classList.toggle('modal-open', willBeOpened);
};

/**
 * @param {Event} evt
 */
const onPreviewClick = (evt) => {
	evt.preventDefault();

	const id = parseInt(evt.currentTarget.dataset.id, 10);
	const photo = getPhotoByID(id);

	renderPhotoDate(photo);
	changeClasses(true);

	document.addEventListener('keydown', onDocumentKeydown);
};

function closeBigPhoto() {
	changeClasses(false);
	document.removeEventListener('keydown', onDocumentKeydown);
	clearComments();
}

bigPhotoClose.addEventListener('click', closeBigPhoto);

export { onPreviewClick, onDocumentKeydown };
