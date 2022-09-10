function Rook(isWhite, isAlive = true) {
    const pieceName = "rook"
    const rookImage = isWhite ? './image/white_rook.png' : './image/black_rook.png'

    Piece.call(this, isWhite, pieceName, isAlive, rookImage)

    this.move = function move() {
        let moveX = []
        let moveY = []
        for(let i=1; i< 8; i++) {
            moveX.push(0)
            moveY.push(i)
            moveX.push(0)
            moveY.push(-i)
            moveX.push(i)
            moveY.push(0)
            moveX.push(-i)
            moveY.push(0)
        }
    }
}
const test = new Rook()
test.move()