import { mockedPhotos as photos } from './mocks.js';
import { onPreviwClick } from './full-photo.js';

/** @type {HTMLElement} куда будем вставлять шаблон */
const picturesContainer = document.querySelector('.pictures');

/** @type {HTMLAnchorElement} шаблон */
const templatePicture = document.querySelector('#picture').content.firstElementChild;

/** коробочка */
const photosFragment = document.createDocumentFragment();

photos.forEach(({url, likes, comments, id}) => {
	const pictureElement = templatePicture.cloneNode(true); //клонируем шаблон
	pictureElement.querySelector('.picture__img').src = url;
	const pictureInfo = pictureElement.querySelector('.picture__info');
	pictureInfo.querySelector('.picture__likes').textContent = likes;
	pictureInfo.querySelector('.picture__comments').textContent = comments.length;

	pictureElement.dataset.id = id;

	pictureElement.addEventListener('click', onPreviwClick);

	photosFragment.appendChild(pictureElement); //складываем в коробочку
});

picturesContainer.appendChild(photosFragment);//достаём из коробочки

export {picturesContainer};
