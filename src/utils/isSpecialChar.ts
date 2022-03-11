export function isSpecialChar(word: string):boolean|undefined{
    const specialChars = ["#" , "!", "?"]
    for (const char of word){
        if (specialChars.includes(char)){
            return true
        }else{
            return false
        }
    }
}