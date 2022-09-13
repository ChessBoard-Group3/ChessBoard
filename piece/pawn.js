function Pawn(x, y, color, isAlive = true) {
    const pieceName = "pawn"
    const pawnImage = color == "white" ? './image/white_pawn.png' : './image/black_pawn.png'
    
    Piece.call(this, x, y, color, pieceName, isAlive, pawnImage)
    this.move = function move() {
        if (color === 'white') {
            this.moveX = [1]
            this.moveY = [0]
        }
        else {
            this.moveX = [-1]
            this.moveY = [0]
        }
    }
    this.findAvailableMovePosition = function findAvailableMoveKnightPosition() {
        this.move()
        let availableMoveX = []
        let availableMoveY = []
        for (let i = 0; i < this.moveX.length; i++) {
            if (x + this.moveX[i] >= 0 && x + this.moveX[i] < chessBoard.col && y + this.moveY[i] >= 0 && y + this.moveY[i] < chessBoard.col
                && !chessBoard.rows[x + this.moveX[i]][y + this.moveY[i]].hasChildNodes()) {
                if (color === 'white' && x === 1) {
                    availableMoveX.push(2)
                    availableMoveY.push(0)
                }
                else if (color === 'black' && x === 6) {
                    availableMoveX.push(-2)
                    availableMoveY.push(0)
                }
                availableMoveX.push(this.moveX[i])
                availableMoveY.push(this.moveY[i])
            }
        }
        this.renderAvailableMove(availableMoveX, availableMoveY)
    }
}