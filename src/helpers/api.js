import axios from 'axios';

/**
 *
 * @param data
 * @returns {Promise.<T>|*}
 */
const api = async (options)=>{
	const response = await axios({
		method: options.method, // api method
		url: options.url,  // api URL
		headers: {'Content-Type': 'application/json'}
	});
	return response;
}

export default api

	// .then((response) => {
	// 	// console.log(response.data.message.data)
	// 	return response;
	// }).catch(function() {
	// 	return false;
	// })