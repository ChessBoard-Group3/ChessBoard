function Piece(x = 0, y = 0, isWhite = "white", name, isAlive = true, image) {
    this.x = x
    this.y = y
    this.isWhite = isWhite;
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

    this.renderAvailableMove = function renderAvailableMove() {
        
    }

    this.toggleAvailabeMoveChess = function toggleAvailabeMoveChess() {
        if(this.isSelected) {
            this.block.style.marginBottom = "15px"
            console.log([this.x, this.y])
            chessBoard.rows[this.x][this.y].style.backgroundColor = "green"
        }
        else {
            this.block.style.marginBottom = "0"
            chessBoard.rows[this.x][this.y].style.backgroundColor = chessBoard.rows[this.x][this.y].attributes.data.color
        }
    }
    this.block.addEventListener("click", clickHandle.bind(this))

    
}
function clickHandle() {    
    this.isSelected = !this.isSelected
    this.toggleAvailabeMoveChess()
    // this.renderMove()
}
