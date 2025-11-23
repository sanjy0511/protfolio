import React, { useState } from 'react'

const WIN_ROWS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]



const Xoxo = () => {

    const[board,setBoard] = useState(Array(9).fill(null))
    const[xTurn, setXTurn] = useState(true)
    const[winner,setWinner] = useState(null)
    const[winningLine,setWinningLine] = useState([])
    const[scores,setScores] = useState({X:0,O:0,Draws:0})



    const checkWinner = (updateboard)=>{
        for (const[a,b,c] of WIN_ROWS){
            if (updateboard[a] && updateboard[a] === updateboard[b] && updateboard[a]===updateboard[c]){
                setWinningLine([a,b,c])
                return updateboard[a]
            }
        }

        if (updateboard.every((cell)=> cell != null)) return "draw";
        return null

    }

    const handleClick =(i)=>{
        if(board[i]||winner ) return

        const newBoard = [...board]
        newBoard[i] = xTurn ? "X" : "O"
        setBoard(newBoard)
        const result = checkWinner(newBoard)
        if (result){
            setWinner(result)
            if(result === "draw"){
                setScores((prev)=>({...prev,Draws:prev.Draws+1}))
            }else{
                setScores((prev)=>({...prev,[result]:prev[result]+1}))
            }
        }else{
        setXTurn(!xTurn)

        }
    }

    const resetGame = ()=>{
        setBoard(Array(9).fill(null))
        setXTurn(true)
        setWinner(null)
        setWinningLine([])
    }




  return (
    <div className='min-h-screen bg-gray-900 text-white flex flex-col items-center pt-10'>
        <h1 className='text-3xl font-bold mb-6'>XOXO Game</h1>

        <div className='flex gap-6 text-lg font-semibold mb-6'>
            <div className='bg-gray-800 px-4 py-2 rounded-lg'>X wins: {scores.X}</div>
            <div className='bg-gray-800 px-4 py-2 rounded-lg'>O wins: {scores.O}</div>
            <div className='bg-gray-800 px-4 py-2 rounded-lg'>Draws: {scores.Draws}</div>
        </div>

        <div className='grid grid-cols-3 gap-3 mb-6'>
            {board.map((value,index)=>{
                const isHighlighted = winningLine.includes(index)            

                return(
                <button key={index} onClick={()=>handleClick(index)} className={`w-24 h-24 rounded-lg text-4xl font-bold flex items-center justify-center transition ${
                    isHighlighted ? "bg-green-600 text-white animate-pulse" : "bg-gray-800 hover:bg-gray-700"
                }`}>
                    {value}
                </button>
            )})}
        </div>

        <div className='mb-4 text-xl'>
            {winner == "draw" ? "Game Draw!" : winner ? `Winner: ${winner}`: `Turn : ${xTurn ? "X":"O"}`}
        </div>

        <button onClick={resetGame} className='px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold mt-2'>Restart Game</button>


    </div>
  )
}

export default Xoxo