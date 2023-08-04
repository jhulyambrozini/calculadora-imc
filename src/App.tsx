import { useState } from 'react'
import Input from './components/Input'
import Table from './components/Table'
import Form from './components/Form'

import './App.css'

export default function App() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [result, setResult] = useState<number | null>(null)

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>

      <Form
        height={height}
        weight={weight}
        setResult={setResult}
        setWeight={setWeight}
        setHeight={setHeight}
      >
        <Input
          labelText="Digite um peso:"
          value={weight}
          setVallue={setWeight}
        />
        <Input
          labelText="Digite uma altura:"
          value={height}
          setVallue={setHeight}
        />
      </Form>
      {result !== null && <p>Seu IMC é: {result.toFixed(2)}</p>}
      <Table />
    </div>
  )
}
