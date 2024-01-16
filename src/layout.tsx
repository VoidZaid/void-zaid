// import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
// import BgCircle from "./bg_effect/bg_circle";
// import BgColor from "./bg_effect/bg_color";


import { Outlet } from "react-router-dom";
//IMG



const Layout = () => {
   return (
      <div className="relative">
         <Header />
         <main className="lg:relative lg:bg-cyan-900 lg:text-base lg:pb-16 font-openSans">
            {/* <BgCircle
               className="hidden lg:z-0 lg:block lg:ml-auto lg:w-2/3"
               classFather="hidden lg:block"
            />
            <BgColor className="hidden lg:block" /> */}
            <Outlet></Outlet>
         </main>
         <Footer />
      </div>
   );
};

export default Layout;
