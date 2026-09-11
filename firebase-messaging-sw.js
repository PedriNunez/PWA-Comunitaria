importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBz_-GkuitUqe493oxc4u_GJH7OXBqYe5M",
  authDomain: "biblioteca-notificacione-da041.firebaseapp.com",
  projectId: "biblioteca-notificacione-da041",
  messagingSenderId: "345012227395",
  appId: "1:345012227395:web:db0083fddad6404b8fb3f6"
});

var messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  var title = payload.notification ? payload.notification.title : 'Biblioteca';
  var options = {
    body: payload.notification ? payload.notification.body : '',
    icon: 'icon.svg',
    vibrate: [100, 50, 100],
    data: { url: payload.data && payload.data.url ? payload.data.url : '/' }
  };
  self.registration.showNotification(title, options);
3:});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  var url = event.notification.data && event.notification.data.url ? event.notification.data.url : '/';
  event.waitUntil(clients.openWindow(url));
});