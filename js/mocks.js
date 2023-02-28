import { getRandomInteger, getRandomArrayElement, createIdGenerator, createRandomIdFromRangeGenerator } from './functions';

const OBJECTS_COUNT = 25;

const DESCRIPTIONS = [
	'Поймала дзен.',
	'Да, да! В это зеркало я буду фоткаться до тех пор, пока не состарюсь.',
	'Любимая работа',
	'Знали бы вы, что у меня на уме.',
	'Моя жизнь меняется, потому что меняю ее я.',
	'Ох, и достанется кому-то такая красота!',
	'Я, снова я и опять я.',
	'Я не одна на миллион, я одна из 8 миллиардов.',
	'Оставлю за собой право не соответствовать вашим ожиданиям.',
];

const COMENT_TEXTS = [
	'Всё отлично!',
	'В целом всё неплохо. Но не всё.',
	'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
	'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
	'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
	'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
	'Аристотель',
	'Гамлет ',
	'Ляля',
	'Олимпия',
	'Данте',
	'Боян',
	'Кекс',
];

const generateUserId = createIdGenerator();
const generatePhotoId = createIdGenerator();

const generateCommentIdRandom = createRandomIdFromRangeGenerator(1, 100_000);

const mockComment = () => ({
	id: generateCommentIdRandom(),
	avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
	message: Array.from({ length: getRandomInteger(1, 2) }, () => getRandomArrayElement(COMENT_TEXTS)).join(' '),
	name: getRandomArrayElement(NAMES),
});

const createObject = () => ({
	id: generateUserId(1, OBJECTS_COUNT),
	url: `photos/${generatePhotoId(1, OBJECTS_COUNT)}.jpg`,
	description: getRandomArrayElement(DESCRIPTIONS),
	likes: getRandomInteger(15, 200),
	comments: Array.from({ length: getRandomInteger(1, 4)}, mockComment),
});

const similarObjects = Array.from({ length: OBJECTS_COUNT }, createObject);

export {similarObjects};
