import { defineOperationApi } from '@directus/extensions-sdk';
const { join } = require("path");
const sharp = require("/directus/node_modules/sharp");
// import { Sharp } from 'sharp';

type Options = {
	text: string;
};

export default defineOperationApi<Options>({
	id: 'base64',
	handler: async ({ text }, { data, logger, env }) => {

		const image: any = data.$last.payload

		if (["image/jpeg", "image/png", "image/webp", "image/gif", "image/tiff"].includes(image.type)) {
			logger.info("file uploaded");
			logger.info(image.filename_disk);
			logger.info(image.type);
			logger.info(env.STORAGE_LOCAL_ROOT);
			const buffer = await sharp(join(env.STORAGE_LOCAL_ROOT, image.filename_disk)).resize({ width: 10 }).webp({ quality: 10 }).toBuffer();
			const base64Data: string = Buffer.from(buffer).toString("base64");
			const base64Prefix: string = "data:image/webp;base64,"
			const base64: string = base64Prefix + base64Data
			logger.info(base64);
			
			return { base64 };
		}

	},
});
