import Home from "./Components/Home";
import Modal from "./Components/Modal";
import Sidebar from "./Components/Sidebar";
import { AppProvider } from "./Components/context";

function App() {
  return (
    <AppProvider>
      <Home />
      <Modal />
      <Sidebar />
    </AppProvider>
  );
}

export default App;
