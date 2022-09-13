function Knight(x, y, color, isAlive = true) {
    const pieceName = "knight"
    const knightImage = color == "white" ? './image/white_knight.png' : './image/black_knight.png'

    Piece.call(this, x, y, color, pieceName, isAlive, knightImage)

    this.moveX = []
    this.moveY = []

    this.move = function move() {
        this.moveX = [-2, -2, -1, 1, 2,  2,  1, -1]
        this.moveY = [-1,  1,  2, 2, 1, -1, -2, -2]
    }
    this.findAvailableMovePosition = function findAvailableMovePosition() {
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
        this.renderAvailableMove(availableMoveX, availableMoveY)
    }
}