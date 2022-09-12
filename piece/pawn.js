function Pawn(x, y, isWhite, isAlive = true) {
    const pieceName = "pawn"
    const pawnImage = isWhite == "white" ? './image/white_pawn.png' : './image/black_pawn.png'

    Piece.call(this, x, y, isWhite, pieceName, isAlive, pawnImage)
}