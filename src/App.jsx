import { useState } from 'react'
import './App.css'
import SideBarPage from './assets/SideBarPage/SideBarPage'
import SpreadSheet from './assets/spreadsheet/SpreadSheet'
import {players, weeks, games,picks} from './database/data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SideBarPage weeks= {weeks} />
      <SpreadSheet players={players} games={games} picks={picks}  />
    </>
  )
}

export default App
