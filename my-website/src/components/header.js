import React from 'react';
import '../App.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.parallaxShift);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.parallaxShift);
  }

  parallaxShift = () => {
    this.setState({
      offset: window.pageYOffset
    })
  }

  render() {
    return (
      <header
        className="header-background"
        style={{ backgroundPositionY: this.state.offset}}
      >
        <section
          className="info-container"
          style={{ bottom: this.state.offset / 2 }}
        >
          <div className="titleText">
            <h1>Hi, I'm Adam</h1>
            <h3>Welcome To My Site</h3>
          </div>
        </section>
      </header>
    )
  }
}

export default Header;
