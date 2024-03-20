# SudiptoImgTranscode

SudiptoImgTranscode is a Node.js library designed to simplify the process of converting images to next-gen formats like PNG, WebP, and AVIF. It aims to optimize image quality and performance for web applications.

## Features

- Easy conversion of JPG images to PNG, WebP, and AVIF formats.
- Quality control for output images to balance size and clarity.
- Supports bulk processing for efficiency.

## Getting Started

### Prerequisites

Ensure you have Node.js installed on your system. This library is tested with Node.js version 14.x and above.

### Installation

Clone the repository and install its dependencies:

```bash
git clone https://github.com/aotr/SudiptoImgTranscode.git
cd SudiptoImgTranscode
npm install
```

### Standalone Project Usage

To use as a standalone project for converting images:

1. Navigate to the project directory.
2. Run `app.js` with Node.js:

```bash
node app.js
```

Follow the prompts to specify the input directory, output directory, and desired quality for the image conversions.

### Integrating into Other Projects

To use `imageConverter.js` in your project for more customized integration:

1. Copy `imageConverter.js` into your project.
2. Import and use the `ImageConverter` class:

```javascript
import ImageConverter from './path/to/imageConverter.js';

async function convertImages() {
  const converter = new ImageConverter('/path/to/input', '/path/to/output', 80);
  await converter.run();
}

convertImages().catch(console.error);
```

Replace `/path/to/input` and `/path/to/output` with the paths to your specific directories and adjust the quality as needed.

## Contributing

We welcome contributions to SudiptoImgTranscode! Please feel free to submit issues or pull requests on GitHub.

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any problems or have suggestions, please open an issue on the project's GitHub page.
