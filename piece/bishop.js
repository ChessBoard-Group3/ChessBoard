function Bishop(isWhite, isAlive = true) {
    const pieceName = "bishop"
    const bishopImage = isWhite ? './image/white_bishop.png' : './image/black_bishop.png'

    Piece.call(this, isWhite, pieceName, isAlive, bishopImage)
}