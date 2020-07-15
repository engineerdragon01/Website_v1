import React from 'react';
import NavBar from './components/navbar';
import Header from './components/header';
import AboutMe from './components/aboutme';
import Resume from './components/resume';
import Projects from './components/projects';
import Contact from './components/contact';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarOpen: false
    }
  }

  handleNavbar = () => {
    this.setState({
      navbarOpen: !this.state.navbarOpen
    })
  }

  render() {
    return (
      <div>
        <NavBar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
        <Header />
        <AboutMe />
        <Resume />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
