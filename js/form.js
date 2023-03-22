import { isEscapeKey } from './util.js';

const newPhotoLoade = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const uploadCansel = document.querySelector('#upload-cancel');
const documentBody = document.body;

const onDocumentKeydown = (evt) => {
	if (isEscapeKey(evt)) {
		evt.preventDefault();
		canselLoadNewFhotoForm();
	}
};

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

const newPhotoLoadeForm = document.querySelector('.img-upload__form'); //форма
const imgUploadHashtags = newPhotoLoadeForm.querySelector('.text__hashtags'); //инпут хэштега

const validateSimilarHashtags = () => {
	const values = [];
	for (let i = 0; i < imgUploadHashtags.value.trim().split(' ').length; i++) {
		const value = imgUploadHashtags.value.trim().split(' ')[i];
		if (values.indexOf(value) !== -1) {
			return false;
		}
		values.push(value);
	}
	return true;
};

const hashtags = /^#[a-zа-яё0-9]{1,19}$/i;

const validateHashtags = () => {
	const imgUploadHashtagsValue = imgUploadHashtags.value;
	const newArr = imgUploadHashtagsValue.split(' ');

	for (let i = 0; i < newArr.length; i++) {
		if (hashtags.test(newArr[i]) && newArr.length <= 5) {
			return true;
		} else {
			return false;
		}
	}

	validateSimilarHashtags();
};

const pristine = new Pristine(newPhotoLoadeForm, {
	classTo: 'text__hashtags__label', //элемент в кот нужно вывести ошибку
	errorTextParent: 'text__hashtags__label',
	errorTextClass: 'hashtags__error', //класс ошибки
});

pristine.addValidator(imgUploadHashtags, validateHashtags, validateSimilarHashtags, '{Хэштег должен начинаться с #, максимум 19 символов, не более 5 хэштегов}');

newPhotoLoadeForm.addEventListener('submit', (evt) => {
	evt.preventDefault();
	pristine.validate();
});

// хэш-теги разделяются пробелами;
// один и тот же хэш-тег не может быть использован дважды;
