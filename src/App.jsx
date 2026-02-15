import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoApp from './Comp'
import Display from './Malls'
import ShoppingCart from './Cart'
import Calculate from './Calculator'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Display />
    </>
  )
}

export default App
