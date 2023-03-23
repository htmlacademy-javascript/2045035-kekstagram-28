import { isEscapeKey } from './util.js';

const newPhotoLoade = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const uploadCansel = document.querySelector('#upload-cancel');
const documentBody = document.body;

const newPhotoLoadeForm = document.querySelector('.img-upload__form');
const imgUploadHashtags = newPhotoLoadeForm.querySelector('.text__hashtags');
const imgUploadComment = newPhotoLoadeForm.querySelector('.text__description');

const isTextFocused = () =>
	document.activeElement === imgUploadHashtags || document.activeElement === imgUploadComment;

function onDocumentKeydown (evt) {
	if (isEscapeKey(evt) && !isTextFocused()) {
		evt.preventDefault();
		canselLoadNewFhotoForm();
	}
}

const changeFormClasses = (willBeOpened = true) => {
	newPhotoLoade.classList.toggle('hidden', !willBeOpened);
	documentBody.classList.toggle('modal-open', willBeOpened);
};

const loadNewFhotoForm = () => {
	changeFormClasses(true);
	document.addEventListener('keydown', onDocumentKeydown);
};

function canselLoadNewFhotoForm() {
	changeFormClasses(false);
	document.removeEventListener('keydown', onDocumentKeydown);
	uploadFile.value = '';
}

uploadFile.addEventListener('change', loadNewFhotoForm);
uploadCansel.addEventListener('click', canselLoadNewFhotoForm);

//валидация формы

const errorText = 'Хэштег должен начинаться с #, максимум 19 символов, через пробел, не более 5 хэштегов и не должен повторяться';

const hashtags = /^#[a-zа-яё0-9]{1,19}$/i;

const similarTags = (tags) => {
	const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
	return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const isValidTag = (tag) => hashtags.test(tag);

const validateHashtags = (value) => {
	const tags = value
		.trim()
		.split(' ')
		.filter((tag) => tag.trim().length);
	return similarTags(tags) && tags.length <= 5 && tags.every(isValidTag);
};

const pristine = new Pristine(newPhotoLoadeForm, {
	classTo: 'text__hashtags__label', //элемент в кот нужно вывести ошибку
	errorTextParent: 'text__hashtags__label',
	errorTextClass: 'hashtags__error', //класс ошибки
});

pristine.addValidator(imgUploadHashtags, validateHashtags, errorText);

newPhotoLoadeForm.addEventListener('submit', (evt) => {
	evt.preventDefault();
	pristine.validate();
});
