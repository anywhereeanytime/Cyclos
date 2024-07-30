import "./../cycles/cycles.css";
import Button from "../../elements/button/Button";
import Marquee from "./../../elements/marquee/Marquee";

const Luteal = () => {
  return (
    <main>
      <Marquee />
      <div className="flex">
        <h2 className="serif cycle-defenition">
          hmm... it seems like you’re in your{" "}
          <span className="cursive">luteal phase!</span>
        </h2>
        <Button>learn more about this cycle!</Button>
        <p className="sans advice-section">
          Awareness, attention, and comfort are key now. Your energy begins to
          soften and turn inward. You’ll notice that you have the desire to
          nest, making the luteal phase an ideal time to take care of domestic
          chores, whether your list includes reorganizing your shoe closet,
          doing a month’s worth of laundry, or making a big grocery-shopping
          trip. Your brain begins to prioritize administrative detail-driven
          responsibilities you may have ignored all month, perhaps giving you
          the urge to clean your apartment from top to bottom, reconcile your
          online banking, or cook a week’s worth of meals at one time. You’ll
          also feel a need to nest on an internal level, perhaps paying extra
          attention to your self-care regimen, such as taking long, luxurious
          baths or simply relaxing with a book or a movie. Try slowing down
          social engagements during your luteal phase so you won’t feel
          needlessly exhausted.
        </p>
      </div>
      <div className="accordion-container">
        <Accordion items={accordionContent} />
      </div>
    </main>
  );
};

export default Luteal;
