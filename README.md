# Directus Extension: Base64 Image Encoder

This is a Directus extension that encodes uploaded images in base64 format. The extension takes an image file as input and returns its base64 encoded string.

## Installation

To install this extension, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the repository directory.
3. Run `npm install` to install the required dependencies.
4. Copy the entire repository folder to the `/extensions/custom` folder of your Directus installation.

## Usage

To use the extension, follow these steps:

1. Navigate to your Directus project.
2. Go to the settings page of the collection where you want to enable the extension.
3. Click on the "Extensions" tab.
4. Enable the "Base64 Image Encoder" extension.
5. Click on the "Save" button to save the changes.
After enabling the extension, uploaded images in the collection will be automatically encoded in base64 format.

## Configuration

This extension does not require any configuration.

## Development

To develop this extension further, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the repository directory.
3. Run `npm install` to install the required dependencies.
4. Run `npm run dev` to start the development server.
5. Make changes to the code as necessary.
6. Test the changes by uploading an image in the collection where the extension is enabled.
7. Commit the changes and create a pull request.

## Dependencies

This extension depends on the following packages:

- `@directus/extensions-sdk`
- `path`
- `sharp`

## Todo

- [ ] Explain why sharp path is Harcoded
`const sharp = require("/directus/node_modules/sharp");` 
spoiler: it's because we need to use sharp installed by directus
- [ ] Explain how using it in a flow  
- [x] Publish a package
    - [x] npmjs.com
    - [x] npm.pkg.github.com
- [x] CI/CD

## License

This extension is licensed under the MIT License. See the LICENSE file for more information.