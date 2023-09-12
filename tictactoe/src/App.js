import { useState, useEffect } from 'react'
import Cell from './components/cell'
import { X, O } from './constants'

const App = () => {
  const [cells, setCells] = useState(new Array(9).fill(''))
  const [go, setGo] = useState(X)
  const [winMes, setWinMes] = useState(null)

  const message = go + `'s turn`

  useEffect(() => {
    const checkScore = () => {
      const winLines = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
      ]
  
      winLines.forEach(arr => {
        const circleWin = arr.every(cell => cells[cell] === O)
        const crossWin = arr.every(cell => cells[cell] === X)
  
        if (circleWin) {
          setWinMes(O + ' Wins!')
        }
  
        if (crossWin) {
          setWinMes(X + ' Wins!')
        }
      })
    }

    checkScore()
  }, [cells])

  return (
    <div className='app'>
      <div className='gameboard'>
        {cells.map((cell, idx) => 
          <Cell 
            key={idx} 
            id={idx} 
            cell={cell} 
            setCells={setCells}
            go={go}
            setGo={setGo}
            cells={cells}
            winMes={winMes}/>)}
      </div>
      <p>{winMes || message}</p>
    </div>
  )
} 

export default App;
