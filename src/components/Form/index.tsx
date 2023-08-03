import { SetStateAction, Dispatch } from 'react'
import './styles.css'

type Props = {
  children: JSX.Element | JSX.Element[]
  weight: number
  height: number
  setHeight: Dispatch<SetStateAction<number>>
  setResult: Dispatch<SetStateAction<number>>
  setWeight: Dispatch<SetStateAction<number>>
}

const Form = ({
  children,
  weight,
  height,
  setHeight,
  setResult,
  setWeight
}: Props) => {
  const calc = () => {
    const calcIMC = weight / (height * height)

    if (isNaN(calcIMC)) {
      alert('Campos inválidos')
    } else {
      setResult(calcIMC)
      setHeight(0)
      setWeight(0)
    }
  }

  return (
    <div>
      {children}
      <button onClick={calc}>Calcular</button>
    </div>
  )
}

export default Form
