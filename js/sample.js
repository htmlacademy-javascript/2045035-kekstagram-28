import { mockedPhotos } from './mocks.js';

const picturesContainer = document.querySelector('.pictures'); //куда будем вставлять шаблон
const templatePicture = document.querySelector('#picture').content.querySelector('.picture'); //шаблон

const mockedPhotosFragment = document.createDocumentFragment();//коробочка

mockedPhotos.forEach(({url, likes, comments}) => {
	const pictureElement = templatePicture.cloneNode(true); //клонируем шаблон
	pictureElement.querySelector('.picture__img').src = url;
	const pictureInfo = pictureElement.querySelector('.picture__info');
	pictureInfo.querySelector('.picture__likes').textContent = likes;
	pictureInfo.querySelector('.picture__comments').textContent = comments.length;
	mockedPhotosFragment.appendChild(pictureElement); //складываем в коробочку
});

picturesContainer.appendChild(mockedPhotosFragment);//достаём из коробочки
