import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import Planets from "../planets/Planets";

function Search() {
    const { setPlanets } = useContext(AppContext);
    let navigate = useNavigate();
    const location = useLocation();

    const  filter = (event) => {
        navigate('/search/');
        setPlanets(Planets.filter(
          planet => {
            return (
              planet.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
              planet.brief.toLowerCase().includes(event.target.value.toLowerCase()) ||
              planet.text.toLowerCase().includes(event.target.value.toLowerCase())
            );
          }
        ))
    } 

    return (
        <div className="header_search">
        <input onChange={filter} type="text" placeholder="Search.."/>
            <div className={`search insideMenu ${location.pathname === '/ship/' || location.pathname === '/planets/' || location.pathname === '/login/' || location.pathname === '/search/' ? 'reverse_color' : ''}`}></div>
        </div>
    )
}

export default Search;