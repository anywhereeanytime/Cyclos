import "./form.css";
import { useState } from "react";
import Input from "./../input/Input";
import Button from "../button/Button";
import iconGoogle from "./../../../images/icon-google.svg";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebase";
const provider = new GoogleAuthProvider();
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signInWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Signed in with Google");
        navigate("/calendar");
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  function createAccount(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setEmail("");
        setPassword("");
        navigate("/calendar");
      })
      .catch((error) => console.log(error));
  }

  function logIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setEmail("");
        setPassword("");
        navigate("/calendar");
      })
      .catch((error) => console.log(error));
  }

  return (
    <section>
      <div className="square-container">
        <div className="form-container">
          <div className="login sans">sign in!</div>
          <div className="purple-container"></div>
          <div className="white-container">
            <div className="completed-one sans">completed 0/1</div>
            <button onClick={signInWithGoogle} className="button-google">
              <img src={iconGoogle} alt="" />
              Sign in with Google
            </button>
            <p className="create-acc-sign sans">or create an account</p>
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
                name="yourPassword"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
