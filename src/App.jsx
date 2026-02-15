import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoApp from './Comp'
import Display from './Malls'
import ShoppingCart from './Cart'
import Calculate from './Calculator'
import FlashingButton from './Color-change'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FlashingButton second={"red"} />
    </>
  )
}

export default App
