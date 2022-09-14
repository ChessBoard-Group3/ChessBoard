function Piece(x = 0, y = 0, color = "white", name, isAlive = true, image) {
    this.x = x
    this.y = y
    this.color = color;
    this.name = name;
    this.isAlive = isAlive;
    this.image = image;
    this.isSelected = false
    this.block = document.createElement("img")

    this.render = function render() {
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
            let squareElement = chessBoard.rows[positionX][positionY]
            if(this.isSelected) {
                if(squareElement.hasChildNodes() && squareElement.firstChild.attributes.data.color != this.color) {
                    squareElement.style.backgroundColor = "red"
                }
                else {
                    squareElement.style.backgroundColor = "#56d556"
                }
                squareElement.style.cursor = "pointer"
            }
            else {
                squareElement.style.backgroundColor = squareElement.attributes.data.color
                squareElement.style.cursor = "auto"
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
    this.block.addEventListener("click", clickHandle.bind(this))

    
}
function clickHandle() {    
    this.isSelected = !this.isSelected
    this.toggleAvailabeMoveChess()
}
