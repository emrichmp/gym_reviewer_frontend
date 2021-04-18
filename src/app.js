class App {
    attachEventListeners() {
      document.querySelector('#gym-container').addEventListener('click', e => {
        console.log('clicked');
      });
    }
  }