import "./../cycles/cycles.css";
import Button from "../../elements/button/Button";
import MarqueeStyled from "./../../elements/marquee/Marquee";
import Accordion from "./Accordion";
import mainLogo from "/images/Vector.png";

const Follicular = () => {
  const contents = [
    "Physical energy increases throughout this phase, and you may sometimes feel restless. As the days progress, menstrual symptoms like bloating and breast tenderness may begin to subside.",
    "Initially little to no vaginal secretions occur; then they start to increase—yellow or white in color and tacky or sticky in texture.",
    "Fresh, vibrant, light foods make you feel more energized during this phase, when all hormone levels are at their lowest. Think: pressed salads (kimchi and sauerkraut), plenty of veggies, lean proteins, sprouted beans and seeds, and dense, energy-sustaining grains. How you cook your foods matters, too, so favor light cooking methods such as steaming or sautéing during the follicular phase.",
    "Try something new—take that Zumba or yoga sculpting class you’ve been yearning to try at your gym. Putting your brain and body in a new, stimulating situation feels like an easy, natural thing for you to do at this time of the month. You also form new neuroconnections in the brain more easily, which means that stepping outside your comfort zone is a seamless thing to do; furthermore, new activities are more likely to stick when you start them now than at any other point in your cycle. You have the energy to go for those more challenging workouts at this time, too.",
  ];

  return (
    <main>
      <MarqueeStyled />
      <div className="cycle-page">
        <div className="flex page-wrapper">
          <h2 className="serif cycle-defenition">
            hmm... it seems like you’re in your{" "}
            <span className="cursive">follicular phase!</span>
          </h2>
          <img className="calendar-logo" src={mainLogo} alt="" />
          <Button>learn more about this cycle!</Button>
          <p className="sans advice-section">
            Creativity and new beginnings characterize this phase. This is the
            time to direct your energy into stimulating projects at work and at
            home. Plan brainstorming sessions with your coworkers; save your
            most mentally challenging assignments for this week, since your
            brain’s penchant for creativity at this time makes it easier to
            problem-solve. Your physical energy is at one of its highest points
            during your follicular phase. Emotionally, you feel outgoing,
            upbeat, and revitalized. When setting your social calendar for the
            month, RSVP yes to invites during this week, when you’ll have the
            most energy to be out and active. It’s also an ideal time to plan to
            see a new exhibit or check out a new band: you’ll be most open to
            the new experience and will find it most stimulating during this
            time.
          </p>
        </div>
        <div className="accordion-container">
          <Accordion contents={contents} />
        </div>
      </div>
    </main>
  );
};

export default Follicular;
