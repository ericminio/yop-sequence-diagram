let drawCorner = (diagram, x, y)=>{
    diagram[x][y] = '+'
}
let drawHorizontalLine = (diagram, x, y)=>{
    diagram[x][y] = '-'
}
let drawVerticalLine = (diagram, x, y)=>{
    diagram[x][y] = '|'
}
let drawCorners = (component, diagram, x, y)=> {
    drawCorner(diagram, x, y)
    drawCorner(diagram, x, y+component.width-1)
    drawCorner(diagram, x+component.height-1, y)
    drawCorner(diagram, x+component.height-1, y+component.width-1)
}
let drawHorizontalLines = (diagram, x, startY, endY)=>{
    let from = startY <= endY ? startY : endY
    let to = startY <= endY ? endY : startY
    for (var j=from; j<=to; j++) {
        drawHorizontalLine(diagram, x, j)
    }
}
let drawVerticalLines = (diagram, startX, endX, y)=> {
    let from = startX <= endX ? startX : endX
    let to = startX <= endX ? endX : startX
    for (var i=from; i<=to; i++) {
        drawVerticalLine(diagram, i, y)
    }
}
let drawHorizontalBorder = (component, diagram, x, y)=>{
    drawHorizontalLines(diagram, x, y+1, y+component.width-2)
}
let drawVerticalBorder = (component, diagram, x, y)=>{
    drawVerticalLines(diagram, x+1, x+component.height-2, y)
}
let write = (text, diagram, x, y)=>{
    let letters = text.split('')
    for (var j=0;j<text.length; j++) {
        var c = letters[j]
        diagram[x][y+j] = c
    }
}

let drawBox = (component, diagram)=>{    
    let x = component.absolutePosition.row
    let y = component.absolutePosition.column
    drawCorners(component, diagram, x, y)
    drawHorizontalBorder(component, diagram, x, y)
    drawHorizontalBorder(component, diagram, x+component.height-1, y)
    drawVerticalBorder(component, diagram, x, y)
    drawVerticalBorder(component, diagram, x, y+component.width-1)
    write(component.name, diagram, x+1, y+2)
}
module.exports = {
    drawBox:drawBox,
    drawHorizontalLines:drawHorizontalLines,
    drawVerticalLines:drawVerticalLines,
    drawCorner:drawCorner
}