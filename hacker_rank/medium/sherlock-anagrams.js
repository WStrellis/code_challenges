/*
https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. Given a string, find the number of pairs of substrings of the string that are anagrams of each other.

input: string
output: int
*/

function sherlockAndAnagrams(s) {
    let position = 0
    const maxLength = Math.round(s.length / 2)
    let currentLength = 1
    const anagrams = new Map()
    while (currentLength <= maxLength) {
        //?
    }
    let anagramCount = 0
    for (let [k, v] of anagrams) {
        anagramCount += v
    }
    return anagramCount
}

module.exports = sherlockAndAnagrams
