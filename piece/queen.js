function Queen(x, y, color, isAlive = true) {
    const pieceName = "queen"
    const queenImage = color == "white" ? './image/white_queen.png' : './image/black_queen.png'

    Piece.call(this, x, y, color, pieceName, isAlive, queenImage)
    this.listXDirection = []
    this.listYDirection = []

    this.addListsDirection = function addListsDirection() {

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
            if (x + this.listXDirection[i] >= 0 && x + this.listXDirection[i] < chessBoard.col && y + this.listYDirection[i] >= 0 && y + this.listYDirection[i] < chessBoard.col) {
                let squareElement = chessBoard.rows[x + this.listXDirection[i]][y + this.listYDirection[i]]
                if((!squareElement.hasChildNodes() ||  squareElement.hasChildNodes() && squareElement.firstChild.attributes.data.color != color) && !flagHasPiece[i%8]) {
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
        this.renderAvailableMove(availableMoveX, availableMoveY)
        this.renderAvailableKill(availableKillX, availableKillY)
    }
}