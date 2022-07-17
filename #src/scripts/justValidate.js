const someValidation = new JustValidate('#buy-form', {
	errorFieldCssClass: 'invalid',
	errorLabelCssClass: 'invalid',
	errorLabelStyle: {
		fontSize: '14px',
		color: '#fff',
	},
	errorsContainer: '#errors-container',
})

someValidation
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
	//? Write below the selector of CONTAINER with radio/checkbox inputs.
	.addRequiredGroup(
		'#sendType',
		'You have to choose the type of delivery.'
	)
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
	// .addField('.selector', [
	// 	
	// ])

	// {
	// 	rule: 'required',
	// 	errorMessage: '',
	// },
	// {
	// 	rule: 'minLength',
	// 	value: 3,
	// 	errorMessage: '',
	// },
	// {
	// 	rule: 'maxLength',
	// 	value: 30,
	// 	errorMessage: '',
	// },
	// {
	// 	rule: 'email',
	// 	errorMessage: '',
	// },
	// {
	// 	// For phone numbers with input mask
	// 	rule: 'function',
	// 	validator: () => {
	// 		return true
	// 	},
	// 	required: true,
	// 	errorMessage: '',
	// },
	// {
	// 	rule: 'files',
	// 	files: {
	// 		extensions: ['.jpg', 'png'],
	// 		types: ['image/jpeg', 'image/png'],
	// in bytes.
	// 		minSize: 1000,
	// 		maxSize: 25000,
	// 	},
	// 	errorMessage: '',
	.onSuccess((e) => {
		//? Sending a mail, just for lulz.

		// let formData = new FormData(e.target);

		// fetch('../php/mail.php', { method: "POST", body: formData, })
		// 	.then((response) => {
		// 		if (response.ok) {
		// 			console.log('The letter was send.');
		// 		} else {
		// 			console.log('The letter was not sended!');
		// 		}
		// 	})
		// 	.catch((error) => {
		// 		console.log('Mail error!' + error);
		// 	});
	});
