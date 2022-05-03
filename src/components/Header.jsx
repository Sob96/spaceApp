import { useContext, useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import { Popover, Button } from 'antd';
import Search from "./search/Search";

function Header() {
    let navigate = useNavigate();
    const location = useLocation();
    const { users, toggleElem, setToggleElem } = useContext(AppContext);
    const hamburgerBox = useRef();
    
    const closeMenu = () => {
      hamburgerBox.current.checked = false;
    }

      const signOut = () => {
        setToggleElem(false);
        localStorage.clear();
        navigate('/');
      }
        
      const content = (
        <div>
          <NavLink to="/user/">Your Orders</NavLink>
          <div><Button onClick={signOut}>Sign Out</Button></div>
        </div>
      );
      

    return (
      <>
        <header className={`header ${location.pathname === '/ship/' || location.pathname === '/planets/' || location.pathname === '/login/' || location.pathname ==='/search/' ? 'reverse_theme' : ''}`}>
        <div className="container">
            <div className="header_wrapper">
                <div className="header_appControl">
                    <nav className="header_hamburger">
                        <input ref={hamburgerBox} id="header_hamburger_toggle" type="checkbox" />
                        <label className={`header_hamburger_btn ${location.pathname === '/ship/' || location.pathname === '/planets/' || location.pathname === '/login/' || location.pathname === '/search/' ? 'reverse_color' : ''}`} htmlFor="header_hamburger_toggle">
                          <span></span>
                        </label>
                        <ul onClick={closeMenu} className="header_hamburger_box">
                            <li><Link className="header_hamburger_item" to="/">Main</Link></li>
                            <li><Link className="header_hamburger_item" to="/ship/">Ship</Link></li>
                            <li><Link className="header_hamburger_item" to="/planets/">Planets</Link></li>
                            <li><Link className="header_hamburger_item" to="/order/">Order</Link></li>
                        </ul>
                    </nav>
                    <span className="header_hamburger_space"></span>
                    <Search/>
                </div> 
                <span className={`header_logo ${location.pathname === '/ship/' || location.pathname === '/planets/' || location.pathname === '/login/' || location.pathname ==='/search/' ? 'reverse_color' : ''}`}></span>
                {!toggleElem ? <NavLink className={`header_login ${location.pathname === '/ship/' || location.pathname === '/planets/' || location.pathname === '/login/' || location.pathname === '/search/' ? 'reverse_color' : ''}`} style={({ isActive }) =>({color: isActive ? '#FFFFFF' : '#FFFFFF'})} to="/login/">Sign In</NavLink> :
                <Popover placement="bottom" className={`header_login ${location.pathname === '/ship/' || location.pathname === '/planets/' || location.pathname === '/login/' || location.pathname === '/search/' ? 'reverse_color' : ''}`} content={content} title="" trigger="click">{users[users.length - 1].login}</Popover>}
            </div>
        </div>
    </header>
      </>
       
    );
  }
  
  export default Header;