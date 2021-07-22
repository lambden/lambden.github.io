import * as React from "react"
// import { useLottie, useLottieInteractivity } from "lottie-react";
import Lottie from "lottie-react";
import lambAnimation from "../animations/lambAnimation.json";
import '../scss/main.scss';
import 'aos/dist/aos.css';
import logo from '../images/logo.png';
import CountUp from 'react-countup';

const options = {
  animationData: lambAnimation,
  loop: true,
  autoplay: true
};

// styles
const pageStyles = {
  color: "#232129",
  background: "linear-gradient(to left top, #58CF48, #ffffff)",//#58CF48",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const lottieStyle = {
  width: '100%',
  height: '50vh',
};

// markup
const IndexPage = () => {

  let AOS;
  React.useEffect(() => {
    const AOS = require("aos");
    AOS.init({
      once: true,
    });
  }, []);

  React.useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  const lottieRef = React.useRef();
  return (
    <main style={pageStyles}>
        <div className='titleSection' data-aos='fade-down'>
          LAMBden
          <img src={logo} className='logo-in-header'/>
        </div>
        <div className='subtitleSection' data-aos='fade-down' data-aos-delay='200'>
          The first actively deflationary token on the <a className="lamden-link" href="https://lamden.io" target="_blank">Lamden</a> Blockchain!
        </div>
        <div className='linksSection' data-aos='fade-up' data-aos-delay='800'>
          <button className="buy-button">Trade on RocketSwap</button>
        </div>
        <div className="lamb-jump-animation-wrapper" data-aos='fade-up' data-aos-delay='800'>
          {/* {LambAnimation} */}
          <Lottie lottieRef={lottieRef} animationData={lambAnimation} loop autoplay style={lottieStyle}/>
        </div>
        <div className="token-stats-wrapper flex-row space-between wrap">
          <div className="singular-stat-wrapper">
            <div className='stat-big'><CountUp end={696969} separator=","/></div>
            <div className='stat-subtitle'>Total Supply (the perfect amount of $LAMB.)</div>
          </div>
          <div className="singular-stat-wrapper">
            <div className='stat-big'><a className="tau-hq-link" target="_blank" href="https://www.tauhq.com/tokens/con_lambden_contract">Details</a></div>
            <div className='stat-subtitle'>Visit Tau HQ for Price, Charts, Market Cap, Sacrifice Count, and More!</div>
          </div>
          <div className="singular-stat-wrapper">
            <div className='stat-big'><CountUp end={1} separator="," suffix="%"/></div>
            <div className='stat-subtitle'>LAMBs sacrificed per transaction</div>
          </div>
        </div>
    </main>
  )
}

export default IndexPage
