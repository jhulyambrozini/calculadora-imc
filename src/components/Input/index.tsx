import { SetStateAction, Dispatch } from 'react'

import './styles.css'

type Props = {
  value: number
  setVallue: Dispatch<SetStateAction<number>>
  labelText: string
}
const Input = ({ value, setVallue, labelText }: Props) => (
  <div>
    <label>{labelText}</label>
    <input
      type="number"
      onChange={(e) => setVallue(Number(e.target.value))}
      value={value}
      required
    />
  </div>
)

export default Input
