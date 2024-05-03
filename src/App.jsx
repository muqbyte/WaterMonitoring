import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginMobile from './components/MobilePhone/Login'
import AppRoutes from './routes/Index'
import TrendChart from './components/Chart/TrendChart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppRoutes/>
      {/* <TrendChart/> */}
    </>
  )
}

export default App
