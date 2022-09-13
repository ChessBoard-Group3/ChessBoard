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
            let movex = this.x + moveX[i]
            let movey = this.y + moveY[i]
            console.log([this.x + movex, this.y + movey])
            if(this.isSelected) {
                chessBoard.rows[movex][movey].style.backgroundColor = "#56d556"
                chessBoard.rows[movex][movey].style.cursor = "pointer"
            }
            else {
                chessBoard.rows[movex][movey].style.backgroundColor = chessBoard.rows[movex][movey].attributes.data.color
                chessBoard.rows[movex][movey].style.cursor = "auto"
            }
        }
    }

    this.toggleAvailabeMoveChess = function toggleAvailabeMoveChess() {
        if(this.isSelected) {
            this.block.style.marginBottom = "15px"
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
