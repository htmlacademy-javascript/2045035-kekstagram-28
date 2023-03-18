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
const commentCount = bigPhotoWrapper.querySelector('.show-comments-count');
const documentBody = document.body;
const commentsLoaderButton = document.querySelector('.comments-loader');

const onDocumentKeydown = (evt) => {
	if (isEscapeKey(evt)) {
		evt.preventDefault();
		closeBigPhoto();
	}
};

const renderPhotoComments = (comments) => {
	const commentFragment = document.createDocumentFragment();

	for (const comment of comments) {
		commentFragment.appendChild(renderComment(comment));
	}

	commentsContainer.appendChild(commentFragment);

	commentsLoaderButton.classList.add('hidden');

	for (let i = 5; i < comments.length; i++) {
		commentsContainer.children[i].style.display = 'none';
		commentsLoaderButton.classList.remove('hidden');
	}

	let showMassage = 5;
	commentCount.innerHTML = 5;

	const onLoaderButtonClick = () => {
		showMassage += 5;
		commentCount.innerHTML = showMassage;

		for (let i = 0; i < showMassage; i++) {
			commentsContainer.children[i].style.display = 'flex';

			if (showMassage >= comments.length) {
				commentsLoaderButton.classList.add('hidden');
				showMassage = comments.length;
				commentCount.innerHTML = comments.length; //не работает
			} else {
				commentsLoaderButton.classList.remove('hidden');
			}
		}
	};

	commentsLoaderButton.addEventListener('click', onLoaderButtonClick);
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

function closeBigPhoto() {
	bigPhotoWrapper.classList.add('hidden');
	documentBody.classList.remove('modal-open');

	document.removeEventListener('keydown', onDocumentKeydown);

	commentsContainer.innerHTML = '';
}

bigPhotoClose.addEventListener('click', closeBigPhoto);

export { onPreviewClick as onPreviwClick };
