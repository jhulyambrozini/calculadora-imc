type Props = {
  result: number
}

const Result = ({ result }: Props) => {
  return (
    <div>
      <p>Resultado: {result.toFixed(2)}</p>
    </div>
  )
}

export default Result
