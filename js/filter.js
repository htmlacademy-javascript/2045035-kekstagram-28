import { getData } from './api.js';
import { renderThumbnails } from './thumbnails.js';
import { debounce } from './util.js';

const PICTURES_COUNT = 10;
const Filter = {
	DEFAULT: 'filter-default',
	RANDOM: 'filter-random',
	DISCUSSED: 'filter-discussed',
};

const filterElement = document.querySelector('.img-filters');

let currentFilter = Filter.DEFAULT;
let pictures = [];

const sortRandomly = () => Math.random() - 0.5;
const sortByComments = (picA, picB) => picB.comments.length - picA.comments.length;

const getFilteredPictures = () => {
	switch (currentFilter) {
	case Filter.RANDOM:
		return [...pictures].sort(sortRandomly).slice(0, PICTURES_COUNT);
	case Filter.DISCUSSED:
		return [...pictures].sort(sortByComments);
	default:
		return [...pictures];
	}
};

const setOnFilerClick = (callback) => {
	filterElement.addEventListener('click', (evt) => {
		if (!evt.target.classList.contains('img-filters__button')) {
			return;
		}

		const clickedButton = evt.target;
		if (clickedButton.id === currentFilter) {
			return;
		}

		filterElement.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
		clickedButton.classList.add('img-filters__button--active');
		currentFilter = clickedButton.id;
		callback(getFilteredPictures());
	});
};

const init = (loadedPictures, callback) => {
	filterElement.classList.remove('img-filters--inactive');
	pictures = [...loadedPictures];
	setOnFilerClick(callback);
};

const data = await getData();
const debouncedRenderGallery = debounce(renderThumbnails);
init(data, debouncedRenderGallery);
renderThumbnails(getFilteredPictures());
