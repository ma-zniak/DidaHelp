function updateIosClock() {
  const now = new Date();
  const clock = document.getElementById("iosClock");
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  clock.textContent = hours + ':' + minutes;
}
setInterval(updateIosClock, 1000);
updateIosClock();
