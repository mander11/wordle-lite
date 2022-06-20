import { render } from "react-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  return <HomePage />;
};

render(<App />, document.getElementById("root"));
