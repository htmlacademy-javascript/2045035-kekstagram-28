/* __  Import lib files __ */
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.min.css';


/* __  Prepared options for custom slider __ */
import {EFFECT_OPTION_MAP} from './effect-map.js';


/* __  Looking up for DOM Elements __ */
import { imageElement, photoForm } from './elements.js';
/** @type {HTMLFieldSetElement} */
const sliderWrapper = photoForm.querySelector('.img-upload__effect-level');
const customSliderWrapper = sliderWrapper.querySelector('.effect-level__slider');
/** @type {HTMLFieldSetElement} */
const radiosWrapper = photoForm.querySelector('.img-upload__effects');
/** @type {RadioNodeList} */
const effectsRadios = photoForm.effect;
/** @type {HTMLInputElement} */
const effectLevelInput = photoForm['effect-level'];

/* __  Initial setup __ */
sliderWrapper.hidden = true;
const initialSliderOptions = EFFECT_OPTION_MAP[effectsRadios.value].slider;
const effectNoUISlider = noUiSlider.create(customSliderWrapper, initialSliderOptions);

const onRadioWrapperChange = () => {
	/** @type {keyof EFFECT_DATA} */
	const nextEffect = effectsRadios.value;
	sliderWrapper.hidden = nextEffect === 'none';
	imageElement.className = `effects__preview--${effectsRadios.value}`;
	effectNoUISlider.updateOptions(EFFECT_OPTION_MAP[nextEffect].slider);
};

const onEffectNoUISliderUpdate = () => {
	const sliderValue = effectNoUISlider.get();
	const { filter } = EFFECT_OPTION_MAP[effectsRadios.value];

	if (filter) {
		imageElement.style.filter = filter(sliderValue);
	} else {
		imageElement.style.removeProperty('filter');
	}

	effectLevelInput.value = sliderValue;
};

radiosWrapper.addEventListener('change', onRadioWrapperChange);
effectNoUISlider.on('update', onEffectNoUISliderUpdate);

export const resetEffects = () => {


	sliderWrapper.hidden = true;
	effectNoUISlider.updateOptions(initialSliderOptions);
};
