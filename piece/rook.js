function Rook(x, y, color, isAlive = true) {
    const pieceName = "rook"
    const rookImage = color == "white" ? './image/white_rook.png' : './image/black_rook.png'
    this.listXDirection = []
    this.listYDirection = []
    Piece.call(this, x, y, color, pieceName, isAlive, rookImage)

    this.addListsDirection = function addListsDirection() {
        for(let i=1; i< 8; i++) {
            this.listXDirection.push(0)
            this.listYDirection.push(i)
            this.listXDirection.push(0)
            this.listYDirection.push(-i)
            this.listXDirection.push(i)
            this.listYDirection.push(0)
            this.listXDirection.push(-i)
            this.listYDirection.push(0)
        }
    }
    this.findAvailableMovePosition = function findAvailableMovePosition() {
        this.addListsDirection() 
        let availableMoveX = []
        let availableMoveY = []
        let availableKillX = []
        let availableKillY = []
        let flagHasPiece = [false, false, false, false]
        for (let i = 0; i < this.listXDirection.length; i++) {
            if (x + this.listXDirection[i] >= 0 && x + this.listXDirection[i] < chessBoard.col && y + this.listYDirection[i] >= 0 && y + this.listYDirection[i] < chessBoard.col) {
                let squareElement = chessBoard.rows[x + this.listXDirection[i]][y + this.listYDirection[i]]
                if((!squareElement.hasChildNodes() ||  squareElement.hasChildNodes() && squareElement.firstChild.attributes.data.color != color) && !flagHasPiece[i%4]) {
                    if(squareElement.hasChildNodes() && squareElement.firstChild.attributes.data.color != color ) {
                        flagHasPiece[i%4] = true;
                        availableKillX.push(this.listXDirection[i])
                        availableKillY.push(this.listYDirection[i])
                    }
                        availableMoveX.push(this.listXDirection[i])
                        availableMoveY.push(this.listYDirection[i])
                }
                else {
                    flagHasPiece[i%4] = true;
                }
            }
        }
        this.renderAvailableMove(availableMoveX, availableMoveY)
        this.renderAvailableKill(availableKillX, availableKillY)
    }
}