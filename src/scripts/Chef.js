import Poutine from './Poutine.js';

export default class Chef {
  constructor(el) {
    this.element = el;
    this.menu = [];
    this.container = this.element.querySelector('.js-chef-order');
    this.init();
  }
  init() {
    let poutines = this.element.querySelectorAll('.js-poutine');
    for (let i = 0; i < poutines.length; i++) {
      this.menu.push(new Poutine(poutines[i]));
    }

    this.element
      .querySelector('.js-btn-send-order')
      .addEventListener('click', this.sendOrder.bind(this));
  }
  sendOrder() {
    this.container.innerHTML = '';

    this.createHeader();
    this.createListItem();
    this.createFooter();
  }
  createHeader() {
    let title = document.createElement('h2');
    title.innerText = `Voici le résumé de votre commande :`;
    this.container.appendChild(title);
  }
  createListItem() {
    for (let i = 0; i < this.menu.length; i++) {
      let type = this.menu[i].selectedType;
      if (type != null) {
        let p = document.createElement('p');
        p.textContent = `Poutine #${i + 1} - ${type}`;
        this.container.appendChild(p);
      }
    }
  }
  createFooter() {
    let poutineCount = 0;
    for (let i = 0; i < this.menu.length; i++) {
      let type = this.menu[i].selectedType;
      if (type != null) {
        poutineCount++;
      }
    }
    const p = document.createElement('p');
    p.textContent = `Nombre total de poutine(s) :  ${poutineCount}`;
    this.container.appendChild(p);
  }
}
