import "./../cycles/cycles.css";
import Button from "../../elements/button/Button";
import MarqueeStyled from "./../../elements/marquee/Marquee";
import Accordion from "./Accordion";
import mainLogo from "/images/Vector.png";

const Ovulation = () => {
  const contents = [
    "You may feel pelvic pain with the release of the egg as well as a surge of energy or a sense of depletion, along with cravings or a headache.",
    "Vaginal discharge increases and is clear, wet, slippery, or stretchy on your day of peak fertility. As you move past that peak day, vaginal discharge dries.",
    "You have plenty of natural energy and your mood is stable because of all the estrogen floating around, so go easy on the carbohydrates and stick to lighter grains such as corn and quinoa. Still, you want to be sure your body is metabolizing and eliminating the surplus of estrogen efficiently, so fill up on veggies and fruit. Continue to focus on lighter preparations of foods, such as steaming or, when appropriate, eating foods raw.",
    "When deciding which activities are best during this phase, keep two things in mind: high-impact workout and group settings. Your energy levels are at their max, so you’re primed to take on more strenuous exercise such as weight lifting, plyometrics, and running. Since communicating and connecting with others also feels great on these days, consider running with friends or a team or taking swimming, dancing, or spinning classes.",
  ];

  return (
    <main>
      <MarqueeStyled />
      <div className="cycle-page">
        <div className="flex page-wrapper">
          <h2 className="serif cycle-defenition">
            hmm... it seems like you’re in your{" "}
            <span className="cursive">ovulatory phase!</span>
          </h2>
          <img className="calendar-logo" src={mainLogo} alt="" />
          <Button>learn more about this cycle!</Button>
          <p className="sans advice-section">
            Connecting with community is at the heart of this phase. This is the
            time to have important conversations, whether it’s with your spouse,
            your mom, or your boss. If possible, hold off on having those
            conversations until this ovulatory phase, when your heightened
            communication skills will allow you to convey your thoughts and
            opinions more clearly, as well as to be more receptive to those of
            others. If you’re planning to ask for a raise, do it during your
            ovulatory phase. This is also an ideal time to go on first dates,
            since your increased communication skills will make you that much
            more magnetic. And since you’re at your most fertile in this phase,
            chances are (studies tell us) you put extra effort into looking and
            feeling your best in an unconscious effort to attract a mate when
            ovulating. But beware that your new chosen one will seem more
            attractive to you than he really is.
          </p>
        </div>
        <div className="accordion-container">
          <Accordion contents={contents} />
        </div>
      </div>
    </main>
  );
};

export default Ovulation;
