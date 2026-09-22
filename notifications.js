// Push notification prompt. Wire a real OneSignal app id here when ready to go live.
function requestNotifications() {
  if (!("Notification" in window)) {
    showToast("Notifications aren't supported on this device");
    return;
  }
  if (Notification.permission === "granted") {
    showToast("Notifications already on");
    return;
  }
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      showToast("You'll get alerts for offers & bookings");
    } else {
      showToast("Notifications stayed off");
    }
  });
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.style.cssText =
    "position:fixed;top:20px;left:50%;transform:translateX(-50%);background:#241A24;color:#fff;padding:10px 18px;border-radius:100px;font:600 13px Manrope,sans-serif;z-index:999;box-shadow:0 8px 20px rgba(0,0,0,0.4);";
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2200);
}
