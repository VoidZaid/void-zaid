import "./App.css";
import Layout from "./components/layout";

import Main from "./components/layout/main";
import Privacity from "./components/layout/privacity";
import Terms from "./components/layout/useTemrs";

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
