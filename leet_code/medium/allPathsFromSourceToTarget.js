/* 
https://leetcode.com/problems/all-paths-from-source-to-target/

Given a directed, acyclic graph of N nodes.  Find all possible paths from node 0 to node N-1, and return them in any order.

The graph is given as follows:  the nodes are 0, 1, ..., graph.length - 1.  graph[i] is a list of all nodes j for which the edge (i, j) exists.

Example:
Input: [[1,2], [3], [3], []] 
Output: [[0,1,3],[0,2,3]] 
Explanation: The graph looks like this:
0--->1
|    |
v    v
2--->3
There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
Note:

The number of nodes in the graph will be in the range [2, 15].
You can print different paths in any order, but you should keep the order of nodes inside one path.

*/

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
    const targetNode = graph.length - 1
    // DFT
    // create adjacencies
    const adj_list = new Map()
    graph.forEach((item, index) => adj_list.set(index, item))
    // const adj_list = graph.reduce((g, curr, ind) => {
    //     g.set(ind, curr)
    // }, new Map())
    // create stack
    const stack = [[0]]
    // track visited
    const visited = new Set()
    // track paths to last node in graph
    const pathsToLast = []
    while (stack.length) {
        // pop last path from stack
        const currentPath = stack.pop()
        // get last node in path
        const currentNode = currentPath[currentPath.length - 1]
        // check if currentPath is a path to target
        if (currentNode === targetNode) pathsToLast.push(currentPath)
        // check if  currentNode has been visited
        if (!visited.has(currentNode)) {
            // add node to visited
            visited.add(currentNode)
            // get all neighbors of current node and add to stack
            const neighbors = adj_list.get(currentNode)
            neighbors.forEach(neighbor => {
                stack.push([...currentPath, neighbor])
            })
        }


    }
    return pathsToLast
};

module.exports = allPathsSourceTarget

console.log((allPathsSourceTarget([[1, 2], [3], [3], []])))
console.log((allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]))) // expected [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]

