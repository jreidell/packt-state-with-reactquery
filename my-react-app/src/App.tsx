import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import ReducerCounter from './components/ReducerCounter'
import { CountContext } from './components/CountContext'

function App() {
  const [defaultCount, setCount] = useState(0)
  const { count, increment, decrement, reset } = useContext(CountContext);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((currentDefaultCount) => currentDefaultCount + 1)}>
          count is {defaultCount}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <h3>Counter with useState</h3>
        <p>
          <Counter />
        </p>
        <h3>Counter with useReducer</h3>
        <p>
          <ReducerCounter />
        </p>
        <h3>App With Counter Context</h3>
        <div className="App">
          <div>Counter: { count }</div>
          <div>
          <button onClick={increment}>+1</button>
          <button onClick={decrement}>-1</button>
          <button onClick={reset}>Reset</button>
          </div>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
