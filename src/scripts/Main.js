import Icons from './utils/Icons.js';

// La ligne suivante devrait être au TOUT début du init() du Main
Icons.load();

class Main {
  constructor() {
    this.init();
  }
  init() {
    let chefs = document.querySelectorAll('.js-chef');
    for (let i = 0; i < chefs.length; i++) {
      new Chef(chefs[i]);
    }
  }
}

class Chef {
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

class Poutine {
  constructor(el) {
    this.element = el;
    this.types = this.element.querySelectorAll('.js-button');
    this.selectedType = null;
    this.init();
  }

  init() {
    for (let i = 0; i < this.types.length; i++) {
      this.types[i].addEventListener('click', this.selectType.bind(this));
    }
  }

  selectType(e) {
    for (let i = 0; i < this.types.length; i++) {
      this.types[i].classList.remove('is-active');
    }
    let clickedEl = e.currentTarget;
    clickedEl.classList.add('is-active');
    this.selectedType = clickedEl.textContent;
    this.updatePhoto();
  }
  updatePhoto() {
    let img = this.element.querySelector('.js-poutine-img');
    img.classList.add('is-active');
    img.src = `assets/images/${this.selectedType}.png`;
  }
}

new Main();
