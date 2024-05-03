import React, {useState} from 'react';

const OrologioZorio = (props) => {
  const [secondi, setSecondi] = useState(0)
  const [minuti, setMinuti] = useState(0)
  const [ore, setOre] = useState(0)

  const getOrologio = () => {
    setTimeout(() => {
      if (secondi < 59) {
        setSecondi(secondi + 1)
      } else if (minuti < 59) {
        setSecondi(0)
        setMinuti(minuti + 1)
      } else if (ore < 23) {
        setSecondi(0)
        setMinuti(0)
        setOre(ore + 1)
      } else {
        setSecondi(0)
        setMinuti(0)
        setOre(0)
      }
    }, 1000)

    return ore + ":" + minuti + ":" + secondi;
  }

  const getOraEsatta = () => {
    const date = new Date();
    const ore = date.getHours();
    const minuti = date.getMinutes();
    const secondi = date.getSeconds();

    return ((ore < 10) ? "0" + ore : ore) + ":" + ((minuti < 10) ? "0" + minuti : minuti) + ":" + ((secondi < 10) ? "0" + secondi : secondi)



    // return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  }

  return (
    <div>
      <h1>orologio zorio</h1>
      <span>{getOrologio()}</span>

      <h2>Soluzione 3 orologio zorio</h2>
      <span>{getOraEsatta()}</span>
    </div>
  )
}

export default OrologioZorio;