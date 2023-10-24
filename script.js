if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(register => console.log('Registro de SW exitoso', register))
      .catch(error => console.warn('Error al tratar de registrar el SW', error));
}