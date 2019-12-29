/* 
https://www.codewars.com/kata/backspaces-in-string/train/javascript

Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols. 
*/
function cleanString(s) {
  const regex = /\w?#/g
  return s.replace(regex, (match, offset) => {
    return ''
  })
}

module.exports = cleanString
