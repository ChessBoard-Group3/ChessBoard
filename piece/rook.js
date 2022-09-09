function Rook(isWhite, isAlive = true) {
    const pieceName = "rook"
    const rookImage = isWhite ? './image/white_rook.png' : './image/black_rook.png'

    Piece.call(this, isWhite, pieceName, isAlive, rookImage)
}