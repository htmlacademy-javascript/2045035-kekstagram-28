import { picturesContainer } from './previews.js';
import { isEscapeKey } from './util.js';
import { mockedPhotos as photos } from './mocks.js';

const bigPhoto = document.querySelector('.big-picture');
const bigPhotoClose = document.querySelector('.big-picture__cancel');
const commentCount = document.querySelector('.social__comment-count');
const newCommentLoader = document.querySelector('.comments-loader');
const documentBody = document.querySelector('body');

const onDocumentKeydown = (evt) => {
	if (isEscapeKey(evt)) {
		evt.preventDefault();
		bigPhoto.classList.add('hidden');
	}
};

const openBigPhoto = (evt) => {
	if (evt.target.matches('img.picture__img')) {
		bigPhoto.classList.remove('hidden');

		commentCount.classList.add('hidden');
		newCommentLoader.classList.add('hidden');
		documentBody.classList.add('modal-open');

		document.addEventListener('keydown', onDocumentKeydown);
	}
};

const closeBigPhoto = () => {
	bigPhoto.classList.add('hidden');
	documentBody.classList.remove('modal-open');

	document.removeEventListener('keydown', onDocumentKeydown);
};

const photoContent = (evt) => {
	const photoUrl = bigPhoto.querySelector('.big-picture__img').content;

	for (let i = 0; i < photos.length; i++) {
		photoUrl.querySelector('img').src = evt.target.src;
	}
};

picturesContainer.addEventListener('click', openBigPhoto);
picturesContainer.addEventListener('click', photoContent);

bigPhotoClose.addEventListener('click', closeBigPhoto);
