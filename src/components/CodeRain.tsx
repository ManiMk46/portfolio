import './CodeRain.scss'

const columns = ['0011', '1010', '0110', '0101', '1100', '1001']

export const CodeRain = () => {
  return (
    <div className="code-rain" aria-hidden="true">
      {columns.map((value, index) => (
        <div key={index} className="code-rain__column">
          <span>{value}</span>
        </div>
      ))}
    </div>
  )
}

