import axios from 'axios';

/**
 *
 * @param options
 * @returns {Promise.<*>}
 */
export const api = options => axios({
	method: options.method, // api method
	url: options.url,  // api URL
	headers: { 'Content-Type': 'application/json' }
});
