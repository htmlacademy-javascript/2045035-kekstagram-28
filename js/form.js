// import { isEscapeKey } from './util.js';

const newPhotoLoade = document.querySelector('.img-upload__overlay');
// const uploadFile = document.querySelector('#upload-file');
// const uploadCansel = document.querySelector('#upload-cancel');
// const documentBody = document.body;

newPhotoLoade.classList.remove('hidden');

// const onDocumentKeydown = (evt) => {
// 	if (isEscapeKey(evt)) {
// 		evt.preventDefault();
// 		canselLoadNewFhotoForm();
// 	}
// };

// const changeFormClasses = (willBeOpened = true) => {
// 	newPhotoLoade.classList.toggle('hidden', !willBeOpened);
// 	documentBody.classList.toggle('modal-open', willBeOpened);
// };

// const loadNewFhotoForm = () => {
// 	changeFormClasses(true);
// 	document.addEventListener('keydown', onDocumentKeydown);
// };

// function canselLoadNewFhotoForm() {
// 	changeFormClasses(false);
// 	document.removeEventListener('keydown', onDocumentKeydown);
// 	uploadFile.value = '';
// }

// uploadFile.addEventListener('change', loadNewFhotoForm);
// uploadCansel.addEventListener('click', canselLoadNewFhotoForm);

//валидация формы

const newPhotoLoadeForm = document.querySelector('.img-upload__form'); //форма
const imgUploadHashtags = newPhotoLoadeForm.querySelector('.text__hashtags'); //инпут хэштега

// const pristine = new Pristine(newPhotoLoadeForm, {
// 	classTo: 'setup-wizard-form__element',
// 	errorTextParent: 'setup-wizard-form__element',
// 	errorTextClass: 'setup-wizard-form__error-text',
// });

// const hashtags = /^#[a-zа-яё0-9]{1, 19}$/i;
const validateHashtags = () => {
	// console.log(imgUploadHashtags.value);
};

imgUploadHashtags.addEventListener('input', validateHashtags);

// pristine.addValidator(imgUploadHashtags, validateHashtags, 'невалидный хэштег'); //инпут хэштега

// imgUploadHashtags.addEventListener('submit', (evt) => {
// 	evt.preventDefault();
// 	validateHashtags();
// 	pristine.validate();
// });
