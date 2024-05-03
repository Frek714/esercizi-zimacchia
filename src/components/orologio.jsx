import React, {useEffect, useState} from 'react';

const Orologio = (props) => {

  const [secondi, setSecondi] = useState(0)
  const [minuti, setMinuti] = useState(0)
  const [ore, setOre] = useState(0)
  const [millisecondi, setMillisecondi] = useState(1000)
  const [millisecondiApp, setMillisecondiApp] = useState(1000)

  useEffect(() => {
    setTimeout(() => {
      if(secondi < 59) {
        setSecondi(secondi+1)
      } else if(minuti < 59) {
        setSecondi(0)
        setMinuti(minuti+1)
      } else if(ore < 23) {
        setSecondi(0)
        setMinuti(0)
        setOre(ore+1)
      } else {
        setSecondi(0)
        setMinuti(0)
        setOre(0)
      }
    }, millisecondi)
  }, [secondi]);

  const handleChange = (event) => {
    setMillisecondiApp(event.target.value)
  }

  const handleClick = () => {
    setMillisecondi(millisecondiApp)
  }

  return(
    <div>
      <h1>Orologio</h1>
      <input type="number" value={millisecondiApp} onChange={handleChange}/>
      <button type="button" onClick={handleClick}>Cambia velocità</button>

      <div>
        <span>{ore}</span>
        <span>:</span>
        <span>{minuti}</span>
        <span>:</span>
        <span>{secondi}</span>
      </div>
    </div>
  )
}

export default Orologio;