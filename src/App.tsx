import "./App.css";
import CSSTranDropdown from "./components/CSSTranDropdown";
import CSSTranInOutList from "./components/CSSTranInOutList";
import CSSTranListHeight from "./components/CSSTranListHeight";
import CSSTranModal from "./components/CSSTranModal";
import FramerDropdown from "./components/FramerDropdown";
import FramerListHeight from "./components/FramerListHeight";
import FramerModal from "./components/FramerModal";

function App() {
  return (
    <div className="App min-h-screen text-white overflow-x-hidden mb-8">
      <main className="p-4 flex flex-1 flex-wrap items-start justify-evenly gap-4">
        {/* CSS Transition */}
        <section className="w-[45%] max-w-md min-w-[16rem] flex flex-col gap-6 items-center justify-center">
          {/* CSS Transition nav dropdown */}
          <CSSTranDropdown />
          {/* CSS Transition modal */}
          <CSSTranModal />
          {/* CSS Transition auto height list */}
          <CSSTranListHeight />
          {/* CSS Transition in-out list */}
          <CSSTranInOutList />
        </section>

        {/* Framer Motion */}
        <section className="w-[45%] max-w-md min-w-[16rem] flex flex-col gap-6 items-center justify-center">
          {/* Framer Motion nav dropdown */}
          <FramerDropdown />
          {/* Framer Motion modal */}
          <FramerModal />
          {/* Framer Motion auto height list */}
          <FramerListHeight />
        </section>
      </main>
    </div>
  );
}

export default App;
