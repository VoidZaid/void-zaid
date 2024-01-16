import "./App.css";
import Layout from "./layout";

import Main from "./pages/main";
import Privacity from "./pages/privacity";
import Terms from "./pages/useTemrs";

import { Routes, Route, HashRouter } from "react-router-dom";
// BrowserRouter
function App() {
   return (
      <HashRouter>
         <Routes>
            <Route path="/" element={<Layout/>}>
               <Route index element={<Main/>}/>
               <Route path="terminos-de-uso" element={<Terms/>}/>
               <Route path="politica-privacidad" element={<Privacity/>}/>
            </Route>
         </Routes>
      </HashRouter>
   );
}

export default App;
