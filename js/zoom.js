const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imageElement = document.querySelector('.img-upload__preview img');

const scaleImage = (value) => {
	imageElement.style.transform = `scale(${value / 100})`;
	scaleValue.value = `${value}%`;
};

const onSmallerScaleClick = () => {
	const currentValue = parseInt(scaleValue.value, 10);
	let newValue = currentValue - SCALE_STEP;
	if (newValue < MIN_SCALE) {
		newValue = MIN_SCALE;
	}
	scaleImage(newValue);
};

const onBiggerScaleClick = () => {
	const currentValue = parseInt(scaleValue.value, 10);
	let newValue = currentValue + SCALE_STEP;
	if (newValue > MAX_SCALE) {
		newValue = MAX_SCALE;
	}
	scaleImage(newValue);
};

const resetScale = () => scaleImage(DEFAULT_SCALE);

scaleSmaller.addEventListener('click', onSmallerScaleClick);
scaleBigger.addEventListener('click', onBiggerScaleClick);

export { resetScale };
