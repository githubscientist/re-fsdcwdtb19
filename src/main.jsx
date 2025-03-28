import { createRoot } from 'react-dom/client'
import './index.css'

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <p>Hello World, Thanks for visiting my Webpage!</p>
    </>
  )
}

createRoot(document.getElementById('root'))
  .render(<App />);
