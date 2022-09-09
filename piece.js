// create chess
function Piece(isWhite, name, isAlive = true, image) {
    this.isWhite = isWhite;
    this.name = name;
    this.isAlive = isAlive;
    this.image = image;
}

function King(isWhite, isAlive = true) {
    const pieceName = "king"
    const kingImage = isWhite ? './image/white_king.png' : './image/black_king.png'

    Piece.call(this, isWhite, pieceName, isAlive, kingImage)
}

function Queen(isWhite, isAlive = true) {
    const pieceName = "queen"
    const queenImage = isWhite ? './image/white_queen.png' : './image/black_queen.png'

    Piece.call(this, isWhite, pieceName, isAlive, queenImage)
}

function Rook(isWhite, isAlive = true) {
    const pieceName = "rook"
    const rookImage = isWhite ? './image/white_rook.png' : './image/black_rook.png'

    Piece.call(this, isWhite, pieceName, isAlive, rookImage)
}

function Bishop(isWhite, isAlive = true) {
    const pieceName = "bishop"
    const bishopImage = isWhite ? './image/white_bishop.png' : './image/black_bishop.png'

    Piece.call(this, isWhite, pieceName, isAlive, bishopImage)
}

function Knight(isWhite, isAlive = true) {
    const pieceName = "knight"
    const knightImage = isWhite ? './image/white_knight.png' : './image/black_knight.png'

    Piece.call(this, isWhite, pieceName, isAlive, knightImage)
}

function Pawn(isWhite, isAlive = true) {
    const pieceName = "pawn"
    const pawnImage = isWhite ? './image/white_pawn.png' : './image/black_pawn.png'

    Piece.call(this, isWhite, pieceName, isAlive, pawnImage)
}