import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.scss";

const App = () => {
  return (
    <div className="App">
      <RoutesMain />
      <ToastContainer position="top-right" autoClose={1300} />
    </div>
  );
};

export default App;
