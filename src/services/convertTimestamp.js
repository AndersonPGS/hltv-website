export function getDateFromTimestamp(timestamp) {
  let date = new Date(timestamp);
  let currentDate = String(date.getDate()).padStart(2, "0") + "/" + String(date.getMonth()).padStart(2, "0") + "/" + date.getFullYear();
  return currentDate;
}

export function getTimeFromTimestamp(timestamp) {
  let time = new Date(timestamp);
  let currentTime = String(time.getUTCHours()).padStart(2, "0") + ":" + String(time.getUTCMinutes()).padStart(2, "0");
  return currentTime;
}