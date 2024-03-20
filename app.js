// app.js
import ImageConverter from './imageConverter.js';
import inquirer from 'inquirer';

(async () => {
  try {
    const { inputFolder } = await inquirer.prompt({
      type: 'input',
      name: 'inputFolder',
      message: 'Enter the path to the folder containing JPG images:',
      validate: input => input.trim() !== '' || 'Path cannot be empty.'
    });

    const { outputFolder } = await inquirer.prompt({
      type: 'input',
      name: 'outputFolder',
      message: 'Enter the output folder path:',
      validate: input => input.trim() !== '' || 'Path cannot be empty.'
    });

    const { quality } = await inquirer.prompt({
      type: 'number',
      name: 'quality',
      message: 'Enter the quality for the conversion (1-100):',
      default: 80,
      validate: value => value >= 1 && value <= 100 || 'Please enter a number between 1 and 100.'
    });

    const converter = new ImageConverter(inputFolder, outputFolder, quality);
    await converter.run();
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();
