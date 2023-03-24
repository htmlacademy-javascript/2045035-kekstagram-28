import { getTemplate } from './util.js';

const PACK_SIZE = 5;

const loadButton = document.querySelector('.comments-loader');
const countElement = document.querySelector('.social__comment-count');
const commentsContainer = document.querySelector('.social__comments');
const templateComment = getTemplate('usersComments');

let savedComments = [];

const renderComment = ({ avatar, name, message }) => {
	const сommentElement = templateComment.cloneNode(true);

	const avatarElement = сommentElement.querySelector('.social__picture');
	avatarElement.src = avatar;
	avatarElement.alt = name;

	сommentElement.querySelector('.social__text').textContent = message;

	return сommentElement;
};

const onLoadButtonClick = () => {
	const showedAmount = commentsContainer.children.length;
	let endOfPack = showedAmount + PACK_SIZE;
	const isAllCommentsShow = endOfPack >= savedComments.length;

	endOfPack = isAllCommentsShow ? savedComments.length : endOfPack;

	const slicedComments = savedComments.slice(showedAmount, endOfPack);

	const commentFragment = document.createDocumentFragment();
	for (const comment of slicedComments) {
		commentFragment.appendChild(renderComment(comment));
	}
	commentsContainer.appendChild(commentFragment);

	countElement.textContent = `${endOfPack} из ${savedComments.length} комментариев`;

	loadButton.hidden = isAllCommentsShow;
};

loadButton.addEventListener('click', onLoadButtonClick);

const renderPhotoComments = (comments) => {
	savedComments = comments;
	loadButton.click();
};

const clearComments = () => {
	commentsContainer.innerHTML = '';
};

export { renderPhotoComments, clearComments };
