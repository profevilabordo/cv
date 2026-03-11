// Service Worker ONLINE-ONLY
// NO cachea nada - siempre requiere conexión a internet
// Esto permite instalar la PWA pero garantiza que siempre consulte Supabase

self.addEventListener('install', function(event) {
  // Instalación inmediata sin cachear nada
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  // Activación inmediata
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', function(event) {
  // NO interceptamos fetch - siempre va a la red
  // Esto garantiza que NUNCA funcione offline
  return;
});
