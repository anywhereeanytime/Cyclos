import "./../cycles/cycles.css";
import Button from "../../elements/button/Button";
import Marquee from "./../../elements/marquee/Marquee";

const Ovulation = () => {
  return (
    <main>
      <Marquee />
      <div className="flex">
        <h2 className="serif cycle-defenition">
          hmm... it seems like you’re in your{" "}
          <span className="cursive">ovulation phase!</span>
        </h2>
        <Button>learn more about this cycle!</Button>
        <p className="sans advice-section">
          Cultivate strong social connections and engage in activities that
          promote relaxation and joy. Continuous learning and personal
          development are essential, so set goals and seek opportunities to
          acquire new skills and knowledge. Prioritize self-care, mindfulness,
          and reflection to stay grounded and maintain mental and emotional
          health.ned energy.
        </p>
      </div>
      <div className="accordion-container">
        <Accordion items={accordionContent} />
      </div>
    </main>
  );
};

export default Ovulation;
