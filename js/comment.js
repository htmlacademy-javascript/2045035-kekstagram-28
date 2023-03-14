import { getTemplate } from './util.js';

const templateComment = getTemplate('usersComments');

const renderComment = ({ avatar, name, message }) => {
	const сommentElement = templateComment.cloneNode(true);

	const avatarElement = сommentElement.querySelector('.social__picture');
	avatarElement.src = avatar;
	avatarElement.alt = name;

	сommentElement.querySelector('.social__text').textContent = message;

	return сommentElement;
};

export { renderComment };
