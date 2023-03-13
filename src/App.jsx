import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const proficiencies = [
    'HTML/CSS/Git',
    'JavaScript',
    'Bootstrap',
    'The DOM',
    'APIs',
    'JQuery',
    'JSON',
    'AJAX',
    'Team collaboration',
    'Agile development',
    'Project demonstration and storytelling',
    'Node',
    'ES6',
    'Object-oriented programming',
    'Express',
    'MySQL',
    'MVC paradigm',
    'Sequelize',
    'Testing',
    'Agile development',
    'Team collaboration',
    'Agile development',
    'Project demonstration and storytelling',
    'Progressive Web Apps',
    'React',
    'NoSQL',
    'MERN Stack',
    'Computer science fundamentals'
  ];

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <AboutMe />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/resume">
              <Resume proficiencies={proficiencies} />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
