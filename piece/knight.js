function Knight(x, y, isWhite, isAlive = true) {
    const pieceName = "knight"
    const knightImage = isWhite == "white" ? './image/white_knight.png' : './image/black_knight.png'

    Piece.call(this, x, y, isWhite, pieceName, isAlive, knightImage)

    this.move = function move() {
        let valiMoveX = [-2, -2, -1, 1, 2,  2,  1, -1]
        let valiMoveY = [-1,  1,  2, 2, 1, -1, -2, -2]
    }
}

