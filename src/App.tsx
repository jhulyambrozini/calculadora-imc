import { useState } from 'react'
import Input from './components/Input'
import Result from './components/Result'
import Table from './components/Table'
import Form from './components/Form'

import './App.css'

export default function App() {
  const [weight, setWeight] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)
  const [result, setResult] = useState<number>(0)

  return (
    <div className="App">
      <Form
        weight={weight}
        height={height}
        setWeight={setWeight}
        setHeight={setHeight}
        setResult={setResult}
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
      <Result result={result} />
      <Table />
    </div>
  )
}
