const geodataFormValidation = new JustValidate('#geodataForm', {
	errorFieldCssClass: 'invalid',
	errorLabelCssClass: 'invalid',
	errorLabelStyle: {
		fontSize: '14px',
		color: '#fff',
	},
	errorsContainer: '#geodata-errors-container',
});

geodataFormValidation
	.addField('.recipient', [
		{
			rule: 'minLength',
			value: 3,
			errorMessage: '',
		},
		{
			rule: 'maxLength',
			value: 30,
			errorMessage: '',
		},
		{
			rule: 'function',
			validator: (str) => {
				return /^[a-zA-Z() ]+$/.test(str)
			},
			required: true,
			errorMessage: 'Please enter a name containing only letters.',
		},
	])
	.addField('.region', [
		{
			rule: 'minLength',
			value: 3,
			errorMessage: '',
		},
		{
			rule: 'maxLength',
			value: 30,
			errorMessage: '',
		},
		{
			rule: 'function',
			validator: (str) => {
				return /^[a-zA-Z() ]+$/.test(str)
			},
			required: true,
			errorMessage: 'Please enter a region containing only letters.',
		},
	])
	.addField('.phone', [
		{
			rule: 'function',
			validator: (number) => {
				//? this is for input mask
				// const number = telSelector.inputmask.unmaskedvalue()

				return Number(number) > 0
			},
			required: true,
			errorMessage: 'Please enter the correct phone number.',
		},
	])
	.addField('.mail-index', [
		{
			rule: 'function',
			validator: (number) => {
				//? this is for input mask
				// const number = telSelector.inputmask.unmaskedvalue()

				return Number(number) > 0
			},
			required: true,
			errorMessage: 'Please enter the correct phone number.',
		},
	])
	.onSuccess((e) => {
	});

const cardFormValidation = new JustValidate('#cardForm', {
	errorFieldCssClass: 'invalid',
	errorLabelCssClass: 'invalid',
	errorLabelStyle: {
		fontSize: '14px',
		color: '#fff',
	},
	errorsContainer: '#card-errors-container',
});

cardFormValidation
	.addField('.owner-name', [
		{
			rule: 'minLength',
			value: 3,
			errorMessage: '',
		},
		{
			rule: 'maxLength',
			value: 30,
			errorMessage: '',
		},
		{
			rule: 'function',
			validator: (str) => {
				return /^[A-Z() ]+$/.test(str)
			},
			required: true,
			errorMessage: 'Please enter a name containing only capital letters.',
		},
	])
	.addField('.card-number', [
		{
			rule: 'function',
			validator: (number) => {
				//? this is for input mask
				// const number = telSelector.inputmask.unmaskedvalue()

				return Number(number) > 0
			},
			required: true,
			errorMessage: 'Please enter the correct number.',
		},
	])
	.addField('.card-year', [
		{
			rule: 'minLength',
			value: 4,
			errorMessage: '',
		},
		{
			rule: 'maxLength',
			value: 4,
			errorMessage: '',
		},
		{
			rule: 'function',
			validator: (number) => {
				//? this is for input mask
				// const number = telSelector.inputmask.unmaskedvalue()

				return Number(number) > 0
			},
			required: true,
			errorMessage: 'Please enter the correct year.',
		},
	])
	.addField('.cvv', [
		{
			rule: 'required',
			errorMessage: 'Cvv is required!',
		},
		{
			rule: 'minLength',
			value: 3,
			errorMessage: '',
		},
		{
			rule: 'maxLength',
			value: 3,
			errorMessage: '',
		},
	])
	.onSuccess((e) => {
	});

const googlePayFormValidation = new JustValidate('#googlePay', {
	errorFieldCssClass: 'invalid',
	errorLabelCssClass: 'invalid',
	errorLabelStyle: {
		fontSize: '14px',
		color: '#fff',
	},
	errorsContainer: '#google-pay-errors-container',
});
googlePayFormValidation
	.addField('.owner-name', [
		{
			rule: 'minLength',
			value: 3,
			errorMessage: '',
		},
		{
			rule: 'maxLength',
			value: 30,
			errorMessage: '',
		},
		{
			rule: 'function',
			validator: (str) => {
				return /^[A-Z() ]+$/.test(str)
			},
			required: true,
			errorMessage: 'Please enter a name containing only capital letters.',
		},
	])
	.addField('.card-number', [
		{
			rule: 'function',
			validator: (number) => {
				//? this is for input mask
				// const number = telSelector.inputmask.unmaskedvalue()

				return Number(number) > 0
			},
			required: true,
			errorMessage: 'Please enter the correct number.',
		},
	])
	.addField('.card-year', [
		{
			rule: 'minLength',
			value: 4,
			errorMessage: '',
		},
		{
			rule: 'maxLength',
			value: 4,
			errorMessage: '',
		},
		{
			rule: 'function',
			validator: (number) => {
				//? this is for input mask
				// const number = telSelector.inputmask.unmaskedvalue()

				return Number(number) > 0
			},
			required: true,
			errorMessage: 'Please enter the correct year.',
		},
	])
	.addField('.cvv', [
		{
			rule: 'required',
			errorMessage: 'Cvv is required!',
		},
		{
			rule: 'minLength',
			value: 3,
			errorMessage: '',
		},
		{
			rule: 'maxLength',
			value: 3,
			errorMessage: '',
		},
	])
	.onSuccess((e) => {
	});