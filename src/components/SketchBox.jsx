import "../App.css";

import borderTop from "../assets/ui/border/border-top.png";
import borderBottom from "../assets/ui/border/border-bottom.png";
import borderLeft from "../assets/ui/border/border-left.png";
import borderRight from "../assets/ui/border/border-right.png";

import curveOne from "../assets/ui/dividers/curve-one.png";
import curveTwo from "../assets/ui/dividers/curve-two.png";
import curveThree from "../assets/ui/dividers/curve-three.png";
import curveFour from "../assets/ui/dividers/curve-four.png";

function SketchBox({ children }) {
  return (
    <section className="sketch-box">
      <div className="sketch-border" aria-hidden="true">
        {/* four sides */}
        <img className="sketch-top" src={borderTop} alt="" />
        <img className="sketch-bottom" src={borderBottom} alt="" />
        <img className="sketch-left" src={borderLeft} alt="" />
        <img className="sketch-right" src={borderRight} alt="" />

        {/* four corners */}
        <img className="sketch-corner sketch-corner-tl" src={curveTwo} alt="" />
        <img className="sketch-corner sketch-corner-tr" src={curveOne} alt="" />
        <img className="sketch-corner sketch-corner-bl" src={curveThree} alt="" />
        <img className="sketch-corner sketch-corner-br" src={curveFour} alt="" />
      </div>

      <div className="sketch-content">
        {children}
      </div>
    </section>
  );
}

export default SketchBox;