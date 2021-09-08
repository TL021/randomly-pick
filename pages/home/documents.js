import Header from '../../components/header/header'
import { useEffect, useState } from 'react'

export default function Documents() {
  const [number, setNumber] = useState(0)

  function handleClick() {
    setNumber(number+1)
  }
  
  useEffect(() => {
    setNumber(999)
  }, [])

  return (
    <>
      <Header/>
      <div onClick={handleClick}>Daily {number}</div>
    </>
  )
}