/**
 * @param {number} min
 * @param {number} max
 * @param {number} step
 * @param {number} start
 */
const createSliderData = (min, max, step, start = max) => ({
	range: {
		min,
		max,
	},
	start,
	step,
});

const FROM_ZERO_TO_ONE = createSliderData(0, 1, 0.1);
const FROM_ZERO_TO_HUNDRED = createSliderData(0, 100, 1);

export const EFFECT_OPTION_MAP = {
	none: {
		slider: FROM_ZERO_TO_HUNDRED,
	},
	chrome: {
		filter: (value) => `grayscale(${value})`,
		slider: FROM_ZERO_TO_ONE
	},

	sepia: {
		filter: (value) => `sepia(${value})`,
		slider: { ...FROM_ZERO_TO_ONE }
	},
	marvin: {
		filter: (value) => `invert(${value}%)`,
		slider: { ...FROM_ZERO_TO_HUNDRED }
	},
	phobos: {
		filter: (value) => `blur(${value}px)`,
		slider: createSliderData(0, 3, 0.1)
	},
	heat: {
		filter: (value) => `brightness(${value})`,
		slider: createSliderData(1, 3, 0.1)
	},
};
