import { getData } from './api.js';
import { renderThumbnails } from './thumbnails.js';
import { debounce } from './util.js';

const ACTIVE_CLASS = 'img-filters__button--active';
const PICTURES_COUNT = 10;

const filtersWrapper = document.querySelector('.img-filters');
const filterButtons = filtersWrapper.querySelectorAll('.img-filters__button');
const [defaultButton, randomButton, discussedButton] = filterButtons;

let currentFilter = defaultButton;

const sortRandomly = () => Math.random() - 0.5;
const sortByComments = (picA, picB) => picB.comments.length - picA.comments.length;

const getFilteredPictures = async () => {
	const photos = await getData();
	const isPhotosReceived = photos && photos.length > 0;
	filtersWrapper.classList.toggle('img-filters--inactive', !isPhotosReceived);
	switch (currentFilter) {
	case randomButton:
		return [...photos].sort(sortRandomly).slice(0, PICTURES_COUNT);
	case discussedButton:
		return [...photos].sort(sortByComments);
	default:
		return photos;
	}
};

/**
 * @param {Element} clickedButton
 */
const toggleClasses = (newActiveButton) => {
	currentFilter.classList.remove(ACTIVE_CLASS);
	newActiveButton.classList.add(ACTIVE_CLASS);
	currentFilter = newActiveButton;
};

const updateRender = async () => renderThumbnails(await getFilteredPictures());

const debouncedRenderThumbnails = debounce(updateRender);

filtersWrapper.addEventListener('click', async (evt) => {
	const { target } = evt;

	const isTargetFilterButton = target.classList.contains('img-filters__button');
	const isTargetActiveFilter = target === currentFilter;
	if (!isTargetFilterButton || isTargetActiveFilter) {
		return;
	}

	toggleClasses(target);

	await debouncedRenderThumbnails();
});

updateRender();
