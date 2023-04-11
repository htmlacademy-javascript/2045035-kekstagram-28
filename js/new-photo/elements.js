/** @type {HTMLFormElement} */
const photoForm = document.querySelector('.img-upload__form');

/** @type {HTMLImageElement} */
const imageElement = document.querySelector('.img-upload__preview img');

/** @type {HTMLInputElement} */
const hashtagsInput = photoForm.hashtags;

/** @type {HTMLTextAreaElement} */
const descriptionElement = photoForm.description;

export {photoForm, hashtagsInput, descriptionElement, imageElement};
