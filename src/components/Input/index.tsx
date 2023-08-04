import { SetStateAction, Dispatch } from 'react'
import './styles.css'

type Props = {
  value: string
  setVallue: Dispatch<SetStateAction<string>>
  labelText: string
}
const Input = ({ value, setVallue, labelText }: Props): JSX.Element => {
  const handleChange = ({ target }: any) => {
    setVallue(target.value)
  }
  return (
    <div>
      <label>{labelText}</label>
      <input min="0" type="number" onChange={handleChange} value={value} />
    </div>
  )
}

export default Input
