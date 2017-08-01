class AccountError extends Error {
	contructor (options) {
		let subError = options.subError;
	}
	errorCode = 20
	subErrorCodeSets = {
		'ERR_NOT_FOUND': {
			code: 1,
			message: 'Acount does not exist'
		},
		'ERR_INVALID_USERNAME': {
			code: 2,
			message: 'Invalid username'
		},
	}

	this.code = errorCode + subErrorCodeSets[subError].code
	this.message = subErrorCodeSets[subError].message
}

class AuthenticationError extends Error {
	contructor (options) {
		let subError = options.subError;
	}
	errorCode = 30
	subErrorCodeSets = {
		'ERR_NOT_FOUND': {
			code: 1,
			message: 'Acount does not exist'
		},
		'ERR_INVALID_USERNAME': {
			code: 2,
			message: 'Invalid username'
		},
	}

	this.code = errorCode + subErrorCodeSets[subError].code
	this.message = subErrorCodeSets[subError].message
	this.level = 'application' 
}


