function Knight(x, y, color, isAlive = true) {
    const pieceName = "knight"
    const knightImage = color == "white" ? './image/white_knight.png' : './image/black_knight.png'

    Piece.call(this, x, y, color, pieceName, isAlive, knightImage)

    this.listXDirection = []
    this.listYDirection = []

    this.addListsDirection = function addListsDirection() {
        this.listXDirection = [-2, -2, -1, 1, 2,  2,  1, -1]
        this.listYDirection = [-1,  1,  2, 2, 1, -1, -2, -2]
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
            let positionX = x + this.listXDirection[i]
            let positionY = y + this.listYDirection[i]
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
            let square = chessBoard.rows[x + availableMoveX[i]].squares[y + availableMoveY[i]]
            chessBoard.toggleAvailableSquare(this.isSelected, square, "#56d556")
        }
        for (let i = 0; i < availableKillX.length; i++) {
            let square = chessBoard.rows[x + availableKillX[i]].squares[y + availableKillY[i]]
            chessBoard.toggleAvailableSquare(this.isSelected, square, "red")
        }
    }
}
