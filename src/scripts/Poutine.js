export default class Poutine {
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
