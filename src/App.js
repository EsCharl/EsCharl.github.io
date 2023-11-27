import React from 'react';

import './App.css';
import linkedin from './images/linkedin.png'
import github from './images/github.png'

const imageLocation = [{name: "QRGen", location: require("./images/QRGen.png"), details: "QR Generator: \nCreated an android app using Android Studio and Java to display QR codes based on a URL link provided to reduce the printing of paper for sharing CV or this website to showcase my skillset."},
{name: "CBMW", location:require("./images/CBMW.png"), details:"My First Hackaton: \n Created an website that helps with cost of living crisis, food waste, and information on how to build a good credit score"}, 
{name: "dissertation", location: require("./images/game_image.png"), details: "Dissertation: \nCreated a snake game environment with multiple different path finding algorithms and one trained model using evolutionary algorithm and supervised learning methodology."},
{name: "Unity", location: require("./images/Unity.png"), details: "CSS Workshop: \nCreated a Unity 2D endless runner game for a Unity game development workshop in a group effort as a volunteer in the Computer Science Society."}
];

function FadeInSection({tmp}) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>{tmp}</div>
  );
}

function Footer(){
  return(
    <footer class="end">
        <improvements>
            This website is developed with GitHub Pages, and still work in progress as a pet project.
            <br/>
            <br/>
            Please do feel free to drop a message in my LinkedIn for improvement ideas in this website.
        </improvements>
        
        <contact>
            Connect with me
            <br/>
            <a href="https://www.linkedin.com/in/chang-yung-leong/">
                <img class="linkedin" src={linkedin} alt="linkedin"/>
            </a>
            <a href="https://github.com/EsCharl">
                <img class="github" src={github} alt="github"/>
            </a>
        </contact>
    </footer>
  );
}

export default function App() {

  // this is for the main image section
  const holder = [];
  let tmp = [];
  for (let i = 0; i < imageLocation.length; i++){
    tmp = [];
    if (i % 2 == 0){
      tmp.push(
        <div className='internal'>
          <div><img src= {imageLocation[i].location} alt={imageLocation[i].name}/></div>
          <div><p>{imageLocation[i].details}</p></div>
        </div>
      )
      holder.push(<FadeInSection tmp={tmp}/>);
    }else{
      tmp.push(
        <div className='internal'>
          <div><p style={{textAlign:"right"}}>{imageLocation[i].details}</p></div>
          <div style={{textAlign:"right"}}><img src= {imageLocation[i].location} alt={imageLocation[i].name}/></div>
        </div>
      )
      holder.push(<FadeInSection tmp={tmp}/>);
    }
    holder.push(<br/>);
  }
  return (
    <body>
    <div class = "container">
      <header class="title"> 
        <h1 class="name">CHARLES LEONG</h1>
        <h4 class="address">24, M, He/Him/His</h4>
        <h7 class="about_me">A first-class graduate from University of Nottingham with a BSc Computer Science with Artificial Intelligence.</h7>
      </header>
      <hr/>
      <header class="skills_experiences">
        <h1>Experiences & Skills</h1>
        <h4>Event Manager Sept 2021 - June 2022</h4>
        <h7>Hosted multiple workshops which includes programming in C and Python, Game development and inspirational talks for students from multiple different education fields to explore the usage of technology and career planning ideas.</h7>
        <br/>
        
        <h4>Administrative Specialist March 2018 - April 2018</h4>
        <h7>Automated the billing system, which reduced human intervention and likelihood of miscalculating the total cost of services.</h7>
        <br/>
        
        <h4>Programming Languages</h4>
        <h7>Python, Java, C, Javascript, SQL, MATLAB, C#</h7>
        <br/>

        <h4>Stylesheet Language</h4>
        <h7>CSS</h7>
        <br/>

        <h4>Markup Language</h4>
        <h7>HTML</h7>
        <br/>
      </header>
      <hr/>
          
      <header class="images_section">
        <h1>Sample Works</h1>
        <br/>
        <section className="App">
          {holder}
        </section>
      </header>
            
    
  </div>
  <Footer/>
  </body>
  );
}
