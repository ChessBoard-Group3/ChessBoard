function Knight(isWhite, isAlive = true) {
    const pieceName = "knight"
    const knightImage = isWhite ? './image/white_knight.png' : './image/black_knight.png'

    Piece.call(this, isWhite, pieceName, isAlive, knightImage)

    this.move = function move() {
        let valiMoveX = [-2, -2, -1, 1, 2,  2,  1, -1]
        let valiMoveY = [-1,  1,  2, 2, 1, -1, -2, -2]
    }
}

