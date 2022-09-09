function Knight(isWhite, isAlive = true) {
    const pieceName = "knight"
    const knightImage = isWhite ? './image/white_knight.png' : './image/black_knight.png'

    Piece.call(this, isWhite, pieceName, isAlive, knightImage)
}