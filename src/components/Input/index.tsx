import { SetStateAction, Dispatch } from 'react'
import './styles.css'

type Props = {
  value: number
  setVallue: Dispatch<SetStateAction<number>>
  labelText: string
}

const Input = ({ value, setVallue, labelText }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(e.target.value)
    setVallue(inputValue)
  }

  return (
    <div>
      <label>{labelText}</label>
      <input type="number" onChange={handleChange} value={value} />
    </div>
  )
}

export default Input
