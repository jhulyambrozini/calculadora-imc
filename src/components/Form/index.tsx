import { SetStateAction, Dispatch } from 'react'
import './styles.css'

type Props = {
  children: JSX.Element | JSX.Element[]
  weight: string
  height: string
  setHeight: Dispatch<SetStateAction<string>>
  setWeight: Dispatch<SetStateAction<string>>
  setResult: Dispatch<SetStateAction<number | null>>
}

const Form = ({
  children,
  weight,
  height,
  setResult,
  setHeight,
  setWeight
}: Props): JSX.Element => {
  const calculateIMC = () => {
    const weightInKg = parseFloat(weight)
    const heightInMeters = parseFloat(height)

    if (!isNaN(weightInKg) && !isNaN(heightInMeters)) {
      const imc = weightInKg / (heightInMeters * heightInMeters)
      if (!isNaN(imc) && Math.sign(imc) === 1) {
        setResult(imc)
        setHeight('')
        setWeight('')
      } else {
        alert('Digite números válido')
      }
    } else {
      alert('Digite números válido')
      setResult(null)
    }
  }

  return (
    <div>
      {children}
      <button onClick={calculateIMC}>Calcular</button>
    </div>
  )
}

export default Form
