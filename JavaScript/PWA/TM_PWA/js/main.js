if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('../sw_cachedpages.js')
      .then(reg => console.log(`${reg} <== reg\n\n`))
      .catch(e => console.log(`${e} <== e\n\n`));
  });
}
