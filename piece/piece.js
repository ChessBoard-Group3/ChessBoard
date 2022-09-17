function Piece(x = 0, y = 0, color = "white", name, isAlive = true, image) {
    this.x = x
    this.y = y
    this.color = color;
    this.name = name;
    this.isAlive = isAlive;
    this.image = image;
    this.isSelected = false
    this.block = document.createElement("img")

    this.renderChess = function renderChess() {
        this.block.setAttribute("src", this.image)
        this.block.className = "piece-image"
        this.block.style.cursor = "pointer"
        this.block.attributes.data = this
        return this.block
    }

    this.renderAvailableMove = function renderAvailableMove(moveX, moveY) {
        for(let i = 0; i < moveX.length; i++) {
            let positionX = this.x + moveX[i]
            let positionY = this.y + moveY[i]
            let squareTemp = chessBoard.rows[positionX].squares[positionY]
            if(this.isSelected) {
                squareTemp.squareElement.style.backgroundColor = "#56d556"
                squareTemp.squareElement.style.cursor = "pointer"
            }
            else {
                squareTemp.squareElement.style.backgroundColor = squareTemp.color
                squareTemp.squareElement.style.cursor = "auto"
            }
        }
    }
    this.renderAvailableKill = function renderAvailableKill(moveX, moveY) {
        for(let i = 0; i < moveX.length; i++) {
            let positionX = this.x + moveX[i]
            let positionY = this.y + moveY[i]
            let squareTemp = chessBoard.rows[positionX].squares[positionY]
            if(this.isSelected) {
                squareTemp.squareElement.style.backgroundColor = "red"
                squareTemp.squareElement.style.cursor = "pointer"
            }
            else {
                squareTemp.squareElement.style.backgroundColor = squareTemp.color
                squareTemp.squareElement.style.cursor = "auto"
            }
        }
    }

    this.toggleAvailabeMoveChess = function toggleAvailabeMoveChess() {
        if(this.isSelected) {
            this.block.style.marginBottom = "20px"
        }
        else {
            this.block.style.marginBottom = "0"
        }
        this.findAvailableMovePosition()
    }
    this.block.addEventListener("click", selectChess.bind(this))

    
    
}
function selectChess() {    
    this.isSelected = !this.isSelected
    this.toggleAvailabeMoveChess()
}



