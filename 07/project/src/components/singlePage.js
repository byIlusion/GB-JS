
const count_images = 4;

const gallery = {
  images: [],
  current_image_indx: 0,
  gallery_container: null,
  btn_next: null,
  btn_prev: null,
  timer: null,
  interval: 2000,

  init() {
    this.gallery_container = document.querySelector('.slideImage');
    this.gallery_container.setAttribute('style', 'text-align: center;');
    this.btn_next = document.querySelector('.slideArrow[title="next"]');
    this.btn_prev = document.querySelector('.slideArrow[title="previous"]');
    this._handleEvents();

    this.images = fetchImages();
    this._setImage(this.current_image_indx);
    this._startSlider();
  },

  _handleEvents() {
    this.btn_next.addEventListener('click', e => {
      e.preventDefault();
      this._slide(1);
      return false;
    });
    this.btn_prev.addEventListener('click', e => {
      e.preventDefault();
      this._slide(-1);
      return false;
    });
  },

  _startSlider() {
    this.timer = setInterval(() => {
      this._slideNext();
    }, this.interval);
  },

  _setImage(i) {
    this.gallery_container.innerHTML = '<img src="../src/assets/img/' + this.images[i] + '" alt="" style="height: 90%;">';
  },

  _slide(direction) {
    this.current_image_indx += direction;
    if (this.current_image_indx >= this.images.length) {
      this.current_image_indx = 0;
    }
    if (this.current_image_indx < 0) {
      this.current_image_indx = this.images.length - 1;
    }
    this._setImage(this.current_image_indx);
  }
};

gallery.init();

function fetchImages() {
  let images = [];
  for (i = 1; i <= count_images; i++) {
    images.push('sp_women_' + i + '.png');
  }
  return images;
}


