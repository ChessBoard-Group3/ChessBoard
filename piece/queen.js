function Queen(x, y, color, isAlive = true) {
    const pieceName = "queen"
    const queenImage = color == "white" ? './image/white_queen.png' : './image/black_queen.png'

    Piece.call(this, x, y, color, pieceName, isAlive, queenImage)
    this.moveX = []
    this.moveY = []

    this.move = function move() {

        for(let i=1; i< 8; i++) {
            // straight 
            this.moveX.push(0)
            this.moveY.push(i)
            this.moveX.push(0)
            this.moveY.push(-i)
            this.moveX.push(i)
            this.moveY.push(0)
            this.moveX.push(-i)
            this.moveY.push(0)
            
            // cross
            this.moveX.push(i)
            this.moveY.push(i)
            this.moveX.push(i)
            this.moveY.push(-i)
            this.moveX.push(-i)
            this.moveY.push(i)
            this.moveX.push(-i)
            this.moveY.push(-i)
        }
    }

    this.findAvailableMovePosition = function findAvailableMovePosition() {
        this.move()
        let availableMoveX = []
        let availableMoveY = []
        let flagHasPiece = [false, false, false, false, false, false, false, false]
        for (let i = 0; i < this.moveX.length; i++) {
            if (x + this.moveX[i] >= 0 && x + this.moveX[i] < chessBoard.col && y + this.moveY[i] >= 0 && y + this.moveY[i] < chessBoard.col) {
                let squareElement = chessBoard.rows[x + this.moveX[i]][y + this.moveY[i]]
                if((!squareElement.hasChildNodes() ||  squareElement.hasChildNodes() && squareElement.firstChild.attributes.data.color != color) && !flagHasPiece[i%8]) {
                    if(squareElement.hasChildNodes() && squareElement.firstChild.attributes.data.color != color ) {
                        flagHasPiece[i%8] = true;
                    }
                    availableMoveX.push(this.moveX[i])
                    availableMoveY.push(this.moveY[i])
                }
                else {
                    flagHasPiece[i%8] = true;
                }
            }
        }
        this.renderAvailableMove(availableMoveX, availableMoveY)
    }
}