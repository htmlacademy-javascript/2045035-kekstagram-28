import { isEscapeKey, toggleModalClasses } from '../util.js';
import { validate, resetValidation } from './validation.js';
import { resetScale } from './zoom.js';
import { photoForm, descriptionElement, hashtagsInput } from './elements.js';
import { resetEffects } from './effects.js';
import { sendData } from '../api.js';
import { showErrorMessage, showSuccessMessage } from '../alerts.js';

const photoModal = photoForm.querySelector('.img-upload__overlay');
const submitButton = photoForm.querySelector('#upload-submit');

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

// const blockSubmitButton = () => {
// 	submitButton.disabled = true;
// };

// const unblockSubmitButton = () => {
// 	submitButton.disabled = false;
// };

photoForm.addEventListener('submit', (evt) => {
	evt.preventDefault();
	const isValid = validate();

	if (isValid) {
		submitButton.disabled = true;

		const data = new FormData(evt.target);
		sendData(data)
			.then(() => {
				closeModal();
				showSuccessMessage();
			})
			.catch(() => showErrorMessage())
			.finally(submitButton.disabled = false);
	}
});

