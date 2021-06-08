import './App.css';
import React from 'react';
import { Container } from '@material-ui/core';
import Nav from './components/Nav';
import About from './components/About'
import Skill from './components/Skill'
import Project from './components/Project'

function App() {
    return (
        <Container className="App">
            <Nav />
            <h1>My Portfolio</h1>
            <About />
            <Skill />
            <Project />
        </Container>
    );
}

export default App;
