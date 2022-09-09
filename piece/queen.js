function Queen(isWhite, isAlive = true) {
    const pieceName = "queen"
    const queenImage = isWhite ? './image/white_queen.png' : './image/black_queen.png'

    Piece.call(this, isWhite, pieceName, isAlive, queenImage)
}