// Given a string s consisting of words and spaces, return the length of the last word in the string
let s = " I'm living   in     my    dream  "
let splitOutput=s.trim().split(" ")
let lastWord=splitOutput[splitOutput.length-1]
console.log("length of the splited word: " +lastWord.length);
console.log("----------------------------------------------------------------")
/**Anagram or not */
function isAnagram(word1,word2) {
    const normalize= word =>
        word.toLowerCase()
            .replace(/[^a-zA-z0-9]/g,"")
            .split("")
            .sort()
            .join("")

    return normalize(word1) === normalize(word2)
}
console.log(isAnagram("Dormitory#$", "Dirty room#"));//true
console.log(isAnagram("Dormitory", "human&"));//false
console.log("----------------------------------------------------------------")