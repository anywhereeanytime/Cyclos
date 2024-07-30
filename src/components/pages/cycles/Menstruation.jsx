import "./../cycles/cycles.css";
import Button from "../../elements/button/Button";
import Marquee from "./../../elements/marquee/Marquee";

const Menstruation = () => {
  return (
    <main>
      <Marquee />
      <div className="flex">
        <h2 className="serif cycle-defenition">
          hmm... it seems like you’re in your{" "}
          <span className="cursive">menstruation phase!</span>
        </h2>
        <Button>learn more about this cycle!</Button>
        <p className="sans advice-section">
          Try self-analysis and course-correction.
        </p>
      </div>
      <div className="accordion-container">
        <Accordion items={accordionContent} />
      </div>
    </main>
  );
};

export default Menstruation;
