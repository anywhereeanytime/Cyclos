import "./../cycles/cycles.css";
import Button from "../../elements/button/Button";
import MarqueeStyled from "./../../elements/marquee/Marquee";
import Accordion from "./Accordion";
import mainLogo from "/images/Vector.png";

const Menstruation = () => {
  const contents = [
    "You may also experience pelvic cramping, low backache, fatigue, and cravings. Sometimes you may feel a sense of relaxation and relief as your estrogen peak passes.",
    "A combination of brown spotting and red bleeding characterizes this phase.",
    "Seafood and sea-based veggies will also help remineralize your body with iron and zinc, which you lose during menstruation. The foods for the menstrual phase are all deeply restorative to the blood and kidneys—perfect for while you are bleeding. Choose whatever preparations feel most comforting to you. (Hint: for most of the year that will be soups and stews.)",
    "Rest and recovery are important parts of any exercise program so that your body can repair. Schedule rest or yoga during the early part of the menstrual phase, especially the first day or two, when your flow may be heaviest. Take time to stretch and walk on these days. As you move into the end of bleeding and toward the follicular phase again, begin to amp up your activity according to how you feel.",
  ];

  return (
    <main>
      <MarqueeStyled />
      <div className="cycle-page">
        <div className="flex page-wrapper">
          <h2 className="serif cycle-defenition">
            hmm... it seems like you’re in your{" "}
            <span className="cursive">menstrual phase!</span>
          </h2>
          <img className="calendar-logo" src={mainLogo} alt="" />
          <Button>learn more about this cycle!</Button>
          <p className="sans advice-section">
            Self-analysis and course-correction are dominant now. During your
            menstrual phase, the communication between the right and left
            hemispheres of your brain is more powerful than at any other time.
            This enables you to judiciously evaluate how you’re doing in your
            life and, if necessary, begin identifying and making course
            corrections that will reposition you in the direction that you want
            to be heading. Because of the way your hemispheres are firing back
            and forth, you’re also most likely to receive clear intuitive-gut
            messages during your menstrual phase. Check in. Listen to what those
            subtle messages are, especially if every month you’re coming up
            against the same thoughts, worries, or fears at this time. Many
            women find that journaling during their menstrual phase, especially
            when they first learn to sync with their cycles, allows them to
            access deeper insight into what their instincts are telling them. It
            also helps them begin to notice thought patterns that may occur
            month after month, urging a particular action. Many women feel
            relieved when they learn that feelings such as restlessness and
            dissatisfaction during the menstrual phase are completely normal.
            Instead of allowing these thoughts to make you feel overwhelmed,
            take advantage of this phase to identify which areas of your life
            need your attention. Those messages will be most clear to you at
            this time. Then use the other weeks in your cycle to address these
            issues in a variety of different ways to help you come up with the
            best solutions and improvements for you.
          </p>
        </div>
        <div className="accordion-container">
          <Accordion contents={contents} />
        </div>
      </div>
    </main>
  );
};

export default Menstruation;
