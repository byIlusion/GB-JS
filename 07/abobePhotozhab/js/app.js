
const photozhab = {
    _canvas: null,
    _ctx: null,
    _tools: null,
    _xCoord: null,
    _yCoord: null,

    _currentTool: null,
    _currentBrushSize: 10,
    _currentColor: '#ff0000',
    _coords: null,

    init() {
        this._canvas = document.querySelector('#canvas');
        this._ctx = this._canvas.getContext('2d');
        this._tools = document.querySelector('#tools');
        this._xCoord = document.querySelector('#xCoord');
        this._yCoord = document.querySelector('#yCoord');

        this._tools.querySelector('[data-tool="Color"]').value = this._currentColor;
        this._tools.querySelector('[data-tool="BrushSize"]').value = this._currentBrushSize;
        this._handleEvents();
    },

    _handleEvents() {
        this._tools.addEventListener('click', e => {
            if (e.target.name === 'tool') {
                this._currentTool = e.target.dataset.tool;
            }
        });

        this._tools.addEventListener('input', e => {
            if (e.target.name === 'tool-input') {
                if (e.target.dataset.tool == 'BrushSize') {
                    this._currentBrushSize = +e.target.value;
                }

                if (e.target.dataset.tool == 'Color') {
                    this._currentColor = e.target.value;
                }
            }
        });

        // this._canvas.addEventListener('click', e => {
        this._canvas.addEventListener('mousedown', e => {
            this._coords = [e.offsetX, e.offsetY];
            this._canvasEvent(e);
        });

        this._canvas.addEventListener('mousemove', e => {
            this._updateCoordsInfo(e.offsetX, e.offsetY);
            this._canvasEvent(e);
        });

    },

    _canvasEvent(e) {
        if (e.which === 1) {
            switch (this._currentTool) {
                case ('pencil'): {
                    this._drawPencil(e.offsetX, e.offsetY);
                    break;
                }

                case ('fill'): {
                    this._drawFill();
                    break;
                }

                case ('eraser'): {
                    this._drawPencil(e.offsetX, e.offsetY, true);
                    break;
                }

                case ('square'): {
                    this._drawSquare(e.offsetX, e.offsetY);
                    break;
                }

                case ('clearCnv'): {
                    this._drawFill(true);
                    break;
                }
            }
        }
    },

    _drawPencil(x, y, itEraser = false) {
        x -= this._currentBrushSize / 2;
        y -= this._currentBrushSize / 2;
        this._ctx.fillStyle = itEraser ? '#ffffff' : this._currentColor;
        this._ctx.fillRect(x, y, this._currentBrushSize, this._currentBrushSize);
    },

    _drawFill(itEraser = false) {
        this._ctx.fillStyle = itEraser ? '#ffffff' : this._currentColor;
        this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
    },

    _drawSquare(x, y, itEraser = false) {
        x -= this._coords[0];
        y -= this._coords[1];
        this._ctx.fillStyle = this._currentColor;
        this._ctx.fillRect(this._coords[0], this._coords[1], x, y);
    },

    _updateCoordsInfo(x, y) {
        this._xCoord.innerText = x;
        this._yCoord.innerText = y;
    }
};

photozhab.init();

