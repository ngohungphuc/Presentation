console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: "Notified by Web!",
    icon: "https://avatars2.githubusercontent.com/u/37768807?s=200&v=4"
  });
});
