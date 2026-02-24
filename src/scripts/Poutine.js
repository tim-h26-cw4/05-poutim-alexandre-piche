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
    let clickedEl = e.currentTarget;
    let setElActive = true;
    if (clickedEl.classList.contains('is-active')) {
      setElActive = false;
    }

    for (let i = 0; i < this.types.length; i++) {
      this.types[i].classList.remove('is-active');
    }

    if (setElActive) {
      clickedEl.classList.add('is-active');
      this.selectedType = clickedEl.textContent;
      this.updatePhoto(setElActive);
    } else {
      this.selectedType = null;
      this.updatePhoto(setElActive);
    }
  }
  updatePhoto(setElActive) {
    let img = this.element.querySelector('.js-poutine-img');
    if (!img) return;
    if (setElActive) {
      img.classList.add('is-active');
      img.src = `assets/images/${this.selectedType}.png`;
    } else {
      img.classList.remove('is-active');
      img.src = `assets/images/poutine.png`;
    }
  }
}
