import Pristine from 'pristinejs';
import { photoForm, hashtagsInput } from './elements.js';

const PRISTINE_OPTIONS = {
	classTo: 'text__hashtags__label',
	errorTextParent: 'text__hashtags__label',
	errorTextClass: 'hashtags__error',
};

const hashtagsRegExp = /^#[a-zа-яё0-9]*$/i;

let errorMessage = 'Default error';

/**
 * @param {string} value
 */
const validateHashtags = (value) => {
	if (value === '') {
		return true;
	}

	const tags = value.trim().toLocaleLowerCase().split(' ');

	return tags.every((tag) => {
		if (tag[0] !== '#') {
			errorMessage = 'Хэштег должен начинаться с #';
			return false;
		}

		if (tag.length > 20) {
			errorMessage = 'Максимальная длина одного хэш-тега 20 символов, включая решётку';
			return false;
		}

		if (tag.length === 1) {
			errorMessage = 'Хэштег не может состоять только из одной решётки';
			return false;
		}

		if (!hashtagsRegExp.test(tag)) {
			errorMessage =
				'Хэштег должен состоять из букв и цифр; не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.';
			return false;
		}

		if (tags.length > 5) {
			errorMessage = 'Нельзя указать больше пяти хэш-тегов';
			return false;
		}

		if (tags.length !== new Set(tags).size) {
			errorMessage = 'Один и тот же хэш-тег не может быть использован дважды';
			return false;
		}

		return true;
	});
};

const pristine = new Pristine(photoForm, PRISTINE_OPTIONS);

pristine.addValidator(hashtagsInput, validateHashtags, () => errorMessage);

const validate = () => pristine.validate();
const resetValidation = () => pristine.reset();

export { validate, resetValidation };
