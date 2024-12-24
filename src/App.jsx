import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Callback from "./pages/Callback";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oauth" element={<Callback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
