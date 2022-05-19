import "./App.css";
import CSSTranDropdown from "./components/CSSTranDropdown";
import CSSTranModal from "./components/CSSTranModal";
import FramerDropdown from "./components/FramerDropdown";
import FramerModal from "./components/FramerModal";

function App() {
  return (
    <div className="App min-h-screen overflow-x-hidden">
      <main className="p-4 flex flex-1 flex-wrap justify-evenly gap-4">
        {/* CSS Transition */}
        <section className="w-[45%] max-w-md min-w-[16rem] flex flex-col gap-6 items-center justify-center">
          {/* CSS Transition nav dropdown */}
          <CSSTranDropdown />
          {/* CSS Transition modal */}
          <CSSTranModal />
        </section>

        {/* Framer Motion */}
        <section className="w-[45%] max-w-md min-w-[16rem] flex flex-col gap-6 items-center justify-center">
          {/* Framer Motion nav dropdown */}
          <FramerDropdown />
          {/* Framer Motion modal */}
          <FramerModal />
        </section>
      </main>
    </div>
  );
}

export default App;
