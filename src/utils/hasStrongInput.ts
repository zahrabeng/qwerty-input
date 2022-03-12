import { isSpecialChar } from "./isSpecialChar"

export default function hasStrongInput(words:string):boolean{
    let uppperCaseCount = 0
    let lowerCaseCount = 0
    let SpecialCharCount = 0

    if (words.length < 7){
        return false
    }

    for (const word of words){
        if (word === word.toUpperCase()){
            uppperCaseCount += 1
        } if (word === word.toLowerCase()){
            lowerCaseCount += 1
        } if (isSpecialChar(word)){
            SpecialCharCount += 1
        }
    } if (uppperCaseCount > 0 && lowerCaseCount > 0 && SpecialCharCount > 0){
        return true
    }else{
        return false
    }
}

