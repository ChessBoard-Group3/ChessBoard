function King(isWhite, isAlive = true) {
    const pieceName = "king"
    const kingImage = isWhite ? './image/white_king.png' : './image/black_king.png'

    Piece.call(this, isWhite, pieceName, isAlive, kingImage)
}