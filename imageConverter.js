// imageConverter.js
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

class ImageConverter {
  constructor(inputFolder, outputFolder, quality) {
    this.inputFolder = inputFolder;
    this.outputFolder = outputFolder;
    this.quality = quality;
  }

  async ensureDirectoryExists(dirPath) {
    try {
      await fs.access(dirPath);
    } catch {
      await fs.mkdir(dirPath, { recursive: true });
    }
  }

  async convertImage(fileName, format) {
    const inputFilePath = path.join(this.inputFolder, fileName);
    const baseFileName = path.basename(fileName, path.extname(fileName));
    const outputFilePath = path.join(this.outputFolder, `${format}/${baseFileName}.${format}`);

    try {
      await sharp(inputFilePath)[format]({ quality: this.quality }).toFile(outputFilePath);
      console.log(`Successfully converted ${fileName} to ${format.toUpperCase()}.`);
    } catch (error) {
      console.error(`Error converting to ${format.toUpperCase()}:`, error);
    }
  }

  async run() {
    const formats = ['png', 'webp', 'avif'];
    await Promise.all(formats.map(format => this.ensureDirectoryExists(path.join(this.outputFolder, format))));

    try {
      const files = await fs.readdir(this.inputFolder);
      const jpgFiles = files.filter(file => path.extname(file).toLowerCase() === '.jpg');

      for (let file of jpgFiles) {
        for (let format of formats) {
          await this.convertImage(file, format);
        }
      }
    } catch (error) {
      console.error('Failed to read input directory or convert images:', error);
    }
  }
}

export default ImageConverter;
