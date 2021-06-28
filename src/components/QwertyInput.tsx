import { useState } from "react"
import WordDescription from './WordDescription';

function QwertyInput(): JSX.Element {
  const [text, setText] = useState('')

  const addLetter = (letter: string) => {
    setText(text + letter);
    // better: setText(prev => prev + letter);
  }

  return (
    <>
      <input
        value={text}
        readOnly /* see what happens if you remove this prop */
      />
      <button onClick={() => addLetter('Q')}>Q</button>
      <button onClick={() => addLetter('W')}>W</button>
      <button onClick={() => addLetter('E')}>E</button>
      <button onClick={() => addLetter('R')}>R</button>
      <button onClick={() => addLetter('T')}>T</button>
      <button onClick={() => addLetter('Y')}>Y</button>
      <button onClick={() => addLetter('U')}>U</button>
      <button onClick={() => addLetter('I')}>I</button>
      <button onClick={() => addLetter('O')}>O</button>
      <button onClick={() => addLetter('P')}>P</button>
      <WordDescription wordToDescribe={text} />
    </>
  )
}

export default QwertyInput;