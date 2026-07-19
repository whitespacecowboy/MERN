import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import Counter from './Counter3'
// import Counter from './Counter1'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <App/>
  </StrictMode>
)
