console.log('SW loaded');

self.addEventListener('push', e => {
  const data = e.data.json();

  console.log('got push');

  self.registration.showNotification(data.title, {
    body: 'Sent by Ragland'
  });
});
