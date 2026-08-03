import "../App.css";
import handBorder from "../assets/ui/border/border-image.png";

function SketchBox({ children, className = "" }) {
  return (
    <section
      className={`sketch-box ${className}`}
      style={{ borderImageSource: `url(${handBorder})` }}
    >
      <div className="sketch-content">{children}</div>
    </section>
  );
}

export default SketchBox;