import { imageElement, photoForm } from './elements.js';

const SCALE_STEP = 25;
const MIN_SCALE = SCALE_STEP;
const MAX_SCALE = 100;

/** @type {HTMLButtonElement} */
const decreaseButton = photoForm.querySelector('.scale__control--smaller');
/** @type {HTMLButtonElement} */
const increaseButton = photoForm.querySelector('.scale__control--bigger');
/** @type {HTMLInputElement} */
const scaleInput = photoForm.scale;

let currentScale = parseInt(scaleInput.value, 10);
const initialScale = currentScale;

/**
 * @param {number} value
 */
const scaleImage = (value) => {
	imageElement.style.transform = `scale(${value / 100})`;
	scaleInput.value = `${value}%`;
	currentScale = value;
};

const onDecreaseButtonClick = () => {
	let nextValue = currentScale - SCALE_STEP;
	if (nextValue < MIN_SCALE) {
		nextValue = MIN_SCALE;
	}
	scaleImage(nextValue);
};

const onIncreaseButtonClick = () => {
	let nextValue = currentScale + SCALE_STEP;
	if (nextValue > MAX_SCALE) {
		nextValue = MAX_SCALE;
	}
	scaleImage(nextValue);
};


decreaseButton.addEventListener('click', onDecreaseButtonClick);
increaseButton.addEventListener('click', onIncreaseButtonClick);

export const resetScale = () => scaleImage(initialScale);
