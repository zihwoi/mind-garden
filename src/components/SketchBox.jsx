import "../App.css";
import handBorder from "../assets/ui/border/border-image.png";

function SketchBox({ children }) {
  return (
    <section
      className="sketch-box"
      style={{ borderImageSource: `url(${handBorder})` }}
    >
      <div className="sketch-content">{children}</div>
    </section>
  );
}

export default SketchBox;