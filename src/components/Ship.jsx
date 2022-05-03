import dots from './../img/ship_dots.svg';
import play from './../img/ship_play.svg';
import ship from './../img/ship.png';

function Ship() {
    return (
        <section className="ship"> 
        <div className="container">
            <div className="ship_demonstration">
                <div className="ship_demonstration_wrapper">
                    <div className="ship_demonstration_left">
                        <h4>Ultimate flight experience in high-end tech.</h4>
                        <a className="ship_button" href="https://www.space.com/spaceflight"><img src={dots} alt="#"/></a>
                        <a className="ship_button orange" href="https://www.youtube.com/watch?v=ScHI1cbkUv4&ab_channel=SpaceX"><img src={play} alt="#"/></a>
                    </div>
                    <div className="ship_demostration_right">
                        <img src={ship} alt="ship"/>
                        <div className="ship_demonstration_right-text">
                            <p>the vehicle</p>
                            <h5>re-l</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ship_info">
                <p>With SPACED, you can get a sense of high-end fast & safe space travelling. 
                Most of what space agencies consider to be long distance trips can be completed in one day.
                Consider how much time and money we were spending in the past to travel to another worlds.</p>
                <div>
                    <h4>The Deal?</h4>
                    <p>From Earth to various places starting at <span className="other_color">$2199</span>. We get
                    you anywhere and back <span className="other_color">safely</span> within solar system within 
                    <span className="other_color">1 day</span>. Pick your destination now.</p>
                </div>
            </div>
            <div className="ship_ref">
                <div className="ship_ref_container">
                    <hr/>
                </div>
                <a href="https://www.space.com/spaceflight">Learn more</a>
            </div>
        </div>
    </section>
    );
  }
  
  export default Ship;