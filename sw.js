// sw.js — Service Worker для перехвата уведомлений
self.addEventListener('install', (e) => {
    e.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (e) => {
    e.waitUntil(self.clients.claim());
});

self.addEventListener('push', (e) => {
    const data = e.data ? e.data.text() : 'Новое уведомление';
    e.waitUntil(
        self.registration.showNotification('Голосование 2026', {
            body: data,
            icon: 'https://via.placeholder.com/64'
        })
    );
});

// Перехватываем все уведомления (если они приходят через Service Worker)
self.addEventListener('notificationclick', (e) => {
    e.notification.close();
    // Отправляем в Telegram (можно добавить)
});