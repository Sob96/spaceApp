import { NavLink } from 'react-router-dom';

function Main() {
    return (
        <section className="promo">
        <div className="container">
            <div className="promo_wrapper">
                <p> To space and back, safely.</p>
                <div className="promo_text">
                    <h3 className="promo_headline">moon</h3>
                    <p>new destination</p>
                </div> 
                <NavLink className="button_order" style={({ isActive }) =>({color: isActive ? '#FFFFFF' : '#FFFFFF'})} to="/order/">book <span className="button_order_arrow">→</span></NavLink>
            </div>
        </div>
    </section>
    );
  }
  
  export default Main;