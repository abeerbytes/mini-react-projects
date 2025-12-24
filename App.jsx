


import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-2 tracking-tight">
            {count}
          </h1>
          <p className="text-white/80 text-lg">Current Count</p>
        </div>
        
        <div className="flex gap-4 justify-center">
          <button 
            onClick={() => setCount(count - 1)}
            className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-8 rounded-xl backdrop-blur-sm border border-white/30 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
          >
            Decrement
          </button>
          
          <button 
            onClick={() => setCount(count + 1)}
            className="bg-white text-purple-600 hover:bg-purple-50 font-semibold py-3 px-8 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
          >
            Increment
          </button>
        </div>
        
        {count !== 0 && (
          <button 
            onClick={() => setCount(0)}
            className="mt-6 w-full bg-red-500/20 hover:bg-red-500/30 text-white font-medium py-2 px-4 rounded-lg backdrop-blur-sm border border-red-400/30 transition-all duration-200"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  )
}

export default App