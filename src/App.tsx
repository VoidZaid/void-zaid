import { useState } from 'react';
import './App.css';
import Layout from './components/layout';
import Header from './components/header';
import Footer from './components/footer';


function App() {
    return (
        <>
            <Header/>
            <Layout/>
            <Footer/>
        </>
    )
}

export default App
