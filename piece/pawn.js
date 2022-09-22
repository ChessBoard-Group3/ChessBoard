function Pawn(x, y, color, isAlive = true) {
    this.x = x
    this.y = y
    const pieceName = "pawn"
    const pawnImage = color == "white" ? './image/white_pawn.png' : './image/black_pawn.png'
    
    Piece.call(this, x, y, color, pieceName, isAlive, pawnImage)
    this.addListsDirection = function addListsDirection() {
        if (color === 'white') {
            this.listXDirection = [1]
            this.listYDirection = [0]
            if(this.x === 1) {
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
            if(this.x === 6) {
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
            let positionX = this.x + this.listXDirection[i]
            let positionY = this.y + this.listYDirection[i]
            if (positionX >= 0 && positionX < chessBoard.col && positionY >= 0 && positionY < chessBoard.col) {
                let squareElement = chessBoard.rows[positionX].squares[positionY].squareElement
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