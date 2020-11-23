
const calc = {
  calc_container: null,
  result_container: null,
  keyboard_container: null,

  init() {
    this.calc_container = document.querySelector('#calc');
    this.result_container = document.querySelector('#result');
    this.keyboard_container = document.querySelector('#keyboard');
    this._reset();
    this._handleEvents();
  },

  _handleEvents() {
    this.keyboard_container.addEventListener('click', e => {
      switch (e.target.name) {
        case 'num':
          this._num(e.target.innerText);
          break;

        case 'op':
          this._op(e.target.innerText);
          break;

        case 'res':
          this.new_num = false;
          this._result();
          break;
      }
    });

    // document.addEventListener('keypress', e => {
    //   console.log(e);
    //   if (e.charCode >= 48 && e.keyCode <= 57)
    // })
  },

  _num(n) {
    console.log(n);
    if (this.new_num) {
      this.new_num = false;
      // this.result = +this.result_container.innerText;
      this.result_container.innerText = n;
    }
    else if (+this.result_container.innerText === 0) {
      this.result_container.innerText = n;
    }
    else {
      this.result_container.innerText += n
    }
  },

  _op(o) {
    console.log(o);
    this.operation = o;
    if (o === 'CE') {
      this._reset();
    }
    else {
      this._result();
    }
  },

  _reset() {
    this.result = null;
    this.new_num = true;
    this.operation = null;
    this.result_container.innerText = 0;
  },

  _dev() {
    this.result /= +this.result_container.innerText;
  },

  _mul() {
    this.result *= +this.result_container.innerText;
  },

  _sum() {
    this.result += +this.result_container.innerText;
  },

  _div() {
    this.result -= +this.result_container.innerText;
  },

  _result() {
    console.log('op = ' + this.operation);
    console.log('result = ' + this.result);
    if (this.result != null && !this.new_num) {
      switch (this.operation) {
        case '÷':
          this._dev();
          break;

        case '×':
          this._mul();
          break;

        case '+':
          this._sum();
          break;

        case '-':
          this._div();
          break;
      }
      this.result_container.innerText = this.result;
      this.new_num = true;
    }
    this.result = +this.result_container.innerText;
    this.new_num = true;
    console.log('result = ' + this.result);

  }
};

calc.init();