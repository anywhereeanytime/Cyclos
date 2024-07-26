import "./../form/form.css";
import iconGoogle from "./../../images/icon-google.svg";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
const provider = new GoogleAuthProvider();

const Form = ({ children, isLogin, completedOne }) => {
  function signInWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Signed in with Google");
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
  return (
    <section>
      <div className="square-container">
        <div className="form-container">
          {isLogin ? <div className="login sans">sign in!</div> : null}
          <div className="purple-container"></div>
          <div className="white-container">
            {completedOne ? (
              <div className="completed-one sans">completed 0/1</div>
            ) : null}
            <button onClick={signInWithGoogle} className="button-google">
              <img src={iconGoogle} alt="" />
              Sign in with Google
            </button>
            <p className="create-acc-sign sans">or create an account</p>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
