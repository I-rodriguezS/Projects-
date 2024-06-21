import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_PREFIX_URL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const threeFirstWord = fact.split(' ').slice(0, 3).join(' ')
        console.log(threeFirstWord)

        fetch(`https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&
          fontColor=red&`)
          .then(res => res.json())
          .then(response => {
            const { url } = response
            setImageUrl(url)
          })
      })
  }, [])

  return (
    <main>
      <h1>App de gato</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img scr={imageUrl} alt={`negao bc ${fact}`} />}
    </main>
  )
}

// const firstWord = fact.split(' ').slice(0, 3).join(' ')
// console.log(firstWord)
