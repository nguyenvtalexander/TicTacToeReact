import { X, O } from "../constants"

const Cell = ({ id, cell, setCells, go, setGo, cells, winMes }) => {
    
    const handleClick = e => {
        const taken = e.target.firstChild.classList.contains(X) ||
            e.target.firstChild.classList.contains(O)
        
        if (!taken) {
            if (go === X) {
                e.target.firstChild.classList.add(X)
                setGo(O)
                handleCellChange(X)
            } else if (go === O) {
                e.target.firstChild.classList.add(O)
                setGo(X)
                handleCellChange(O)
            }
        }
    }

    const handleCellChange = className => {
        const newCells = cells.map((cell, idx) => {
            if (idx === id) {
                return className
            } else {
                return cell
            }
        })

        setCells(newCells)
    }

    return (
        <div className='square' id={id} cell={cell} onClick={!winMes ? handleClick : undefined}>
            <div className={cell}/>
        </div>
    )
}

export default Cell
