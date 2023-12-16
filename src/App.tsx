import "./App.css";
import Layout from "./components/layout";

import Main from "./components/layout/main";
import Privacity from "./components/layout/privacity";
import Terms from "./components/layout/useTemrs";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout/>}>
               <Route index element={<Main/>}/>
               <Route path="terminos-de-uso" element={<Terms/>}/>
               <Route path="politica-privacidad" element={<Privacity/>}/>
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
