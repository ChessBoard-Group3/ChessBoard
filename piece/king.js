function King(x, y, color, isAlive = true) {
    this.x = x
    this.y = y
    const pieceName = "king"
    const kingImage = color == "white" ? './image/white_king.png' : './image/black_king.png'

    Piece.call(this, x, y, color, pieceName, isAlive, kingImage)


    this.addListsDirection = function addListsDirection() {
        this.listXDirection = []
        this.listYDirection = []
        this.listXDirection = [-1, -1, -1, 0, 1, 1,  1,  0]
        this.listYDirection = [-1,  0,  1, 1, 1, 0, -1, -1]
    }
    this.findAvailableMovePosition = function findAvailableMovePosition() {
        this.addListsDirection()
        //Move
        let availableMoveX = []
        let availableMoveY = []

        //Kill
        let availableKillX = []
        let availableKillY = []
        for (let i = 0; i < this.listXDirection.length; i++) {
            let positionX = this.x + this.listXDirection[i]
            let positionY = this.y + this.listYDirection[i]
            if (positionX >= 0 && positionX < chessBoard.col && positionY >= 0 
            && positionY < chessBoard.col) {
                let squareElement = chessBoard.rows[positionX].squares[positionY].squareElement
                if (squareElement.hasChildNodes() && squareElement.firstChild.attributes.data.color != color) {
                    availableKillX.push(this.listXDirection[i])
                    availableKillY.push(this.listYDirection[i])
                }
                else if(!squareElement.hasChildNodes()){
                    availableMoveX.push(this.listXDirection[i])
                    availableMoveY.push(this.listYDirection[i])
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

