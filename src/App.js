import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Nav from './components/Nav';
import About from './components/About'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {
    return (
        <>
            {/* <Nav /> */}
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Switch>
                {/* routes below */}
                {/* <Route
                    exact
                    path="/"
                    component={Hero}
                />
                <Route
                    path="/about"
                    component={About}
                />
                <Route
                    path="/skills"
                    component={Skills}
                /> */}

            </Switch>

        </>
    );
}

export default App;
