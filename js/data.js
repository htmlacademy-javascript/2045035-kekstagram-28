import { getData } from './api.js';

/**
 * @param {number} id
 */
const getPhotoByID = (id) => getData().then((photos) => photos.find((photo) => photo.id === id));

export { getPhotoByID };
