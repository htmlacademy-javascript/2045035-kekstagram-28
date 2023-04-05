import { showErrorMessage } from './alerts.js';


const BASE_URL = 'https://28.javascript.pages.academy/kekstagram';

const Route = {
	GET_DATA: '/data',
	SEND_DATA: '/',
};

const Method = {
	GET: 'GET',
	POST: 'POST',
};

const ErrorText = {
	GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
};
/**
 *
 * @param {string} route
 * @param {string} errorText
 * @param {string} method
 * @param {any} body
 */
const load = (route, method = Method.GET, body = null) =>
	fetch(`${BASE_URL}${route}`, { method, body })
		.then((response) => {
			if (!response.ok) {
				throw new Error();
			}
			return response.json();
		});

const getData = () => load(Route.GET_DATA).catch(() => showErrorMessage({ title: ErrorText.GET_DATA, ctaCallback: () => location.reload() }));

const sendData = (body) => load(Route.SEND_DATA, Method.POST, body);

export { getData, sendData };
