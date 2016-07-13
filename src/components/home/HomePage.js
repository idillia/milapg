import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div> 
        <div id="home" className="my-container">
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
            <h2 className="text-center">Projects & Apps</h2> <hr />
            <div className="row text-center">
              <div className="col-sm-3 col-xs-6">
                <i className="glyphicon glyphicon-cloud"> </i>
                <h4>Burmese Bell Clock</h4>
                <p>Alows to set time via mobile app and when the time is right mallet will hit the bell. 
                  <a href="http://milapg.com/blog/burmese-bell-alarm-clock/">Read more...</a>
                </p>
              </div>
              <div className="col-sm-3 col-xs-6">
                <i className="glyphicon glyphicon-leaf"> </i>
                <h4>Wireless Door Bell</h4>
                <p>Bell attaches to the door from the inside. Piezo sensor can detect the knock and play a sound</p>
              </div>
              <div className="col-sm-3 col-xs-6">
                <i className="glyphicon glyphicon-phone-alt"> </i>
                <h4>Poker Hand Recorder</h4>
                <p>App that allows to record and share poker hands</p>
              </div>
              <div className="col-sm-3 col-xs-6">
                <i className="glyphicon glyphicon-bullhorn"> </i>
                <h4>EasyBridgeOnline</h4>
                <p>Platform to learn Contract Bridge</p>
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

  // <div id="information" className="pad-section">
  //         <div className="container">
  //           <div className="row">
  //             <div className="col-sm-6">
  //               <div className="panel panel-default">
  //                 <div className="panel-heading">
  //                   <h2 className="panel-title">Additional information</h2>
  //                 </div>
  //                 <div className="panel-body lead">
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="col-sm-6">
  //               <div className="panel panel-default">
  //                 <div className="panel-heading">
  //                   <h2 className="panel-title">Additional information</h2>
  //                 </div>
  //                 <div className="panel-body lead">
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>


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


       