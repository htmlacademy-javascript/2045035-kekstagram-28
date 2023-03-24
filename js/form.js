import { isEscapeKey, toggleModalClasses } from './util.js';

/** @type {HTMLFormElement} */
const photoForm = document.querySelector('.img-upload__form');

const photoModal = photoForm.querySelector('.img-upload__overlay');
const uploadFile = photoForm.filename;

const imgUploadHashtags = photoForm.querySelector('.text__hashtags');
const imgUploadComment = photoForm.querySelector('.text__description');

const closeModal = () => photoForm.reset();

const isTextFocused = () =>
	document.activeElement === imgUploadHashtags || document.activeElement === imgUploadComment;

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
	toggleModalClasses(photoModal,false);
	document.removeEventListener('keydown', onDocumentKeydown);
});

photoForm.addEventListener('submit', (evt) => {
	evt.preventDefault();
	// pristine.validate();
});
