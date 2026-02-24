import Icons from './utils/Icons.js';
import Chef from './Chef.js';

class Main {
  constructor() {
    this.init();
  }
  init() {
    Icons.load();
    let chefs = document.querySelectorAll('.js-chef');
    for (let i = 0; i < chefs.length; i++) {
      new Chef(chefs[i]);
    }
  }
}

new Main();
