import axios from 'axios';

/**
 *
 * @param data
 * @returns {Promise.<T>|*}
 */
export const api = async (options) => {
	const response = await axios({
		method: options.method, // api method
		url: options.url,  // api URL
		headers: { 'Content-Type': 'application/json' }
	});
	return response;
};
