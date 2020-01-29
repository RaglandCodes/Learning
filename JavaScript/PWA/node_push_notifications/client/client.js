const publicVapidKey =
  'BERlEuDfLGjwwVxRe6cUhaiLQHFPTiy8UhUtXkKGvDZM-hJESKEeffFqQ_gvVM09xuXgIJe9JitbNZijJz5mbpg';

if ('serviceWorker' in navigator) {
  console.log('sw in navigator');

  send().catch(e => console.log(e));

  async function send() {
    console.log('registering SW');

    const register = await navigator.serviceWorker.register('./worker.js', {
      scope: '/'
    });

    console.log('sw registered');

    const subscription = await register.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    });

    console.log('push registered');
    await fetch('/subscribe', {
      method: 'POST',
      body: JSON.stringify(subscription),
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  console.log('push sent');

  function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
}
