export default function isSpecialChar(word: string){
    const specialChars = ["#" , "!", "?"]
    for (const char of word){
        if (specialChars.includes(char)){
            return true
        }else{
            return false
        }
    }

}