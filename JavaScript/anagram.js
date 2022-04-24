// 242. Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// typically using all the original letters exactly once

/*
Explanation:

An anagram is a word that can be rearranged with the same letters to create another word.
Tac and Cat are an example of anagrams. My test cases for this leetcode problem include strings that are anagrams.
Another test case where the given strings are not anagrams. Other possible test cases to include in the future is
a test case where the given strings are an invalid input. I would also want to take into account a test case that checks
for upper and lowercase strings.

Our parameters includes string s and string t. By spliting both strings we can make an array of letters, a and b 
respectfully. These same arrays are then sorted using the sort js method. By creating a loop through each of the arrays 
at the same time to check to see if they match, if this is true return TRUE. If when looping the otherwise return FALSE.
While testing this program, the use of console logging came in handing to check that the arrays I created were successfully
sorted.
*/

let isAnagram = function(s, t) {
    let a = t.split("").sort()
    // console.log(a)
    let b = s.split("").sort()
    // console.log(b)

    for(let i = 0; i < a.length; i++){
        for(let i = 0; i < b.length; i++){
        console.log(a[i], b[i])
        if(a[i] != b[i])
            return false
        }  
    }
    return true

};


console.log(isAnagram("anagram","nagaram"))
console.log(isAnagram("rat", "car"))
console.log(isAnagram("cat", "tac"))