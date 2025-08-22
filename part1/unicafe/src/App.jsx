import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({ text, value }) => <div>{text} {value}</div>

const Statistics = ({ good, neutral, bad, total, points }) => {
  if (total === 0) {
    return <div>No feedback given</div>
  }

  return (
    <div>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={total} />
      <StatisticLine text='average' value={points/total}/>
      <StatisticLine text='positive' value={`${(good / total) * 100} %`} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [points, setPoints] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    setTotal(total + 1);
    setPoints(points + 1)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotal(total + 1);
    setPoints(points)
  }

  const handleBadClick = () => {
    const updatedBad =  bad + 1;
    setBad(updatedBad);
    setTotal(total + 1);
    setPoints(points - 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button  onClick={handleBadClick} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} points={points} />
    </div>
  )
}

export default App