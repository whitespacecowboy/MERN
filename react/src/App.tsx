// import { useState } from 'react'
import type React from 'react'
// import './App.css'

// import HelloC from './components/hello_c'
// import HelloF from './components/hello_f'
// import collages from './data/collages.json'

import Header from './components/Header'
import Food from './components/Food'
import Footer from './components/Footer'
import Button from './components/Button'

function App(): React.JSX.Element {
	return (
		<>
		<Header/>
		<Food></Food>
		<Button></Button>
		<Footer></Footer>
		</>
	)
}

export default App
