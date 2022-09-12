function Bishop(x = 0, y = 0, isWhite, isAlive = true) {
    const pieceName = "bishop"
    const bishopImage = isWhite ? './image/white_bishop.png' : './image/black_bishop.png'

    Piece.call(this, isWhite, pieceName, isAlive, bishopImage)

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
