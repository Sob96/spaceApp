import { useContext } from "react";
import { AppContext } from "../../App";

function SearchPage() {
    const { planets } = useContext(AppContext);

    return (
        planets.map((planet, index) => (
                <section key={index} className={planet.name}>
                        <div className="container">
                            <div className={`${planet.name}_wrapper`}>
                                <div className={planet.info}>
                                    <h3>{planet.name}</h3>
                                    <p className={`${planet.info}_brief`}>{planet.brief}</p>
                                    <p className={`${planet.info}_text`}>{planet.text}</p>
                                    <div className={`${planet.info}_container`}>
                                        <hr/>
                                    </div>
                                </div>
                                <img src={planet.img} alt={planet.name}/>
                            </div>
                        </div>
                    </section>
        ))
    );
  }
  
  export default SearchPage;