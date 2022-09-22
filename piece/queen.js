function Queen(x, y, color, isAlive = true) {
    this.x = x
    this.y = y
    const pieceName = "queen"
    const queenImage = color == "white" ? './image/white_queen.png' : './image/black_queen.png'

    Piece.call(this, x, y, color, pieceName, isAlive, queenImage)


    this.addListsDirection = function addListsDirection() {
        this.listXDirection = []
        this.listYDirection = []
        for(let i=1; i< 8; i++) {
            // straight 
            this.listXDirection.push(0)
            this.listYDirection.push(i)
            this.listXDirection.push(0)
            this.listYDirection.push(-i)
            this.listXDirection.push(i)
            this.listYDirection.push(0)
            this.listXDirection.push(-i)
            this.listYDirection.push(0)
            
            // cross
            this.listXDirection.push(i)
            this.listYDirection.push(i)
            this.listXDirection.push(i)
            this.listYDirection.push(-i)
            this.listXDirection.push(-i)
            this.listYDirection.push(i)
            this.listXDirection.push(-i)
            this.listYDirection.push(-i)
        }
    }

    this.findAvailableMovePosition = function findAvailableMovePosition() {
        this.addListsDirection()
        let availableMoveX = []
        let availableMoveY = []

        let availableKillX = []
        let availableKillY = []

        let flagHasPiece = [false, false, false, false, false, false, false, false]
        
        for (let i = 0; i < this.listXDirection.length; i++) {
            
            let positionX = this.x + this.listXDirection[i]
            let positionY = this.y + this.listYDirection[i]
            
            if (positionX >= 0 && positionX < chessBoard.col && positionY >= 0 
                && positionY < chessBoard.col) {
                let squareElement = chessBoard.rows[positionX].squares[positionY].squareElement
                if((!squareElement.hasChildNodes() || squareElement.hasChildNodes() && squareElement.firstChild.attributes.data.color != color) && !flagHasPiece[i%8]) {
                    if(squareElement.hasChildNodes() && squareElement.firstChild.attributes.data.color != color ) {
                        flagHasPiece[i%8] = true;
                        availableKillX.push(this.listXDirection[i])
                        availableKillY.push(this.listYDirection[i])
                    }
                        availableMoveX.push(this.listXDirection[i])
                        availableMoveY.push(this.listYDirection[i])
                }
                else {
                    flagHasPiece[i%8] = true;
                }
            }
        }
        for (let i = 0; i < availableMoveX.length; i++) {
            let square = chessBoard.rows[this.x + availableMoveX[i]].squares[this.y + availableMoveY[i]]
            chessBoard.toggleAvailableSquare(this.isSelected, square, SquareColor.Green)
        }
        for (let i = 0; i < availableKillX.length; i++) {
            let square = chessBoard.rows[this.x + availableKillX[i]].squares[this.y + availableKillY[i]]
            chessBoard.toggleAvailableSquare(this.isSelected, square, SquareColor.Red)
        }
    }
}