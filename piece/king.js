function King(x, y, isWhite, isAlive = true) {
    const pieceName = "king"
    const kingImage = isWhite == "white" ? './image/white_king.png' : './image/black_king.png'

    Piece.call(this, x, y, isWhite, pieceName, isAlive, kingImage)

    this.move = function move() {
        let valiMoveX = [-1, -1, -1, 0, 1, 1,  1,  0]
        let valiMoveY = [-1,  0,  1, 1, 1, 0, -1, -1]
    }
}