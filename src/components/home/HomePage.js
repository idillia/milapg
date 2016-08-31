import React from 'react';
import {Link} from 'react-router';
import Radium from 'radium';

import mediaQueries from '../common/mediaQueries.js';


class HomePage extends React.Component {
  render() {
    const bulbImg = require("./../../images/bulb_right_cut_down.jpg");
    const worldmapImg = require("./../../images/worldmap_west.jpg");
    
    const divStyle = {overflow: 'hidden', 'marginBottom': '5px', border: "5px solid white"};

     const styles = {
        [mediaQueries.breakpointSmall]: {
          idea: {
            'backgroundImages': "url(" + bulbImg + ")",
            'backgroundSize': 'cover'
          },
          home: {
          }
      }
    };
    
    const hideOnPhone = {[mediaQueries.breakpointSmall]: {
        display: 'none'
      }
    };
    const hideOnBigScreen = {[mediaQueries.breakpointLarge]: {
        display: 'none'
      }
    };

    return (
      <div> 
        <div id="home" style={styles[mediaQueries.breakpointSmall].home}>
          <div className="tb">
            <div className="tb-cell">
              <div className="text-vcenter">
                <h1>Mila Antonova</h1>
                <div className="header-social">
                  <ul>
                  <li><a href="https://github.com/idillia"><i className="fa fa-github"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/milaantonova"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="mailto:mila.antonova@gmail.com"><i className="fa fa-envelope-o"></i></a></li>
                  <li><a href="blog"><i className="fa fa-pencil"></i></a></li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="projects" className="pad-section">
          <div className="container">
            <h2 className="text-center">Projects & Apps</h2> <hr/>
            <div className="row text-center">
              <div className="col-sm-3 col-xs-6">
                <i className="glyphicon"><img src={require("./../../images/kyeezee.png")}/></i>
                <h4>Burma Bell Clock</h4>
                <p>Alows to set time via mobile app and when the time is right mallet will hit the bell. 
                  <a target="_blank" href="http://milapg.com/blog/burmese-bell-alarm-clock/"> More...</a>
                </p>
              </div>
              <div className="col-sm-3 col-xs-6">
                <i className="glyphicon"><img src={require("./../../images/doorbell_res.png")}/></i>
                <h4>Wireless Door Bell</h4>
                <p>Bell attaches to the door from the inside. Piezo sensor can detect the knock and play a sound.
                  <a target="_blank" href="http://milapg.com/blog/wireless-door-bell/"> More...</a>
                </p>
              </div>
              <div className="col-sm-3 col-xs-6">
                <i className="glyphicon"><img src={require("./../../images/phr.png")}/></i>
                <h4>Poker Hand Recorder</h4>
                <p>App that allows to record and share poker hands.
                  <a target="_blank" href="http://milapg.com/phr"></a>
                </p>  
              </div>
              <div className="col-sm-3 col-xs-6">
                <i className="glyphicon"><img src={require("./../../images/ebo.png")}/></i>
                <h4>Easy Bridge Online</h4>
                <p>Platform to learn Contract Bridge.
                  <a target="_blank" href="http://easybridgeonline.com/"> More...</a>
                </p>
              </div>
            </div>
          </div>
        </div>

  
        <footer>
          <div className="container">
            <p className="text-right no-margin">Copyright &copy; Mila Antonova 2016</p>
          </div>
        </footer>

      </div>  
    );
  }
}

export default Radium(HomePage);


