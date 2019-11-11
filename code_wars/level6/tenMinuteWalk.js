/* codewars level 6 : Take a Ten Minute Walk
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
*/

function isValidWalk(walk) {
  if (walk.length === 10) {
    const start = [0, 0]
    const end = [0, 0]
    walk.forEach(i => {
      switch (i) {
        case 'n':
          end[1]++
          break

        case 's':
          end[1]--
          break

        case 'w':
          end[0]--
          break

        case 'e':
          end[0]++
          break
      }
    })
    return JSON.stringify(end) == JSON.stringify(start)
  } else {
    return false
  }
}

module.exports = isValidWalk
