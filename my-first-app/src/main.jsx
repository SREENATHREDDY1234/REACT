import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import App from "./App.jsx"
// import Hello from './practicehooks/spiderman.jsx'
// import Test from "./practicehooks/practice"
// import App from "./practicehooks/TodoList.jsx"
// import App from "./practicehooks/useeffect.jsx"
// import App from "./practicehooks/useContext.jsx"
// import App from "./practicehooks/useReducer.jsx"
// import App from "./practicehooks/useRef.jsx"
// import App from "./practicehooks/useMemo.jsx"
// import App from "./practicehooks/useCallback.jsx"


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)
