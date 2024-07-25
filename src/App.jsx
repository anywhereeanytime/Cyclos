import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";
import Button from "./components/button/Button";
import Input from "./components/input/Input";
import MarqueeStyled from "./components/marquee/Marquee";
import { useState } from "react";

function App() {
  // ЗДЕСЬ НАЧИНАЕТСЯ ЛОГИКА С ФОРМОЙ
  const [formData, setFormData] = useState({
    yourName: "",
    yourMail: "",
  });

  function handleChange(event) {
    console.log(event.target);
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  } // ЗДЕСЬ ЗАКАНЧИВАЕТСЯ. НУЖНО СДЕЛАТЬ ОТДЕЛЬНЫМ КОМПОНЕНТОМ

  return (
    <div className="App">
      <Header />
      <Main />
      <MarqueeStyled />

      <Form isLogin={true} completedOne={true}>
        <form className="form-input" action="">
          <Input
            label={"Your email"}
            id={"email"}
            type="email"
            name="yourEmail"
            value={formData.yourEmail}
            onChange={(e) => handleChange(e)}
          />

          <Input
            label={"Your password"}
            id={"password"}
            type="password"
            name="yourMail"
            value={formData.yourPassword}
            onChange={(e) => handleChange(e)}
          />
          <div style={{ display: "flex" }}>
            <Button>Create account</Button>
            <Button color={"#CFFD70"}>Log in</Button>
          </div>
        </form>
      </Form>
      <Footer />
    </div>
  );
}

export default App;
