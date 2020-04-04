/* 
    picture is an array of strings.
    each letter in the string represents a colored pixel.
    
*/

function strokesRequired(picture) {
    // track number of strokes required to recolor entire picture
    let strokes = 0

    function findUnvisited(p, visited) {
        //function to find unvisited cells
        let stringified = null
        outer: for (let y = 0; y < p.length; y++) {
            for (let x = 0; x < p[y].length; x++) {
                if (!visited.has(`[${y},${x}]`)) {
                    stringified = [y, x]
                    break outer
                }
            }
        }
        return stringified // return coordinates of first found unvisited cell or null
    }

    function getNeighbors(current, picture, visited) {
        // finds neighbor cells with same color
        const neighborCells = []
        let y = current[0]
        let x = current[1]
        //Check n
        if (y > 0) {
            if (
                picture[y - 1][x] === picture[y][x] &&
                !visited.has(`[${y - 1},${x}]`)
            ) {
                neighborCells.push([y - 1, x])
            }
        }
        //Check s
        if (y < picture.length - 1) {
            if (
                picture[y + 1][x] === picture[y][x] &&
                !visited.has(`[${y + 1},${x}]`)
            ) {
                neighborCells.push([y + 1, x])
            }
        }

        //Check e
        if (x > 0) {
            if (
                picture[y][x - 1] === picture[y][x] &&
                !visited.has(`[${y},${x - 1}]`)
            ) {
                neighborCells.push([y, x - 1])
            }
        }
        //Check w
        if (x < picture[0].length - 1) {
            if (
                picture[y][x + 1] === picture[y][x] &&
                !visited.has(`[${y},${x + 1}]`)
            ) {
                neighborCells.push([y, x + 1])
            }
        }

        return neighborCells
    }

    // store visited cells
    let visited = new Set()
    // create a stack for dft
    let stack = [[0, 0]]
    // initalize DFT current
    let current

    while (true) {
        current = stack.pop()
        if (!current) {
            // all adjacent cells of same color have been found.
            strokes++
            // find next cell that has not been visited and continue
            let unvisited = findUnvisited(picture, visited)
            if (unvisited) {
                current = unvisited
            } else {
                // all cells have been painted
                break
            }
        }
        // add current cell to visited
        visited.add(JSON.stringify(current))
        // get neighbors of current cell that are same color and add to stack
        stack = [...stack, ...getNeighbors(current, picture, visited)]
    }

    return strokes
}

module.exports = strokesRequired
