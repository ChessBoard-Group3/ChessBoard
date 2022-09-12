function Bishop(x, y, isWhite, isAlive = true) {
    const pieceName = "bishop"
    const bishopImage = isWhite == "white" ? './image/white_bishop.png' : './image/black_bishop.png'

    Piece.call(this, x, y, isWhite, pieceName, isAlive, bishopImage)

    this.move = function move() {
        let moveX = []
        let moveY = []
        for(let i=1; i< 8; i++) {
            moveX.push(i)
            moveY.push(i)
        }
        for(let i=1; i< 8; i++) {
            moveX.push(i)
            moveY.push(-i)
        }
        for(let i=1; i< 8; i++) {
            moveX.push(-i)
            moveY.push(i)
        }
        for(let i=1; i< 8; i++) {
            moveX.push(-i)
            moveY.push(-i)
        }
    }
}
