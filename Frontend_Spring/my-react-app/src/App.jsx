import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Update from "./pages/Update"

function App() {
  return <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/update" element={< Update />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App
