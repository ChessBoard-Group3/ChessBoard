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

    this.toggleAvailabeMoveChess = function toggleAvailabeMoveChess() {
        if(this.isSelected) {
            this.block.style.marginBottom = "20px"
        }
        else {
            this.block.style.marginBottom = "0"
        }
        
    }

    this.block.addEventListener("click", selectChess.bind(this))
}
function selectChess() {
    if (this.block.parentElement.style.backgroundColor == SquareColor.Red) {
        chessBoard.deleteChess(this.block.parentElement)
    }
    else {
        if(chessBoard.currentPieceMove[0] != this && chessBoard.currentPieceMove[0] && chessBoard.currentPieceMove[0].isSelected) {
            chessBoard.currentPieceMove[0].isSelected = false
            chessBoard.currentPieceMove[0].toggleAvailabeMoveChess()
            chessBoard.currentPieceMove[0].findAvailableMovePosition()
        } 
        chessBoard.renderBoard()
        this.isSelected = !this.isSelected
        if (this.isSelected) {
            chessBoard.currentPieceMove.unshift(this)
        }
        this.toggleAvailabeMoveChess()
        this.findAvailableMovePosition()
        console.log(this)

    }
}