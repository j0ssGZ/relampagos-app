import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./assets/style/_app.scss"
import Layout from "./components/Layout.tsx";
import Home from "./pages/Home.tsx";
import ElClub from "./pages/ElClub.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="el-club" element={<ElClub />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
