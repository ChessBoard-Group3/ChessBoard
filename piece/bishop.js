function Bishop(x, y, color, isAlive = true) {
    const pieceName = "bishop"
    const bishopImage = color == "white" ? './image/white_bishop.png' : './image/black_bishop.png'

    Piece.call(this, x, y, color, pieceName, isAlive, bishopImage)

    this.moveX = []
    this.moveY = []

    this.move = function move() {
        for(let i=1; i< 8; i++) {
            this.moveX.push(i)
            this.moveY.push(i)
        }
        for(let i=1; i< 8; i++) {
            this.moveX.push(i)
            this.moveY.push(-i)
        }
        for(let i=1; i< 8; i++) {
            this.moveX.push(-i)
            this.moveY.push(i)
        }
        for(let i=1; i< 8; i++) {
            this.moveX.push(-i)
            this.moveY.push(-i)
        }
    }

    this.findAvailableMovePosition = function() {
        this.move()
        let availableMoveX = []
        let availableMoveY = []
        for (let i = 0; i < this.moveX.length; i++) {
            if (x + this.moveX[i] >= 0 && x + this.moveX[i] < chessBoard.col && y + this.moveY[i] >= 0 && y + this.moveY[i] < chessBoard.col
                && !chessBoard.rows[x + this.moveX[i]][y + this.moveY[i]].hasChildNodes()) {
                availableMoveX.push(this.moveX[i])
                availableMoveY.push(this.moveY[i])
            }
        }
        console.log([availableMoveX, availableMoveY])
        this.renderAvailableMove(availableMoveX, availableMoveY)
    }
}

