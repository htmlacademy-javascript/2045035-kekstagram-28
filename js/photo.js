import { imageElement } from '../js/new-photo/elements';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

export const changePhoto = (fileInput) => {
	const file = fileInput.files[0];
	const fileName = file.name.toLowerCase();

	const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

	if (matches) {
		imageElement.src = URL.createObjectURL(file);
	}
};
