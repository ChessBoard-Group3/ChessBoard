function King(x, y, color, isAlive = true) {
    const pieceName = "king"
    const kingImage = color == "white" ? './image/white_king.png' : './image/black_king.png'

    Piece.call(this, x, y, color, pieceName, isAlive, kingImage)

    this.moveX = []
    this.moveY = []

    this.move = function move() {
        this.moveX = [-1, -1, -1, 0, 1, 1,  1,  0]
        this.moveY = [-1,  0,  1, 1, 1, 0, -1, -1]
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

