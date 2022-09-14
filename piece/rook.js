function Rook(x, y, color, isAlive = true) {
    const pieceName = "rook"
    const rookImage = color == "white" ? './image/white_rook.png' : './image/black_rook.png'
    this.moveX = []
    this.moveY = []
    Piece.call(this, x, y, color, pieceName, isAlive, rookImage)

    this.move = function move() {
        for(let i=1; i< 8; i++) {
            this.moveX.push(0)
            this.moveY.push(i)
            this.moveX.push(0)
            this.moveY.push(-i)
            this.moveX.push(i)
            this.moveY.push(0)
            this.moveX.push(-i)
            this.moveY.push(0)
        }
    }
    this.findAvailableMovePosition = function findAvailableMovePosition() {
        this.move() 
        let availableMoveX = []
        let availableMoveY = []
        let flagHasPiece = [false, false, false, false]
        for (let i = 0; i < this.moveX.length; i++) {
            if (x + this.moveX[i] >= 0 && x + this.moveX[i] < chessBoard.col && y + this.moveY[i] >= 0 && y + this.moveY[i] < chessBoard.col) {
                let squareElement = chessBoard.rows[x + this.moveX[i]][y + this.moveY[i]]
                if((!squareElement.hasChildNodes() ||  squareElement.hasChildNodes() && squareElement.firstChild.attributes.data.color != color) && !flagHasPiece[i%4]) {
                    if(squareElement.hasChildNodes() && squareElement.firstChild.attributes.data.color != color ) {
                        flagHasPiece[i%4] = true;
                    }
                    availableMoveX.push(this.moveX[i])
                    availableMoveY.push(this.moveY[i])
                }
                else {
                    flagHasPiece[i%4] = true;
                }
            }
        }
        this.renderAvailableMove(availableMoveX, availableMoveY)
    }
}