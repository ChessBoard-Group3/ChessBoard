function King(isWhite, isAlive = true) {
    const pieceName = "king"
    const kingImage = isWhite ? './image/white_king.png' : './image/black_king.png'

    Piece.call(this, isWhite, pieceName, isAlive, kingImage)

    this.move = function move() {
        let valiMoveX = [-1, -1, -1, 0, 1, 1,  1,  0]
        let valiMoveY = [-1,  0,  1, 1, 1, 0, -1, -1]
    }
}