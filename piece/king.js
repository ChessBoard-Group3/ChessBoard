function King(x, y, color, isAlive = true) {
    const pieceName = "king"
    const kingImage = color == "white" ? './image/white_king.png' : './image/black_king.png'

    Piece.call(this, x, y, color, pieceName, isAlive, kingImage)

    this.listXDirection = []
    this.listYDirection = []
    this.addListsDirection = function addListsDirection() {
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
            if (x + this.listXDirection[i] >= 0 && x + this.listXDirection[i] < chessBoard.col && y + this.listYDirection[i] >= 0 && y + this.listYDirection[i] < chessBoard.col) {
                let squareElement = chessBoard.rows[x + this.listXDirection[i]][y + this.listYDirection[i]]
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
        this.renderAvailableMove(availableMoveX, availableMoveY)
        this.renderAvailableKill(availableKillX, availableKillY)
    }
}

