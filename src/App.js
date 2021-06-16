import './App.css';
import React from 'react';
import Nav from './components/Nav';
import About from './components/About'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {
    return (
        <>
            <Nav />
            <Hero />
            <About />
            <Skills />
            <Projects />
        </>
    );
}

export default App;
