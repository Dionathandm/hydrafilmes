self.addEventListener('install', event => {
  console.log('Service Worker instalado.');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service Worker ativado.');
});

self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : { title: 'HydraFilmes', body: 'Novo filme disponível!' };
  const options = {
    body: data.body,
    icon: 'https://i.ibb.co/dJwRf21T/file-000000001c34720eb81c427b33d748f6-1.png',
    badge: 'https://i.ibb.co/dJwRf21T/file-000000001c34720eb81c427b33d748f6-1.png',
  };
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('./index.html')
  );
});
