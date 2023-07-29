let audio = ""
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "startTimer") {
    const time = message.time
    audio = message.audio
    startBackgroundTimer(time)
  }
})

function startBackgroundTimer(time) {
  chrome.alarms.create("timerAlarm", { delayInMinutes: time / 60 })
}

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "timerAlarm") {
    showNotification()
  }
})

function showNotification() {
  const notificationOptions = {
    type: "basic",
    iconUrl: "images/icon-48.png",
    title: "Timer Extension",
    message: "Time's up!",
  }

  chrome.notifications.create("timerNotification", notificationOptions)
}
