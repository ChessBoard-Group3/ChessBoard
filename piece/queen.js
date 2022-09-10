function Queen(isWhite, isAlive = true) {
    const pieceName = "queen"
    const queenImage = isWhite ? './image/white_queen.png' : './image/black_queen.png'

    Piece.call(this, isWhite, pieceName, isAlive, queenImage)

    this.move = function move() {
        let moveX = []
        let moveY = []
        for(let i=1; i< 8; i++) {
            // straight 
            moveX.push(0)
            moveY.push(i)
            moveX.push(0)
            moveY.push(-i)
            moveX.push(i)
            moveY.push(0)
            moveX.push(-i)
            moveY.push(0)
            
            // cross
            moveX.push(i)
            moveY.push(i)
            moveX.push(i)
            moveY.push(-i)
            moveX.push(-i)
            moveY.push(i)
            moveX.push(-i)
            moveY.push(-i)
        }
    }
}