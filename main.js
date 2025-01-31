const TimeSetUp = () => {
  const now = new Date();
  const utcTime = now.toUTCString();
  document.getElementById("utc-time").textContent = utcTime;
};
TimeSetUp();
setInterval(TimeSetUp, 1000);
