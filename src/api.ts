import { defineOperationApi } from '@directus/extensions-sdk';
const { join } = require("path");
// We need to use sharp lib bundeled with Directus
const sharp = require("/directus/node_modules/sharp");
// import { Sharp } from 'sharp';

type Options = {
	imageObject?: string,
	format: string,
	quality: number,
	width: number,
	height: number,

};

export default defineOperationApi<Options>({
	id: 'base64',
	handler: async ({ imageObject, format, quality, width }, { data, logger, env }) => {

		const image: any = data.$last

		if (!["image/jpeg", "image/png", "image/webp", "image/gif", "image/tiff"].includes(image.type)) {
			logger.info(`Image type ${image.type} for ${image.filename_disk} is not supported`);
			return { base64: null };
		}
		


		const base64_width = width ?? 10
		const base64_quality = quality ?? 10
		const base64_format = format ?? 'webp';

		logger.info(`Processing image ${image.filename_disk} with width ${base64_width}, quality ${base64_quality}, and format ${base64_format}`);

		const buffer = await sharp(join(env.STORAGE_LOCAL_ROOT, image.filename_disk)).resize({ width: parseInt(base64_width) }).webp({ quality: parseInt(base64_quality) }).toBuffer();
		const base64Data: string = Buffer.from(buffer).toString("base64");
		const base64Prefix: string = "data:image/webp;base64,"
		const base64: string = base64Prefix + base64Data

		logger.info(`Base64 conversion for ${image.filename_disk} complete : `);
		logger.info(base64);


		return { base64 };
	},
});
