import FixedNavbar from "./components/FixedNavbar";
import Sections from "./components/Sections";
import NavProvider from "./context/NavContext";

function App() {
  return (
    <>
      <NavProvider>
        <Sections />
        <FixedNavbar />
      </NavProvider>
    </>
  );
}

export default App;