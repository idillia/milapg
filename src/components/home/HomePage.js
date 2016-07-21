import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    const divStyle = {overflow: 'hidden', 'marginBottom': '5px'};
    return (
      <div> 
        <div id="home">
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
                  <a target="_blank" href=""> More...</a>
                </p>
              </div>
              <div className="col-sm-3 col-xs-6">
                <i className="glyphicon"><img src={require("./../../images/phr.png")}/></i>
                <h4>Poker Hand Recorder</h4>
                <p>App that allows to record and share poker hands.
                  <a target="_blank" href="http://milapg.com/phr"> More...</a>
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
        <div id="ideas" className="pad-section">
          <div className="container">
            <h2 className="text-center">Ideas</h2> <hr/>
          </div>  
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
              <ul>
                <li>Bla</li>
                <li>Bla</li>
                <li>Bla</li>
                <li>Bla</li>
              </ul>  
              </div>
            </div>
          </div>
        </div>

        



        <div id="mindmap" className="pad-section">
          <div className="container">
            <h2 className="text-center">Mind Map</h2> <hr />
          </div> 
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <p className="lead">
                <iframe width="600" height="400" frameBorder="0" src="https://www.mindmeister.com/maps/public_map_shell/424354541/mila?width=700&height=500&z=auto" scrolling="no" style={divStyle}>Your browser is not able to display frames. Please visit <a href="https://www.mindmeister.com/424354541/mila" target="_blank">Mila</a> on MindMeister.</iframe>
                </p>
              </div>
            </div>
          </div>
        </div>




      
        <footer>
          <hr />
          <div className="container">
            <p className="text-right">Copyright &copy; Mila Antonova 2016</p>
          </div>
        </footer>

      </div>  
    );
  }
}

export default HomePage;


// <iframe width="600" height="400" frameborder="0" src="https://www.mindmeister.com/maps/public_map_shell/424354541/mila?width=600&height=400&z=auto" scrolling="no" style="overflow: hidden; margin-bottom: 5px;">Your browser is not able to display frames. Please visit <a href="https://www.mindmeister.com/424354541/mila" target="_blank">Mila</a> on MindMeister.</iframe><div style="margin-bottom: 5px"><a href="https://www.mindmeister.com/424354541/mila" target="_blank">Mila</a> by <a href="https://www.mindmeister.com/users/channel/idillia" target="_blank">Mila Antonova</a></div>




  //       <div id="about" className="pad-section">
  //         <div className="container">
  //           <div className="row">
  //             <div className="col-sm-6">
  //               <img src="http://www.themistermen.co.uk/images/mrmen_uk/small.gif" alt="" />
  //             </div>
  //             <div className="col-sm-6 text-center">
  //               <h2>ABOUT ME</h2>
  //               <p className="lead">I like to do yoga, play musical instruments</p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       <div id="contact" className="pad-section">
  //         <div className="container">
  //           <div className="row">
  //             <div className="col-sm-12 text-center">
  //               <h3>Parallax scrolling effect is in action</h3>
  //               <h4>The next is the address on Google maps</h4>
  //             </div>
  //           </div>
  //         </div>
  //       </div>




       