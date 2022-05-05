import Planets from "./Planets";

function SliderContent({ activeIndex}) {
    return (
        Planets.map((planet, index) => (
            <div key={index} className={index === activeIndex ? "slides active" : "inactive"}>
                <section className={planet.name}>
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
            </div>
        ))
    );
  }
  
  export default SliderContent;