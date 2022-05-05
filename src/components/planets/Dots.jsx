import Planets from "./Planets";

function Dots({ activeIndex, onclick }) {
  return (
    <div className="all-dots">
      {Planets.map((planet, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
}

export default Dots;