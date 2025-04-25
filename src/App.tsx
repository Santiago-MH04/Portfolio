import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="part1">
            <div className="introduction">
                <h2>I’m Santiago Marín Higuita</h2>
                Software developer from Medellín, Colombia.
                <div className="shortcuts">
                    <button className="hire-me-btn">
                      <img src="{Plus}" className="logo" alt="Plus" />
                      <p>Hire me</p>
                    </button>
                    <button className="hire-me-btn resume">
                      <img src="{Plus}" className="logo" alt="cv" />
                      <p>My CV</p>
                    </button>
                </div>
            </div>
            <div className="avatar">Aquí va la foto</div>
        </div>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
    </>
  )
}

export default App
