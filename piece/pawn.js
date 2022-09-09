function Pawn(isWhite, isAlive = true) {
    const pieceName = "pawn"
    const pawnImage = isWhite ? './image/white_pawn.png' : './image/black_pawn.png'

    Piece.call(this, isWhite, pieceName, isAlive, pawnImage)
}