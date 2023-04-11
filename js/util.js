/**
 * @param {KeyboardEvent} evt
 */
const isEscapeKey = (evt) => evt.key === 'Escape';

/**
 * @param {string} id
 * @returns {HTMLElement}
 */
const getTemplate = (id) => document.getElementById(id).content.firstElementChild;

/**
 * @param {Element} modalElement
 */
const toggleModalClasses = (modalElement, willBeOpened = true) => {
	modalElement.classList.toggle('hidden', !willBeOpened);
	document.body.classList.toggle('modal-open', willBeOpened);
};

/**
 * @param {Element} blockElement
 * @param {string} BEMelement
 */

const getBEMElement = (blockElement, BEMelement) => {
	if (!blockElement.classList.length) {
		return null;
	}
	const blockCSS = blockElement.classList[0];
	return blockElement.querySelector(`.${blockCSS}__${BEMelement}`);
};

/**
 * @param {(...args: any[]) => unknown} callback
 * @param {number} timeoutDelay
 * @author Функция взята из [freecodecamp](https://www.freecodecamp.org/news/javascript-debounce-example) и доработана
 */
function debounce(callback, timeoutDelay = 500) {
	let timeoutId;

	return (...rest) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
	};
}

export {
	isEscapeKey,
	getTemplate,
	toggleModalClasses,
	getBEMElement,
	debounce,
};
