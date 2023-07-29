/**
 * Represents the countdown element in the HTML.
 * @type {HTMLElement}
 */
const countdownEl = document.getElementById("countdown")

/**
 * Represents the start button element in the HTML.
 * @type {HTMLElement}
 */
const startButton = document.getElementById("startButton")

/**
 * Represents the sound dropdown element in the HTML.
 * @type {HTMLSelectElement}
 */
const soundDropdown = document.getElementById("sound")

/**
 * Represents the Alarm class used to play audio.
 */
class Alarm {
  /**
   * Creates an instance of the Alarm class with the specified sound.
   * @param {string} sound - The selected sound for the alarm.
   */
  constructor(sound) {
    this.audioList = {
      audio1: "./audio/audio1.mp3",
      audio2: "./audio/audio2.mp3",
      audio3: "./audio/audio3.mp3",
    }
    this.audio = new Audio(this.audioList[sound])
  }

  /**
   * Asynchronously plays the selected sound.
   * @returns {Promise<void>} - A promise representing the audio playback.
   */
  async play() {
    return await this.audio.play()
  }
}

// Initialize an instance of the Alarm class with the selected sound from the dropdown.
let alarm = new Alarm(soundDropdown.value)

// Event listener to update the alarm sound when the dropdown selection changes.
soundDropdown.addEventListener("change", () => {
  alarm = new Alarm(soundDropdown.value)
})

/**
 * Represents the Timer class used to handle the countdown timer.
 */
class Timer {
  /**
   * Creates an instance of the Timer class with the specified hours, minutes, and seconds.
   * @param {number} hours - The hours component of the timer.
   * @param {number} minutes - The minutes component of the timer.
   * @param {number} seconds - The seconds component of the timer.
   */
  constructor(hours, minutes, seconds) {
    this.totalSeconds = hours * 3600 + minutes * 60 + seconds
    this.remainingSeconds = this.totalSeconds
    this.timerInterval = null
    this.isRunning = false
    this.maxTime = 3600 // 1 hour in seconds
  }

  /**
   * Starts the countdown timer.
   */
  start() {
    if (this.isRunning) return
    if (this.totalSeconds > this.maxTime) {
      console.log("The timer cannot exceed 1 hour.")
      return
    }

    this.isRunning = true
    this.timerInterval = setInterval(() => {
      this.remainingSeconds--
      this.updateUI()

      if (this.remainingSeconds <= 0) {
        this.stop()
        alarm
          .play()
          .then()
          .catch((error) => console.error(error))
        startButton.removeAttribute("disabled")
      }
    }, 1000)
  }

  /**
   * Stops the countdown timer.
   */
  stop() {
    clearInterval(this.timerInterval)
    this.isRunning = false
  }

  /**
   * Resets the countdown timer to its initial value.
   */
  reset() {
    this.remainingSeconds = this.totalSeconds
    this.updateUI()
    this.stop()
  }

  /**
   * Updates the UI with the current timer value in HH:MM:SS format.
   */
  updateUI() {
    const hours = Math.floor(this.remainingSeconds / 3600)
    const minutes = Math.floor((this.remainingSeconds % 3600) / 60)
    const seconds = this.remainingSeconds % 60
    countdownEl.innerText = `Count down: ${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(seconds)}`
    console.log(`Count down: ${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(seconds)}`)
  }

  /**
   * Pads a single-digit value with a leading zero.
   * @param {number} value - The value to be padded.
   * @returns {string} - The padded value as a string.
   */
  padZero(value) {
    return value.toString().padStart(2, "0")
  }

  /**
   * Sets the maximum time for the timer.
   * @param {number} hours - The hours component of the maximum time.
   * @param {number} minutes - The minutes component of the maximum time.
   * @param {number} seconds - The seconds component of the maximum time.
   */
  setMaxTime(hours, minutes, seconds) {
    const maxSeconds = hours * 3600 + minutes * 60 + seconds
    this.maxTime = Math.min(maxSeconds, 3600)
  }
}

// Event listener to start the timer when the start button is clicked.
startButton.addEventListener("click", () => {
  const hour = document.getElementById("hour").value
  const minutes = document.getElementById("minute").value
  const second = document.getElementById("second").value
  const timer = new Timer(Number(hour), Number(minutes), Number(second)) // Create a new timer instance with the specified time

  timer.start() // Start the timer

  if (timer.isRunning) {
    startButton.setAttribute("disabled", "")
  }
  // timer.stop(); // Stop the timer
  // timer.reset(); // Reset the timer
})
