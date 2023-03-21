import { defineOperationApp } from '@directus/extensions-sdk';

export default defineOperationApp({
	id: 'base64',
	name: 'base64',
	icon: 'image',
	description: 'Generate a base64 on image upload',
	overview: ({ imageObject, format, quality, width, height }) => [
		{
			label: 'Directus file object',
			text: imageObject,
		},
		// {
		// 	label: 'Base64 format',
		// 	text: format,
		// },
		{
			label: 'Quality',
			text: quality,
		},
		{
			label: 'Width',
			text: width,
		},
		{
			label: 'Height',
			text: height,
		},
	],
	options: [
		{
			field: 'imageObject',
			name: 'Image Object',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input',
			},
		},
		{
			field: 'height',
			name: 'Height',
			type: 'integer',
			meta: {
				width: 'half',
				interface: 'input',
			},
		},
		{
			field: 'width',
			name: 'Width',
			type: 'integer',
			meta: {
				width: 'half',
				interface: 'input',
			},
		},
		// {
		// 	field: 'format',
		// 	name: 'Format',
		// 	type: 'string',
		// 	meta: {
		// 		width: 'half',
		// 		interface: 'select-dropdown',
		// 		options: {
		// 			choices: [
		// 				{
		// 					text: 'png',
		// 					value: 'png',
		// 				},
		// 				{
		// 					text: 'jpg',
		// 					value: 'jpg',
		// 				},
		// 				{
		// 					text: 'webp',
		// 					value: 'webp',
		// 				},
		// 			],
		// 			allowOther: true,
		// 		},
		// 	},
		// },
		{
			field: 'quality',
			name: 'Quality',
			type: 'integer',
			default_value: 10,
			meta: {
				width: 'half',
				interface: 'input',
				min: 0,
				max: 100,
			},
		},
	]
});