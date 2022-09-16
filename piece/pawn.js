function Pawn(x, y, color, isAlive = true) {
    const pieceName = "pawn"
    const pawnImage = color == "white" ? './image/white_pawn.png' : './image/black_pawn.png'
    
    Piece.call(this, x, y, color, pieceName, isAlive, pawnImage)
    this.addListsDirection = function addListsDirection() {
        if (color === 'white') {
            this.listXDirection = [1]
            this.listYDirection = [0]
            if(x === 1) {
                this.listXDirection.push(2)
                this.listYDirection.push(0)
            }
            this.listXDirection.push(1)
            this.listYDirection.push(1)
            this.listXDirection.push(1)
            this.listYDirection.push(-1)
        }
        else {
            this.listXDirection = [-1]
            this.listYDirection = [0]
            if(x === 6) {
                this.listXDirection.push(-2)
                this.listYDirection.push(0)
            }
            this.listXDirection.push(-1)
            this.listYDirection.push(1)
            this.listXDirection.push(-1)
            this.listYDirection.push(-1)
        }
    }
    this.findAvailableMovePosition = function findAvailableMovePosition() {
        this.addListsDirection()
        let availableMoveX = []
        let availableMoveY = []
        let availableKillX = []
        let availableKillY = []
        let flagHasPieceFirst = false
        for (let i = 0; i < this.listXDirection.length; i++) {
            if (x + this.listXDirection[i] >= 0 && x + this.listXDirection[i] < chessBoard.col && y + this.listYDirection[i] >= 0 && y + this.listYDirection[i] < chessBoard.col) {
                let squareElement = chessBoard.rows[x + this.listXDirection[i]][y + this.listYDirection[i]]
                if(!squareElement.hasChildNodes() && !flagHasPieceFirst) {
                    if(i < this.listXDirection.length - 2) {
                        availableMoveX.push(this.listXDirection[i])
                        availableMoveY.push(this.listYDirection[i])
                    }
                }
                else {
                    flagHasPieceFirst = true
                }

                if(i >= this.listXDirection.length - 2 && squareElement.hasChildNodes() && squareElement.firstChild.attributes.data.color != color) {
                    availableKillX.push(this.listXDirection[i])
                    availableKillY.push(this.listYDirection[i])
                }
            }
        }
        this.renderAvailableMove(availableMoveX, availableMoveY)
        this.renderAvailableKill(availableKillX, availableKillY)
    }
}