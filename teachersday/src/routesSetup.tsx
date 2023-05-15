import { Routes, Route } from "react-router-dom"
import Letter from "./pages/letter"
import Main from "./pages/main"
export default function routesSetup() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/letter' element={<Letter />} />
    </Routes>
  )
}
