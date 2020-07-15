import React from 'react';
import '../App.css'

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <section className="about">
          <div>
            <div>
              <h1>Here's A Little About Me</h1>
            </div>
            <div style={{backgroundColor: 'white'}}>
              <div>
                {/* Find profile picture to put here */}
              </div>
              <p style={{color: '#808080'}}>
                Hi there! My name is Adam and I'm a Bioengineering major at UC Berkeley
                with a passion for Full Stack Web Development, UX Design,
                and Computer Science. After being introduced to Computer Science by
                my mentors at Google, I've been relentlessly practicing
                and learning to build my programming and development
                skills. What I lack in experience, I make up for with a determination and
                passion to learn. If I don't know how to do what you ask
                of me, I'll tell you "I don't know..., but I'll learn how."
              </p>
              <p>
                When I'm not on my laptop, I enjoy painting, running, and gaming.
              </p>
              <h1>TL;DR</h1>
              {/* short icon box-list goes here */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AboutMe;
