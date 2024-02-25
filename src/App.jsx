import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.scss";
import { useContext } from "react";
import { ClientContext } from "./providers/ClientContext";
import { Loading } from "./components/Loading";

const App = () => {
  const { loading } = useContext(ClientContext);
  return (
    <div className="App">
      {loading ? <Loading /> : <RoutesMain />}
      <ToastContainer position="top-right" autoClose={1300} />
    </div>
  );
};

export default App;
