import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";
import Button from "./components/button/Button";
import Input from "./components/input/Input";
import MarqueeStyled from "./components/marquee/Marquee";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Calendar from "./components/pages/Calendar";
import Mainpage from "./components/pages/Mainpage";
import Articles from "./components/pages/Articles";
import Aboutus from "./components/pages/Aboutus";
import Donate from "./components/pages/Donate";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function createAccount(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setEmail("");
        setPassword("");
      })
      .catch((error) => console.log(error));
  }

  function logIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setEmail("");
        setPassword("");
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="App">
      <Header />
      <Main />
      <MarqueeStyled />

      <Form isLogin={true} completedOne={true}>
        <form className="form-input">
          <Input
            label={"Your email"}
            id={"email"}
            type="email"
            name="yourEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label={"Your password"}
            id={"password"}
            type="password"
            name="yourMail"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div style={{ display: "flex" }}>
            <Button onClick={createAccount} type="submit">
              Create account
            </Button>
            <Button onClick={logIn} color={"#CFFD70"}>
              Log in
            </Button>
          </div>
        </form>
      </Form>
      <Footer />
      <Routes>
        <Route path="/articles" element={<Articles />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/mainpage" element={<Mainpage />} />
      </Routes>
    </div>
  );
}

export default App;
