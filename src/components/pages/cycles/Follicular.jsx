import "./../cycles/cycles.css";
import Button from "../../elements/button/Button";
import Marquee from "./../../elements/marquee/Marquee";
import Accordion from "./Accordion";
import bodyEmoji from "./../../../images/body.png";

const Follicular = () => {
  const accordionContent = [
    {
      icon: bodyEmoji,
      title: "body",
      content:
        "The follicular phase starts on the first day of your period and ends when you ovulate. It’s characterized by the growth of follicles in the ovaries.",
    },
    {
      icon: "🔬",
      title: "vagina",
      content:
        "From little to no vaginal secretions; then they start to increase - yellow or white in color and tacky or sticky in texture.",
    },
    {
      icon: "💪",
      title: "food",
      content:
        "Complex carbohydrates: Opt for whole grains like oats, quinoa, and brown rice to provide sustained energy throughout this phase. Protein-rich foods: Include lean proteins such as chicken, tofu, and legumes to support muscle recovery and hormone balance. Healthy fats: Incorporate sources of healthy fats like avocados, nuts, and seeds to support hormone production.",
    },
    {
      icon: "✨",
      title: "workout",
      content: "Try challenging workouts. Running, Cycling, or Swimming.",
    },
  ];

  return (
    <main>
      <Marquee />
      <div className="flex">
        <h2 className="serif cycle-defenition">
          hmm... it seems like you’re in your{" "}
          <span className="cursive">follicular phase!</span>
        </h2>
        <Button>learn more about this cycle!</Button>
        <p className="sans advice-section">
          Direct your energy into stimulating projects at work and at home. Save
          your most mentally challenging assignments for this week. Set uo
          meetings. Try something new. Perfect time for new expierences.
        </p>
      </div>
      <div className="accordion-container">
        <Accordion items={accordionContent} />
      </div>
    </main>
  );
};

export default Follicular;
