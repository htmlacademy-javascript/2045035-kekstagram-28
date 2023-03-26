import { isEscapeKey, toggleModalClasses } from './util.js';
import { initValidation } from './validation.js';
import { resetScale } from './zoom.js';

/** @type {HTMLFormElement} */
const photoForm = document.querySelector('.img-upload__form');

const photoModal = photoForm.querySelector('.img-upload__overlay');
const uploadFile = photoForm.filename;

const closeModal = () => photoForm.reset();

const {isTextFocused, validate, resetValidation} = initValidation(photoForm);

const onDocumentKeydown = (evt) => {
	if (isEscapeKey(evt) && !isTextFocused()) {
		evt.preventDefault();
		closeModal();
	}
};

const loadNewPhotoForm = () => {
	toggleModalClasses(photoModal);
	document.addEventListener('keydown', onDocumentKeydown);
	resetScale();
};

uploadFile.addEventListener('change', loadNewPhotoForm);

photoForm.addEventListener('reset', () => {
	toggleModalClasses(photoModal,false);
	document.removeEventListener('keydown', onDocumentKeydown);
	resetValidation();
});

photoForm.addEventListener('submit', (evt) => {
	evt.preventDefault();
	validate();
});
