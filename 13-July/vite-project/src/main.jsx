import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Okay from './App.jsx'
const App = require("./App")

createRoot(document.getElementById('root')).render(
<<<<<<< Updated upstream
	<StrictMode>
		<Okay/>
	</StrictMode>
=======
  <StrictMode>
    <App/>
  </StrictMode>,
>>>>>>> Stashed changes
)
