// import { picturesContainer } from './previews.js';
import { getPhotoByID } from './data.js';
import { isEscapeKey } from './util.js';
import { renderComment } from './comment.js';
// import { mockedPhotos as photos } from './mocks.js';

const bigPhotoWrapper = document.querySelector('.big-picture');
const bigPicture = bigPhotoWrapper.querySelector('.big-picture__img img');
const bigPhotoDescription = bigPhotoWrapper.querySelector('.social__caption');
const likesCount = bigPhotoWrapper.querySelector('.likes-count');
const commentsCount = bigPhotoWrapper.querySelector('.comments-count');
const commentsContainer = document.querySelector('.social__comments');

const bigPhotoClose = bigPhotoWrapper.querySelector('.big-picture__cancel');
const commentCount = bigPhotoWrapper.querySelector('.social__comment-count');
const newCommentLoader = bigPhotoWrapper.querySelector('.comments-loader');
const documentBody = document.body;

const onDocumentKeydown = (evt) => {
	if (isEscapeKey(evt)) {
		evt.preventDefault();
		closeBigPhoto();
	}
};

const renderPhotoComments = (comments) => {
	const commentFragment = document.createDocumentFragment();

	for(const comment of comments) {
		commentFragment.appendChild(renderComment(comment));
	}

	commentsContainer.appendChild(commentFragment);
};

const renderPhotoDate = (photo) => {
	bigPicture.src = photo.url;
	likesCount.textContent = photo.likes;
	commentsCount.textContent = photo.comments.length;
	bigPhotoDescription.textContent = photo.description;

	renderPhotoComments(photo.comments);
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
const onPreviewClick = (evt) => {
	evt.preventDefault();

	const id = parseInt(evt.currentTarget.dataset.id, 10);
	const photo = getPhotoByID(id);

	renderPhotoDate(photo);
	openBigPhoto();

	document.addEventListener('keydown', onDocumentKeydown);
};

function closeBigPhoto () {
	bigPhotoWrapper.classList.add('hidden');
	documentBody.classList.remove('modal-open');

	document.removeEventListener('keydown', onDocumentKeydown);

	commentsContainer.innerHTML = '';
}

bigPhotoClose.addEventListener('click', closeBigPhoto);

export { onPreviewClick as onPreviwClick };
