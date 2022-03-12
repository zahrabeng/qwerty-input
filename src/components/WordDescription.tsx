import { hasAVowel } from "../utils/hasAVowel"
import {isSpecialChar} from "../utils/isSpecialChar"
import hasStrongInput from "../utils/hasStrongInput"

interface WordDescriptionProps {
  wordToDescribe: string;
}

function WordDescription({ wordToDescribe }: WordDescriptionProps): JSX.Element {
  const hasAtLeastFiveCharacters = wordToDescribe.length > 5;
  const containsAVowel = hasAVowel(wordToDescribe);
  const hasTheLetterQ = wordToDescribe.toLowerCase().match('q');
  const hasSpecialChar = isSpecialChar(wordToDescribe)
  const StrongInput = hasStrongInput(wordToDescribe) 

  return (
    <ul>
      {hasAtLeastFiveCharacters && <li>Has at least five characters</li>}
      {containsAVowel && <li>Contains a vowel</li>}
      {hasTheLetterQ && <li>Contains the letter Q</li>}
      {hasSpecialChar && <li>Contains special character</li>}
      {StrongInput && <li>Impressively strong input!</li>}
    </ul>
  )
}

export default WordDescription