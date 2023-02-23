import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "./ui/header";
import Footer from "./ui/footer";
import Routes from "./routes/routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="mainContainer">
          <Header />
          <Routes />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
