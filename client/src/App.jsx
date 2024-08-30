import { Routes, Route } from 'react-router-dom'
import './App.css'

import { DatabaseInfo } from './components/DatabaseInfo/DatabaseInfo'

import { Aside } from "./components/Aside/Aside"
import { Header } from "./components/Header/Header"
function App() {

  return (
    <>
		<div className="app">
			<Aside/>
			<div className="home">
				<Header/>

				<Routes>
					<Route path='/databaseInfo' element={<DatabaseInfo/>} />
				</Routes>
			</div>
		</div>

    </>
  )
}

export default App
