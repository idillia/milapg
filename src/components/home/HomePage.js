import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
// import waypoints from 'waypoints';

class HomePage extends React.Component {
  render() {
    // $(document).ready(function() {
  $("a").each(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname
    && this.hash.replace(/#/,'') ) {
      let $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
      let $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
        if ($target) {
          var targetOffset = $target.offset().top;

          $(this).click(function() {
            $("#nav li a").removeClass("active");
            $(this).addClass('active');
            $('html, body').animate({scrollTop: targetOffset}, 1000);
            return false;
          });
        }
    }
  });

// });
    return (
      <div> 
        <div id="slide1">
          <div className="content">
            <div id="christmas_tree"> </div>
            <h1>Title</h1>
          </div> 
        </div> 

        <div id="slide2">
          <div className="content" >
            <div className="quotes_container">
              <h3 className="quotes">“The Kyey se (“kyeezee”) gong is also sometimes called the “Burmese bell”. It is a flat, triangular solid brass gong which appears in many ensemble performances in different shapes and sizes. It can also be found in ceremonial use in temples, or even with monks when they walk down the streets in the morning to beg for alms.”</h3>
            </div> 
          </div> 
        </div> 
  
        <div id="slide3">
          <div className="content">
            <div className="quotes_container">
              <h3 className="quotes">“A wooden mallet is used to hit the gong on the left or right side of the triangle, so it starts spinning with high tempo and thus creates a vibrating sound. Depending on the size and the corner where it is hit, the pitch changes and it is famous for its long sustaining tone.
              Listen to the sound of the Kyey Se here:” </h3>
            </div> 
          </div> 
        </div> 
  
        <div id="slide4">
          <div className="content">
            <div className="quotes_container">
            <h3>This is slide 4</h3>
            </div> 
          </div> 
        </div> 

        <div id="slide5">
          <div className="content">
          <div id="copyright">Bla</div>  
          </div> 
        </div> 
      </div>  
    );
  }
}

export default HomePage;

