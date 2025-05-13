import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Home from "./pages/Home.tsx";
import ElClub from "./pages/ElClub.tsx";
import './assets/style/_app.scss';
import UnderConstruction from "./components/UnderConstruction.tsx";
import { useState } from "react";

function App() {
  const [showApp, setShowApp] = useState(true)

  return (
    <>
      {showApp ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="el-club" element={<ElClub />} />
              {/*<Route path="*" element={<PageNotFound />} />*/}
            </Route>
          </Routes>
        </BrowserRouter>
      ) : (
        <UnderConstruction setShowApp={setShowApp} />
      )}
    </>
  )
}

export default App
