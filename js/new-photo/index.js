import { isEscapeKey, toggleModalClasses } from '../util.js';
import { validate, resetValidation } from './validation.js';
import { resetScale } from './zoom.js';
import { photoForm, descriptionElement, hashtagsInput } from './elements.js';
import { resetEffects } from './effects.js';

const photoModal = photoForm.querySelector('.img-upload__overlay');
/** @type {HTMLInputElement} */
const uploadFile = photoForm.filename;

const isTextFocused = () => document.activeElement === hashtagsInput || document.activeElement === descriptionElement;

const closeModal = () => photoForm.reset();

const onDocumentKeydown = (evt) => {
	if (isEscapeKey(evt) && !isTextFocused()) {
		evt.preventDefault();
		closeModal();
	}
};

const loadNewPhotoForm = () => {
	toggleModalClasses(photoModal);
	document.addEventListener('keydown', onDocumentKeydown);
};

uploadFile.addEventListener('change', loadNewPhotoForm);

photoForm.addEventListener('reset', () => {
	toggleModalClasses(photoModal, false);
	document.removeEventListener('keydown', onDocumentKeydown);

	resetValidation();
	resetScale();
	resetEffects();
});

photoForm.addEventListener('submit', (evt) => {
	evt.preventDefault();
	validate();
});
