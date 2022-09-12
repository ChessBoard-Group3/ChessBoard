// create borad
function Board() {
    this.col = 8
    this.row = 8
    this.boxes = null
    this.squares = []
    this.rows = []

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
        for(var j = 0; j < this.col; j++) {
            currentBoard[1][j] = new Pawn(1, j, "white")
            currentBoard[6][j] = new Pawn(6, j, "black")
        }
        // create white rook
        currentBoard[0][0] = new Rook(0, 0, "white") 
        currentBoard[0][7] = new Rook(0, 7, "white")
        // create black rook
        currentBoard[7][0] = new Rook(7, 0, "black")
        currentBoard[7][7] = new Rook(7, 7, "black")
        // create white knight
        currentBoard[0][1] = new Knight(0, 1, "white")
        currentBoard[0][6] = new Knight(0, 6, "white")
        // create black knight
        currentBoard[7][1] = new Knight(7, 1, "black")
        currentBoard[7][6] = new Knight(7, 6, "black")
        // create white Bishop 
        currentBoard[0][2] = new Bishop(0, 2, "white")
        currentBoard[0][5] = new Bishop(0, 5, "white")
        // create black Bishop
        currentBoard[7][2] = new Bishop(7, 2, "black")
        currentBoard[7][5] = new Bishop(7, 5, "black")
        // create white king
        currentBoard[0][3] = new King(0, 3, "white")
        // create black king
        currentBoard[7][4] = new King(7, 4, "black")
        // create white queen
        currentBoard[0][4] = new Queen(0, 4, "white")
        // create black queen
        currentBoard[7][3] = new Queen(7, 3, "black")

        this.boxes = currentBoard

        // console.log(this.boxes)
    }

    this.createBoard = function() {
        const boxes = this.boxes

        var boardElement = document.getElementById('chess-board')
        

        for(var i = 0; i < this.row; i++) {
            var row = new Row(i)
            this.rows.push(row)
            for(var j = 0; j < this.col; j++) {            
                let color = '#8B4513'
                if(i % 2 == 0) {
                    color = j % 2 == 0 ? '#8B4513' : '#FFE4C4'
                }
                else {
                    color = j % 2 == 0 ? '#FFE4C4' : '#8B4513'
                }
                var square = new Square(i, j, color)
                const currentPiece = boxes[i][j]
                // render chess
                if (currentPiece) {
                    square.appendChild(currentPiece.render())
                }
                this.rows[i][j] = square
                row.appendChild(square)
            }
            boardElement.appendChild(row)
        }
    }
}

function Row(line) {
    this.line = line
    this.rowElement = document.createElement('div')

    this.render = function render() {
        this.rowElement.style.display = "flex"
        this.rowElement.attributes.data = this
        return this.rowElement
    }
    return this.render()
}

function Square(x = 0, y = 0, color = "#8B4513") {
    this.x = x
    this.y = y
    this.color = color
    this.square = document.createElement('div')
    this.tien = "tien"
    this.render = function render() {
        this.square.style.backgroundColor = this.color
        this.square.style.width = "75px"
        this.square.style.height = "75px"
        this.square.style.display = "flex"
        this.square.style.justifyContent  = "center"
        this.square.style.alignItems = "center"
        this.square.style.border = "1px solid"
        this.square.attributes.data = this
        return this.square
    }
    return this.render()
}



