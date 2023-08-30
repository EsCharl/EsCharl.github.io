import React from 'react';
import ReactDOM from 'react-dom';

const imageLocation = [{name: "CBMW", location:"./images/CBMW.png", details:"My First Hackaton: \n Created an website that helps with cost of living crisis and information about the users credit score"}, {name: "dissertation", location: "./images/game_image.png", details: "Dissertation: \ncreated a snake game environment with multiple different path finding algorithms and one trained model using evolutionary algorithm and supervised learning methodology."}];

function FadeInSection() {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef} />
  );
}

function App() {
  return (
    <div className="App">
      {imageLocation.map(x => (
        <FadeInSection>
          <div classname={x.name}>
            <div><img src= {x.location} alt={x.name}/></div>
            <div><p>{x.details}</p></div>
          </div>
        </FadeInSection>
      ))}
    </div>
  );
}

const rootElement = document.querySelector('.images_section');
ReactDOM.render(<App />, rootElement);
