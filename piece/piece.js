function Piece(isWhite, name, isAlive = true, image) {
    this.isWhite = isWhite;
    this.name = name;
    this.isAlive = isAlive;
    this.image = image;
    this.block = document.createElement("img")

    this.render = function render() {
        this.block.setAttribute("src", this.image)
        this.block.className = "piece-image"
        this.block.style.cursor = "pointer"
        return this.block
    }
}