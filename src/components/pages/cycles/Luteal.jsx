import "./../cycles/cycles.css";
import Button from "../../elements/button/Button";
import MarqueeStyled from "./../../elements/marquee/Marquee";
import Accordion from "./Accordion";
import mainLogo from "/images/Vector.png";

const Luteal = () => {
  const contents = [
    "Physical energy declines, and premenstrual symptoms may develop toward the end of your cycle—symptoms such as bloating, irritability, headache, mood swings, and cravings.",
    "Cervical mucus tends to become thicker and creamier. Less stretchy and more likely to break when stretched between your fingers.The color is often white or off-white. You may notice a decrease in the overall volume.From little to no vaginal secretions; then they start to increase - yellow or white in color and tacky or sticky in texture.",
    "Increase magnesium-rich foods like nuts, seeds, and dark chocolate, which can help with mood swings and water retention. Consume foods high in vitamin B6 (e.g., bananas, poultry, chickpeas) to support hormone regulation. Incorporate complex carbohydrates to help stabilize blood sugar levels and reduce mood swings.",
    "During the first half of the luteal phase your energy may still be high, so continue with the more strenuous activities you took on during ovulation. Then scale back on your intensity during the final five days with activities such as walking, Pilates, gyrotonic training, and vinyasa yoga. You may feel a little more sluggish and experience more water retention toward the end of this phase, so choose exercise with lower resistance (such as using the elliptical trainer)—you’ll still be working your muscles, but it won’t be as jarring for your body.",
  ];

  return (
    <main>
      <MarqueeStyled />
      <div className="cycle-page">
        <div className="flex page-wrapper">
          <h2 className="serif cycle-defenition">
            hmm... it seems like you’re in your{" "}
            <span className="cursive">luteal phase!</span>
          </h2>
          <img className="calendar-logo" src={mainLogo} alt="" />
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
          <Accordion contents={contents} />
        </div>
      </div>
    </main>
  );
};

export default Luteal;
