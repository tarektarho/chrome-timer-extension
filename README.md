# Timer Extension

This is a simple Chrome extension that allows users to set a countdown timer with customizable options. The extension is built using HTML, JavaScript, and Bootstrap CSS.

## How to Use

1. Download or clone the project files from the repository.

2. Load the extension in Chrome:

   - Open Chrome and navigate to `chrome://extensions`.
   - Enable "Developer mode" in the top right corner.
   - Click on "Load unpacked" and select the folder containing the project files.

3. Usage:
   - Once the extension is loaded, you will see a timer interface with the option to select the countdown time and alarm sound.
   - Choose the desired countdown time by selecting hours, minutes, and seconds from the dropdown menus.
   - Choose the alarm sound from the "Alarm sound" dropdown menu.
   - Click on the "Start Timer" button to start the countdown.
   - The timer will display the remaining time in HH:MM:SS format, and when the time is up, the selected alarm sound will play.

## Project Structure

The project consists of the following files:

1. `index.html`: This is the main HTML file that contains the timer interface.

2. `style.css`: This file contains custom CSS styles to style the timer interface.

3. `main.js`: This is the main JavaScript file that handles the functionality of the timer.

## JavaScript Components

### Alarm Class

The `Alarm` class represents the alarm sound for the timer. It is responsible for playing the selected audio.

### Timer Class

The `Timer` class handles the countdown functionality. It allows users to set the timer duration and start the countdown. When the timer reaches zero, the selected alarm sound will play.

## Customize Options

- You can modify the options for hours, minutes, and seconds in the respective dropdown menus in the HTML file. For example, you can add more options for hours (up to 23) or seconds (0, 5, 10, etc.).

- You can also add more alarm sounds by updating the `audioList` object in the `Alarm` class constructor. Ensure that the audio files are located in the "audio" folder and have the correct file paths in the `audioList` object.

## Notes

- Please make sure to use the correct file paths and folder structure as specified in the code and README.

- The extension is designed to work in the Chrome browser.

- For simplicity, the project uses Bootstrap for basic styling, but you can further customize the UI according to your preferences.

- If you encounter any issues or have suggestions for improvements, feel free to create an issue or contribute to the project.

Enjoy using the Timer Extension! 🕒
