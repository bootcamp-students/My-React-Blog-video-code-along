import axios from 'axios'

export function axiosHelperBasic(method, url, data, fun) {
	const API_URL = 'http://localhost:8000'
	return axios({
		method,
		url: API_URL + url,
		data
	})
		.then(fun)
		.catch(er => console.log(er))
}

export function axiosHelperWithDefaultValues(
	method = 'get',
	url = '/',
	data = {},
	successMethod = r => console.log(r),
	failureMethod = e => console.log(e)
) {
	const API_URL = 'https://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000'
	return axios({
		method,
		url: API_URL + url,
		data
	})
		.then(successMethod)
		.catch(failureMethod)
}

export function axiosHelperInputObject(
	{
		method = 'get',
		url = '/',
		data = {},
		token = '',
		successMethod = r => console.log(r),
		failureMethod = e => console.log(e)
	}
) {
	//{
	// 	data = {},
	// 	url = '/',
	// 	failureMethod = e => console.log(e)
	// 	method = 'get',
	// 	token = '',
	// 	successMethod = r => console.log(r),
	// }
	const API_URL = 'http://localhost:8000'
	return axios({
		method,
		url: API_URL + url,
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
			'Access-Control-Allow-Origin': '*',
			'Accept': 'application/json',
			'Authorization': 'Bearer ' + token
		},
		data
	})
		.then(successMethod)
		.catch(failureMethod)
}


export function axiosHelper(props) {
	const {
		method = 'get',
		url = '/',
		data = {},
		token = '',
		successMethod = r => console.log(r),
		failureMethod = e => console.log(e)
	} = props; // setting default prop values

	const API_URL = 'http://awesomeincbootcampapi-ianrios529550.codeanyapp.com'

	return axios({
		method,
		url: API_URL + url,
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
			'Access-Control-Allow-Origin': '*',
			'Accept': 'application/json',
			'Authorization': 'Bearer ' + token
		},
		data
	})
		.then(successMethod)
		.catch(failureMethod)
}