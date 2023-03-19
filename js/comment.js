import { getTemplate } from './util.js';

const COMMENT_PACK_SIZE = 5;

const commentsLoaderButton = document.querySelector('.comments-loader');
const CommentsCount = document.querySelector('.social__comment-count');
const commentsContainer = document.querySelector('.social__comments');
const templateComment = getTemplate('usersComments');

let onMoreCommentsButtonClick = null;
let showedCommentAmount = 0;

const renderComment = ({ avatar, name, message }) => {
	const сommentElement = templateComment.cloneNode(true);

	const avatarElement = сommentElement.querySelector('.social__picture');
	avatarElement.src = avatar;
	avatarElement.alt = name;

	сommentElement.querySelector('.social__text').textContent = message;

	return сommentElement;
};

const renderPhotoComments = (comments) => {
	onMoreCommentsButtonClick = () => {
		let endOfPack = showedCommentAmount + COMMENT_PACK_SIZE;
		const isAllCommentsShow = endOfPack >= comments.length;

		endOfPack = isAllCommentsShow ? comments.length : endOfPack;

		const slicedComments = comments.slice(showedCommentAmount, endOfPack);

		const commentFragment = document.createDocumentFragment();

		for (const comment of slicedComments) {
			commentFragment.appendChild(renderComment(comment));
		}

		CommentsCount.textContent = `${endOfPack} из ${comments.length} комментариев`;

		commentsContainer.appendChild(commentFragment);
		showedCommentAmount = endOfPack;

		commentsLoaderButton.hidden = isAllCommentsShow;
	};

	commentsLoaderButton.addEventListener('click', onMoreCommentsButtonClick);
	commentsLoaderButton.click();
};

const clearComments = () => {
	commentsContainer.innerHTML = '';
	showedCommentAmount = 0;

	commentsLoaderButton.removeEventListener('click', onMoreCommentsButtonClick);
};

export { renderPhotoComments, clearComments };
