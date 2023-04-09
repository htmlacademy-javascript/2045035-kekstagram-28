import { getBEMElement, getTemplate, isEscapeKey } from './util.js';

const successTemplate = getTemplate('success');
const errorTemplate = getTemplate('error');
const ALERT_SHOW_TIME = 5000;

/**
 * @param {successTemplate | errorTemplate} template
 */
const initAlertModal = (template = successTemplate) => {
	const modal = template.cloneNode(true);
	const button = getBEMElement(modal, 'button');
	document.body.appendChild(modal);

	const closeModal = () => {
		modal.removeEventListener('click', onClickOnModal);
		document.removeEventListener('keydown', onEscapeDocument, {capture: true});
		modal.remove();
	};

	modal.addEventListener('click', onClickOnModal);
	document.addEventListener('keydown', onEscapeDocument, {capture: true});

	function onClickOnModal(evt) {
		const isClickOnModal = evt.target === modal;
		const isClickOnButton = evt.target === button;

		if (isClickOnModal || isClickOnButton) {
			closeModal();
		}
	}

	function onEscapeDocument (evt) {
		if (isEscapeKey(evt)) {
			evt.preventDefault();
			evt.stopPropagation();
			closeModal();
		}
	}

	setTimeout(closeModal, ALERT_SHOW_TIME);

	return modal;
};

const showSuccessMessage = () => initAlertModal(successTemplate);

/**
 * @param {ErrorModalOptions | undefined} options
 */
const showErrorMessage = (options) => {
	const modal = initAlertModal(errorTemplate);

	if (options) {
		const button = getBEMElement(modal, 'button');
		const title = getBEMElement(modal, 'title');

		title.textContent = options.title;
		button.addEventListener('click', options.ctaCallback);
	}
};

export { showSuccessMessage, showErrorMessage };
