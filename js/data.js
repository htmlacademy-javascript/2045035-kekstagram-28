import { mockedPhotos } from './mocks.js';

/**
 * @param {number} id
 */
const getPhotoByID = (id) =>
	mockedPhotos.find((photo) => photo.id === id);

export { getPhotoByID };
