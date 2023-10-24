import { useState } from 'react';
import './App.css';
import Banner from './components/banner';
import Footer from './components/footer';
import Header from './components/header';


function App() {
    return (
        <>
            <Header/>
            <Banner/>
            <Footer/>
        </>
    )
}

export default App
