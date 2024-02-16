import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="App">
      <RoutesMain />
      <ToastContainer position="top-right" autoClose={1300} theme="dark" />
    </div>
  );
};

export default App;
