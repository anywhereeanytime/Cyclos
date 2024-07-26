import Main from "./components/main/Main";
import Footer from "./components/elements/footer/Footer";
import Calendar from "./components/pages/Calendar";
import Mainpage from "./components/pages/Mainpage";
import Articles from "./components/pages/Articles";
import Aboutus from "./components/pages/Aboutus";
import Donate from "./components/pages/Donate";
import { Routes, Route } from "react-router-dom";
import Header from "./components/elements/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/mainpage" element={<Mainpage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
