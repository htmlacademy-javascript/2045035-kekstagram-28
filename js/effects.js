const EFFECTS = [
	{
		name: 'none',
		style: 'none',
		min: 0,
		max: 100,
		step: 1,
		unit: '',
	},

	{
		name: 'chrome',
		style: 'grayscale',
		min: 0,
		max: 1,
		step: 0.1,
		unit: '',
	},

	{
		name: 'sepia',
		style: 'sepia',
		min: 0,
		max: 1,
		step: 0.1,
		unit: '',
	},

	{
		name: 'marvin',
		style: 'invert',
		min: 0,
		max: 100,
		step: 1,
		unit: '%',
	},

	{
		name: 'phobos',
		style: 'blur',
		min: 0,
		max: 3,
		step: 0.1,
		unit: 'px',
	},

	{
		name: 'heat',
		style: 'brightness',
		min: 1,
		max: 3,
		step: 0.1,
		unit: 'px',
	},
];

const imageEffects = document.querySelector('.effects__list');
const imageElement = document.querySelector('.img-upload__preview img');
const imageEffectSlider = document.querySelector('.effect-level__slider'); //слайдер
// const imageSliderValue = document.querySelector('.effect-level__value'); //значение слайдера

let chosenElement = EFFECTS[0];

noUiSlider.create(imageEffectSlider, {
	range: {
		min: 0,
		max: 100,
	},
	start: 100,
	step: 1,
});

const updateSlider = () => {
	imageEffectSlider.noUiSlider.updateOptions({
		range: {
			min: chosenElement.min,
			max: chosenElement.max,
		},
		step: chosenElement.step,
		start: chosenElement.max,
	});
};

const onSliderValue = () => {
	const sliderValue = imageEffectSlider.noUiSlider.get();
	imageElement.style.filter = `${chosenElement.style}(${sliderValue}${chosenElement.style.unit})`;
};

const onEffectButtonChange = (evt) => {
	if (evt.target.matches('input[type="radio"]')) {
		imageElement.className = `effects__preview--${evt.target.value}`;
	}
	chosenElement = EFFECTS.find((effect) => effect.name === evt.target.value);

	updateSlider();
};

imageEffects.addEventListener('change', onEffectButtonChange);
imageEffectSlider.noUiSlider.on('update', onSliderValue);
