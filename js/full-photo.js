// import { picturesContainer } from './previews.js';
import { getPhotoByID } from './data.js';
import { isEscapeKey } from './util.js';
// import { mockedPhotos as photos } from './mocks.js';

const bigPhotoWrapper = document.querySelector('.big-picture');
const picture = bigPhotoWrapper.querySelector('.big-picture__img img');
const bigPhotoDescription = bigPhotoWrapper.querySelector('.social__caption');
const likesCount = bigPhotoWrapper.querySelector('.likes-count');
const commentsCount = bigPhotoWrapper.querySelector('.comments-count');

const bigPhotoClose = bigPhotoWrapper.querySelector('.big-picture__cancel');
const commentCount = bigPhotoWrapper.querySelector('.social__comment-count');
const newCommentLoader = bigPhotoWrapper.querySelector('.comments-loader');
const documentBody = document.body;

const onDocumentKeydown = (evt) => {
	if (isEscapeKey(evt)) {
		evt.preventDefault();
		bigPhotoWrapper.classList.add('hidden');
	}
};

const renderPhotoComments = (photo) => {
	const comments = photo.comments;
	const commentsContainer = document.querySelector('.social__comments');
	const templateComment = document.querySelector('#usersComments').content;
	const commentFragment = document.createDocumentFragment();

	comments.forEach(({avatar, message, name}) => {
		const сommentElement = templateComment.cloneNode(true);
		сommentElement.querySelector('.social__picture').src = avatar;
		сommentElement.querySelector('.social__picture').alt = name;
		сommentElement.querySelector('.social__text').textContent = message;
		commentFragment.appendChild(сommentElement);
	});

	commentsContainer.appendChild(commentFragment);
};

const renderPhotoDate = (photo) => {
	picture.src = photo.url;
	likesCount.textContent = photo.likes;
	commentsCount.textContent = photo.comments.length;
	bigPhotoDescription.textContent = photo.description;

	renderPhotoComments(photo);
};

const openBigPhoto = () => {
	bigPhotoWrapper.classList.remove('hidden');

	commentCount.classList.add('hidden');
	newCommentLoader.classList.add('hidden');
	documentBody.classList.add('modal-open');
};

/**
 * @param {Event} evt
 */
const onPreviwClick = (evt) => {
	evt.preventDefault();

	const id = parseInt(evt.currentTarget.dataset.id, 10);
	const photo = getPhotoByID(id);

	renderPhotoDate(photo);
	openBigPhoto();

	document.addEventListener('keydown', onDocumentKeydown);
};

const closeBigPhoto = () => {
	bigPhotoWrapper.classList.add('hidden');
	documentBody.classList.remove('modal-open');

	document.removeEventListener('keydown', onDocumentKeydown);
};

bigPhotoClose.addEventListener('click', closeBigPhoto);

export { onPreviwClick };
