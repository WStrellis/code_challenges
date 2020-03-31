/* 
    picture is an array of strings.
    each letter in the string represents a colored pixel.
    
*/

function strokesRequired(picture) {
    // track number of strokes required to recolor entire picture
    let strokes = 0

    function findUnvisited(p, visited) {
        //function to find unvisited cells
        return // return coordinates of first found unvisited cell or null
    }

    function getNeighbors(current, picture) {
        // finds neighbor cells with same color
        const neighborCells = []
        //Check n
        //Check s
        //Check e
        //Check w
        return neighborCells
    }

    // store visited cells
    let visited = new Set()
    // create a stack for dft
    let stack = [[0, 0]]
    // initalize DFT current
    let current

    let running = true
    while (running) {
        current = stack.pop()
        if (!current) {
            // all adjacent cells of same color have been found.
            strokes++
            // find next cell that has not been visited and continue
            let unvisited = findUnvisited(picture, visited)
            if (unvisited) {
                current = unvisited
            } else {
                running = false
            }
        } else {
            // add current cell to visited
            // get neighbors of current cell that are same color and add to stack
        }
    }

    return strokes
}

module.exports = strokesRequired
