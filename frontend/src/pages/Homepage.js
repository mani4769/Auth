import React from 'react';
import './AstWebsite.css';

const AstWebsite = () => {
  return (
    <div>
      <nav>     
        <ul>
          <li><h2 style={{ marginLeft: '7%', marginTop: '20px' }}>AST</h2></li>
          <li><a href="astwebsite.html">HOME</a></li>
          <li><a href="selectattedence.html">ATTENDANCE</a></li>
          <li><a href="#features">FEATURES</a></li>
          <li className="dropdown">
            <a href="" className="dropbtn">MORE</a>
            <div className="dropdown-content">
              <a href="projects.html">Add Projects</a>
              <a href="software.html">Projects</a>
              <a href="#">Scrum Masters</a>
            </div>
          </li>
        </ul>
      </nav>
      <div className="name">
        <div className="first">
          <img src="Screenshot 2024-04-19 185720.png" alt="mani" style={{ marginLeft: '50vh', marginTop: '10%' }} />
        </div>  
        <div className="second">    
          <h1 style={{ marginLeft: '10%', width: '200%', marginTop: '10vh', fontSize: '70px', color: '#d38585', display: 'flex', flexDirection: 'row' }}>AS-TEAMS APP'S</h1>
        </div>
      </div>
      <br />
      <div className="images">
        <a href="exams.html">
          <img style={{ height: '32vh', marginLeft: '300px' }} src="exam.jpg" alt="mani" />
        </a>
        <a href="teamwork.html">
          <img style={{ height: '30vh', marginLeft: '17%', marginBottom: '10px' }} src="TeamworkSymbol.jpg" alt="mani2" />
        </a>
      </div>
      <br /><br /><br />
      <div className="container">
        <div id="attedance" className="attedence">
          <h3 style={{ color: 'purple', marginLeft: '250px', fontSize: '4vh', fontFamily: "'Courier New', Courier, monospace" }}>TECHNOLOGY ATTENDANCE</h3><br />
          <div className="TECHNOLOGYattedence1">
            <div className="TECHNOLOGYattedence2">  
              <ul>
                <li>22B91A4752</li><br />
                <li>22B91A4709</li><br />
                <li>22B91A4721</li><br />
                <li>22B91A4706</li><br />
                <li>22B91A47H6</li>
              </ul>
            </div> 
            <div className="TECHNOLOGYattedence3">
              <ul>
                <li>MANIKANATA</li><br />
                <li>VEERA VASU</li><br />
                <li>NIKHIL</li><br />
                <li>VEERABABU</li><br />
                <li>VENKATARAMANA</li>
              </ul>
            </div>
            <div className="TECHNOLOGYattedence3">
              <ul>
                <li>CIC</li><br />
                <li>ECE</li><br />
                <li>AIDS</li><br />
                <li>AIDS</li><br />
                <li>ECE</li>
              </ul>
            </div>
            <div className="TECHNOLOGYattedence3">
              <ul>
                <li>3</li><br />
                <li>3</li><br />
                <li>2</li><br />
                <li>3</li><br />
                <li>2</li>
              </ul>
            </div>
            <div className="TECHNOLOGYattedence3">
              <ul>
                <div className="TECHNOLOGYattedence3">
                  <ul>
                    <li><span className="fire-streak">1</span></li>
                    <li><span className="fire-streak">3</span></li>
                    <li><span className="fire-streak">2</span></li>
                    <li><span className="fire-streak">3</span></li>
                    <li><span className="fire-streak">2</span></li>
                  </ul>
                </div>
              </ul>
            </div>
          </div><br /><br /><br /><br /><br /><br />
        </div>
        <hr style={{ marginTop: '100px', height: '45vh', marginLeft: '2vh' }} />

        <div className="attedence">
          <h3 style={{ color: 'purple', marginLeft: '300px', fontSize: '4vh', fontFamily: "'Courier New', Courier, monospace" }}>SADANA ATTENDANCE</h3><br />
          <div className="TECHNOLOGYattedence1">
            <div className="TECHNOLOGYattedence2">  
              <ul>
                <li>22B91A47H6</li><br />
                <li>22B91A4706</li><br />
                <li>22B91A4721</li><br />
                <li>22B91A4709</li><br />
                <li>22B91A4752</li>
              </ul>
            </div> 
            <div className="TECHNOLOGYattedence3">
              <ul>
                <li>VENKATARAMANA</li><br />
                <li>VEERABABU</li><br />
                <li>NIKHIL</li><br />
                <li>VEERA VASU</li><br />
                <li>MANIKANATA</li>
              </ul>
            </div>
            <div className="TECHNOLOGYattedence3">
              <ul>
                <li>ECE</li><br />
                <li>AIDS</li><br />
                <li>AIDS</li><br />
                <li>ECE</li><br />
                <li>CIC</li>
              </ul>
            </div>
            <div className="TECHNOLOGYattedence3">
              <ul>
                <li>3</li><br />
                <li>3</li><br />
                <li>2</li><br />
                <li>3</li><br />
                <li>2</li>
              </ul>
            </div>
            <div className="TECHNOLOGYattedence3">
              <div className="TECHNOLOGYattedence3">
                <ul>
                  <li><span className="fire-streak">1</span></li>
                  <li><span className="fire-streak">3</span></li>
                  <li><span className="fire-streak">2</span></li>
                  <li><span className="fire-streak">3</span></li>
                  <li><span className="fire-streak">2</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div className="streaksheading">
        <div className="technology">
          <h3 style={{ color: 'rgb(231, 163, 163)', marginLeft: '20vh', fontSize: '2.1vh', fontFamily: 'sans-serif' }}>Top Five Members in Attedence Streaks</h3>
        </div> 
        <div className="technology2">
          <h3 style={{ color: 'rgb(231, 163, 163)', marginLeft: '70vh', fontFamily: 'sans-serif', fontSize: '2.1vh' }}>Top Five Members in Sadana streaks</h3> 
        </div> 
      </div>
      <br /><br /><br /><br /> 
      <div id="features">
        <div className="allprojects">
          <img src="Screenshot 2024-04-18 180026.png" alt="all projects" style={{ marginLeft: '14vh' }} />
          <h1 style={{ marginLeft: '15vh' }}>All Projects</h1>
          <p style={{ marginLeft: '13vh', fontSize: '20px', marginTop: '4vh' }}>Welcome to our comprehensive collection of projects from a diverse range of contributors. In this category, you'll find a vast array of innovative ideas, creative solutions, and practical applications across various domains. Dive in and explore the impressive work of our talented project creators, as they showcase their expertise and ingenuity in bringing their concepts to life.</p>
        </div> 
        
      </div>
    </div>
  );
};

export default AstWebsite;
