import "./App.css";
import ContextUserProvider from "./context/context";
import Routing from "./routes/Routes";
import Routes from "./routes/Routes";

function App() {
  return (
    <ContextUserProvider>
      <Routing />
    </ContextUserProvider>
  );
}

export default App;
