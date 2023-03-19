import { defineOperationApp } from '@directus/extensions-sdk';

export default defineOperationApp({
	id: 'base64',
	name: 'base64',
	icon: 'box',
	description: 'Generate a base64 on image upload',
	overview: ({ text }) => [
		{
			label: 'add possibility to choice width, height and format',
			text: text,
		},
	],
	options: [
		{
			field: 'text',
			name: 'Text',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input',
			},
		},
	],
});
