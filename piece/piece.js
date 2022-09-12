function Piece(isWhite, name, isAlive = true, image) {
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

    this.toggleAvailabeMoveChess = function toggleAvailabeMoveChess() {
        if(this.isSelected) {
            this.block.style.marginBottom = "10px"
            chessBoard.rows[0][4].style.backgroundColor = "green"
        }
        else {
            this.block.style.marginBottom = "0"
        }
    }
    this.block.addEventListener("click", clickHandle.bind(this))

    
}
function clickHandle() {    
    this.isSelected = !this.isSelected
    this.toggleAvailabeMoveChess()
}
