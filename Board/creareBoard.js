// create borad
function Board() {
    this.col = 8
    this.row = 8
    this.boxes = null

    // put chess in board
    this.begin = function() {
        var currentBoard = []
        for(var i = 0; i < this.row; i++) {
            const rowChess = []
            for(var j = 0; j < this.col; j++) {

                rowChess[j] = undefined
            }
            currentBoard.push(rowChess)
        }
        for(var i = 0; i < this.row; i++) {
            for(var j = 0; j < this.col; j++) {
                if (i === 1) {
                    currentBoard[i][j] = new Pawn(true)
                }
                if (i === 6) {
                    currentBoard[i][j] = new Pawn(false)
                }
            }
        }
        // create white rook
        currentBoard[0][0] = new Rook(true) 
        currentBoard[0][7] = new Rook(true)
        // create black rook
        currentBoard[7][0] = new Rook(false)
        currentBoard[7][7] = new Rook(false)
        // create white knight
        currentBoard[0][1] = new Knight(true)
        currentBoard[0][6] = new Knight(true)
        // create black knight
        currentBoard[7][1] = new Knight(false)
        currentBoard[7][6] = new Knight(false)
        // create white Bishop 
        currentBoard[0][2] = new Bishop(true)
        currentBoard[0][5] = new Bishop(true)
        // create black Bishop
        currentBoard[7][2] = new Bishop(false)
        currentBoard[7][5] = new Bishop(false)
        // create white king
        currentBoard[0][3] = new King(true)
        // create black king
        currentBoard[7][4] = new King(false)
        // create white queen
        currentBoard[0][4] = new Queen(true)
        // create black queen
        currentBoard[7][3] = new Queen(false)

        this.boxes = currentBoard

        // console.log(this.boxes)
    }

    this.createBoard = function() {
        const boxes = this.boxes

        var board = document.getElementById('chess-board')

        for(var i = 0; i < this.row; i++) {
            var rowElement = new Row(i)
            for(var j = 0; j < this.col; j++) {              
                var square = new Square(i, j, j % 2 == 0 ? '#8B4513' : '#FFE4C4')
                const currentPiece = boxes[i][j]
                // render chess
                if (currentPiece) {
                    square.appendChild(currentPiece.render())
                }
                rowElement.appendChild(square) 
            }
            board.appendChild(rowElement)
        }
    }
}

function Row(line) {
    this.line = line
    this.rowElement = document.createElement('div')

    this.render = function render() {
        this.rowElement.style.flexDirection = this.line % 2 == 0 ? '' : 'row-reverse'
        this.rowElement.style.display = "flex"
        return this.rowElement
    }
    return this.render()
}

function Square(x = 0, y = 0, color = "#8B4513") {
    this.x = x
    this.y = y
    this.color = color
    this.square = document.createElement('div')
    
    this.render = function render() {
        this.square.style.backgroundColor = this.color
        this.square.style.width = "75px"
        this.square.style.height = "75px"
        this.square.style.display = "flex"
        this.square.style.justifyContent  = "center"
        this.square.style.alignItems = "center"
        return this.square
    }
    return this.render()
}

function Spot(x, y, piece)
{
    this.x = x
    this.y = y
    this.piece = piece
}

var game = new Board()
game.begin()
game.createBoard()




